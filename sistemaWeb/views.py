from django.shortcuts import render
from rest_framework import viewsets
from .models import Usuario, Planta, Progreso, Publicacion, Respuesta
from .serializer import UsuarioSerializer, PlantaSerializer, ProgresoSerializer, PublicacionSerialzer, RespuestaSerializer

# Create your views here.
class UsuarioVista(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class PlantaVista(viewsets.ModelViewSet):
    serializer_class = PlantaSerializer
    queryset = Planta.objects.all()

class ProgresoVista(viewsets.ModelViewSet):
    serializer_class = ProgresoSerializer
    queryset = Progreso.objects.all()

class PublicacionVista(viewsets.ModelViewSet):
    serializer_class = PublicacionSerialzer
    queryset = Publicacion.objects.all()

class RespuestaVista(viewsets.ModelViewSet):
    serializer_class = RespuestaSerializer
    queryset = Respuesta.objects.all()