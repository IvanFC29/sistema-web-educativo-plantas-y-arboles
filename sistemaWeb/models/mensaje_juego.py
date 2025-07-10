from django.db import models
from .progreso_juego import ProgresoJuego

class MensajeJuego(models.Model):
    progreso = models.ForeignKey(ProgresoJuego, on_delete=models.CASCADE, related_name='mensajes')
    titulo = models.CharField(max_length=150)
    descripcion = models.CharField(max_length=900)
    destacado = models.BooleanField(default=False)
    desbloqueado = models.BooleanField(default=False)

    class Meta:
        unique_together = ('progreso', 'titulo') 

    def __str__(self):
        return f"{self.titulo} - {self.desbloqueado}"
