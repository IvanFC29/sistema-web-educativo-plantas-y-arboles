from rest_framework import viewsets
from ..models import MensajeJuego
from ..serializer import MensajeSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class MensajeVista(viewsets.ModelViewSet):
    serializer_class = MensajeSerializer
    queryset = MensajeJuego.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        queryset = super().get_queryset()
        progresoID = self.request.query_params.get('progreso')
        if progresoID is not None:
            queryset = queryset.filter(progreso=progresoID)
        return queryset
        