from django.shortcuts import render
from rest_framework import viewsets
from ..models import AporteAmbiental
from ..serializer import AporteSerializer

class AporteVista(viewsets.ModelViewSet):
    serializer_class = AporteSerializer
    queryset = AporteAmbiental.objects.all()
