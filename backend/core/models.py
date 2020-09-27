from django.db import models
from django.utils.timezone import now
from django.contrib.auth import get_user_model
from rest_framework.reverse import reverse as api_reverse

from model_utils import Choices
from model_utils.models import TimeStampedModel, StatusModel


User = get_user_model()


# Event Table
class Event(TimeStampedModel, StatusModel):
    STATUS = Choices(
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def get_api_url(self, request=None):
        return api_reverse("core:event-detail", kwargs={'pk': self.pk}, request=request)

    class Meta:
        ordering = ['-id']


# EventMeta table to store repeated events information in efficient manner.
# In case of repeated events either [interval] field will be populated or [year, month, day week and weekday] fields
# In case of individual event interval will be 0
class EventMeta(TimeStampedModel):
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    alert = models.BooleanField(default=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='events')
    start = models.DateTimeField(default=now)
    interval = models.DurationField(null=True, blank=True)
    year = models.CharField(blank=True, max_length=4)
    month = models.CharField(blank=True, max_length=2)
    day = models.CharField(blank=True, max_length=2)
    week = models.CharField(blank=True, max_length=2)
    weekday = models.CharField(blank=True, max_length=2)

    class Meta:
        ordering = ['-id']
