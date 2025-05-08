from django.shortcuts import render
from rest_framework import viewsets
from ..models import ProgresoJuego
from ..serializer import ProgresoSerializer

class ProgresoVista(viewsets.ModelViewSet):
    serializer_class = ProgresoSerializer
    queryset = ProgresoJuego.objects.all()
