from rest_framework import viewsets
from ..models import ProgresoJuego
from ..serializer import ProgresoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action

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

    @action(detail=False, methods=['post'], url_path='incrementar-contador-msj')
    def incrementarContadorMensaje(self, request):
        progreso, created = ProgresoJuego.objects.get_or_create(usuario=request.user)
        progreso.cantidadMsjDesbloqueados += 1
        progreso.save()
        return Response({"mensaje":"Item mensaje desbloqueado", "cantidad": progreso.cantidadMsjDesbloqueados}, status=status.HTTP_202_ACCEPTED)

    @action(detail=False, methods=['post'], url_path='incrementar-contador-apzj')
    def incrementarContadorAprendizaje(self, request):
        progreso, created = ProgresoJuego.objects.get_or_create(usuario=request.user)
        progreso.cantidadApzjDesbloqueados += 1
        progreso.save()
        return Response({"mensaje":"Item aprendizaje desbloqueado", "cantidad":progreso.cantidadApzjDesbloqueados}, status=status.HTTP_202_ACCEPTED)