from django.contrib import admin
from .models import Planta, ProgresoJuego, AporteAmbiental, AprendizajeJuego, MensajeJuego
# Register your models here.

admin.site.register(Planta)
admin.site.register(ProgresoJuego)
admin.site.register(AporteAmbiental)
admin.site.register(AprendizajeJuego)
admin.site.register(MensajeJuego)