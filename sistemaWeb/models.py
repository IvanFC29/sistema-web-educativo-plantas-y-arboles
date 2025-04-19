from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.EmailField(max_length=150, unique=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Planta(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='plantas')
    especie = models.CharField(max_length=100)
    tipo = models.CharField(max_length=100)
    cantidad = models.PositiveIntegerField()
    oxigenoTotal = models.DecimalField(max_digits=10, decimal_places=2)
    co2Total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.especie
    
class Progreso(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name="progreso")
    nivel = models.PositiveIntegerField()
    puntos = models.PositiveIntegerField()
    tituloMensaje = models.CharField(max_length=200)
    descripcionMensaje = models.TextField()

    def __str__(self):
        return f"{self.usuario.nombre} - {self.nivel}"
    
class Publicacion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='publicaciones')
    fecha = models.DateTimeField(auto_now_add=True)
    texto = models.TextField()
    leido = models.BooleanField(default=False)

    def __str__(self):
         return f"{self.usuario.nombre} - {self.fecha}"
    
class Respuesta(models.Model):
    publicacion = models.ForeignKey(Publicacion, on_delete=models.CASCADE, related_name="respuestas")
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="comentarios")
    comentario = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comentario de {self.usuario.nombre} en {self.publicacion.id}"