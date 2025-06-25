from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializer import UserSerializer
from rest_framework import status
from django.contrib.auth.models import User

@api_view(['POST'])
def login(request):
    return Response({})

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'mensaje': 'Usuario creado correctamente'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)