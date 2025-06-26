from django.db import models
from django.contrib.auth.models import User 

class ProgresoJuego(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, related_name="progreso")
    nivel = models.PositiveIntegerField(default=0)
    puntos = models.PositiveIntegerField(default=0)
   
    def __str__(self):
        return f"{self.usuario.nombre} - {self.nivel}"
 