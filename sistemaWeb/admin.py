from django.contrib import admin
from .models import Usuario, Planta, ProgresoJuego, AporteAmbiental
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Planta)
admin.site.register(ProgresoJuego)
admin.site.register(AporteAmbiental)