from django.shortcuts import render
from rest_framework import viewsets
from ..models import MensajeJuego
from ..serializer import MensajeJuegoSerializer

class MensajeVista(viewsets.ModelViewSet):
    serializer_class = MensajeJuegoSerializer
    queryset = MensajeJuego.objects.all()