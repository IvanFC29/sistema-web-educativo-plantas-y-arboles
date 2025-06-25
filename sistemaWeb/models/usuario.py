from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.EmailField(max_length=150, unique=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"