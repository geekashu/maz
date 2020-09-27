from rest_framework import generics
from django.db.models import Prefetch
from django.utils.dateparse import parse_datetime
from rest_framework.permissions import IsAuthenticated

from core.models import Event, EventMeta
from core.serializers import EventSerializer


class EventList(generics.ListCreateAPIView):
    # pagination_class = BasicPagination
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)

        qs = Event.objects.all().filter(status='active', owner=self.request.user)

        if start_date and end_date:
            qs = qs.prefetch_related(
                Prefetch('events', queryset=EventMeta.objects.filter(
                    start__gte=parse_datetime(start_date),
                    start__lte = parse_datetime(end_date)
                ))
            )

        return qs

    def post(self, request, *args, **kwargs):
        return super(EventList, self).post(request, *args, **kwargs)


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Event.objects.all().filter(owner=self.request.user)

    def patch(self, request, *args, **kwargs):
        return super(EventDetail, self).patch(request, *args, **kwargs)