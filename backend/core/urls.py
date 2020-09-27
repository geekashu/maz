from django.urls import path
from core import views

app_name = "core"

urlpatterns = [
    path('', views.EventList.as_view(), name='event-list'),
    path('<int:pk>/', views.EventDetail.as_view(), name='event-detail'),
]