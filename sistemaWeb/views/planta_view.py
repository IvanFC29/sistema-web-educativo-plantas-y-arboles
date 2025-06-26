from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from ..models import Planta
from ..serializer import PlantaSerializer

class PlantaVista(viewsets.ModelViewSet):
    queryset = Planta.objects.all()  
    serializer_class = PlantaSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        return Planta.objects.filter(usuario=self.request.user)
   
    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(usuario=user)