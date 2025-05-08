from django.shortcuts import render
from rest_framework import viewsets
from ..models import Usuario
from ..serializer import UsuarioSerializer

class UsuarioVista(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()