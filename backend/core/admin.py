from django.contrib import admin
from core.models import Event, EventMeta


class EventMetaInline(admin.TabularInline):
    model = EventMeta


class EventAdmin(admin.ModelAdmin):
    inlines = [EventMetaInline]


admin.site.register(Event, EventAdmin)

