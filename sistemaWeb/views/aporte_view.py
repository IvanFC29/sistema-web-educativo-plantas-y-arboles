from django.shortcuts import render
from rest_framework import viewsets
from ..models import AporteAmbiental
from ..serializer import AporteSerializer

class AporteVista(viewsets.ModelViewSet):
    serializer_class = AporteSerializer
    queryset = AporteAmbiental.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        plantaID = self.request.query_params.get('planta')
        if plantaID is not None:
            queryset = queryset.filter(planta = plantaID)
        return queryset
