from django.contrib import admin
from .models import Event, CustomUser


admin.site.register(Event)
admin.site.register(CustomUser)