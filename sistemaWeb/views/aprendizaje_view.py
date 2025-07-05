from rest_framework import viewsets
from ..models import AprendizajeJuego
from ..serializer import AprendizajeSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class AprendizajeVista(viewsets.ModelViewSet):
    serializer_class = AprendizajeSerializer
    queryset = AprendizajeJuego.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        queryset = super().get_queryset()
        ProgresoID = self.request.query_params.get('progreso')
        if ProgresoID is not None:
            queryset = queryset.filter(progreso=ProgresoID)
        return queryset
