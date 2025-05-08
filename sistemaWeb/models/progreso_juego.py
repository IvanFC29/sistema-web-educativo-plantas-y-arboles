from django.db import models
from .usuario import Usuario

class ProgresoJuego(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name="progreso")
    nivel = models.PositiveIntegerField()
    puntos = models.PositiveIntegerField()
   
    def __str__(self):
        return f"{self.usuario.nombre} - {self.nivel}"
 