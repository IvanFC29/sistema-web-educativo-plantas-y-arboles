from django.shortcuts import render
from rest_framework import viewsets
from ..models import MensajeJuego
from ..serializer import MensajeSerializer

class MensajeVista(viewsets.ModelViewSet):
    serializer_class = MensajeSerializer
    queryset = MensajeJuego.objects.all()