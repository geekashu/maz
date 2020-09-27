from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/auth/', include('djoser.urls')),
    url(r'^api/auth/', include('djoser.urls.jwt')),
    url(r'^api/events/', include('core.urls', namespace='core')),
]

if settings.DEBUG:
    # import debug_toolbar

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('api-auth/', include('rest_framework.urls')),
        # path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
