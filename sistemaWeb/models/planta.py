from django.db import models
from django.contrib.auth.models import User

class Planta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='plantas')
    especie = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)
    tipo = models.CharField(max_length=100)
    foto = models.ImageField(upload_to='imagenes/', default='imagenes/fotoDefault.png')

    def __str__(self):
        return self.especie