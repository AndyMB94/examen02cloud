from rest_framework import generics, permissions
from .models import Cliente
from .serializers import ClienteSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class LoginView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

class ClienteListView(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [permissions.IsAuthenticated]
