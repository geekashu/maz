from rest_framework import serializers
from core.models import Event, EventMeta


class EventMetaSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = EventMeta
        exclude = ['event']
        read_only_fields = ['created', 'modified']


class EventSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    owner = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )
    appointments = EventMetaSerializer(many=True, source='events')

    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['id', 'created', 'modified', 'owner', 'status_changed']

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

    def create(self, validated_data):
        request = self.context.get("request")

        events_data = validated_data.pop('events')
        event = Event.objects.create(owner=request.user, **validated_data)

        for data in events_data:
            EventMeta.objects.get_or_create(event=event, **data)

        return event

    def update(self, instance, validated_data):
        events_data = validated_data.pop('events')

        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.save()

        for data in events_data:
            pk = data.pop('id')
            EventMeta.objects.update_or_create(id=pk, defaults=data)

        return instance

