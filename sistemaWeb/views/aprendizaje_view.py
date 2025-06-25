from django.shortcuts import render
from rest_framework import viewsets
from ..models import AprendizajeJuego
from ..serializer import AprendizajeSerializer

class AprendizajeVista(viewsets.ModelViewSet):
    serializer_class = AprendizajeSerializer
    queryset = AprendizajeJuego.objects.all()