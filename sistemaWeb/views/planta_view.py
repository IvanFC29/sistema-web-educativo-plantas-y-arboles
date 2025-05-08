from django.shortcuts import render
from rest_framework import viewsets
from ..models import Planta
from ..serializer import PlantaSerializer

class PlantaVista(viewsets.ModelViewSet):
    serializer_class = PlantaSerializer
    queryset = Planta.objects.all()