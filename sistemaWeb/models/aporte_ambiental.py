from django.db import models
from .planta import Planta

class AporteAmbiental(models.Model):
    planta = models.ForeignKey(Planta, on_delete=models.CASCADE, related_name='aportes')
    cantidad = models.PositiveIntegerField()
    oxigenoTotal = models.DecimalField(max_digits=10, decimal_places=2)
    carbonoTotal = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    co2Total = models.DecimalField(max_digits=10, decimal_places=2)
    fechaRegistro = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.oxigenoTotal} {self.carbonoTotal} {self.co2Total}"