from rest_framework import viewsets
from ..models import ProgresoJuego
from ..serializer import ProgresoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class ProgresoVista(viewsets.ModelViewSet):
    serializer_class = ProgresoSerializer
    queryset = ProgresoJuego.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        return ProgresoJuego.objects.filter(usuario=self.request.user)
    
    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(usuario=user)
