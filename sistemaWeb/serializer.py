from rest_framework import serializers
from .models import Usuario, Planta, ProgresoJuego, AporteAmbiental, AprendizajeJuego, MensajeJuego

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class PlantaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planta
        fields = '__all__'

class ProgresoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgresoJuego
        fields = '__all__'

class AporteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AporteAmbiental
        fields = '__all__'

class AprendizajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AprendizajeJuego
        fields = '__all__'

class MensajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MensajeJuego
        fields = '__all__'