from django.shortcuts import render
from rest_framework import viewsets
from ..models import AprendizajeJuego
from ..serializer import AprendizajeJuegoSerializer

class AprendizajeVista(viewsets.ModelViewSet):
    serializer_class = AprendizajeJuegoSerializer
    queryset = AprendizajeJuego.objects.all()