from rest_framework import generics, permissions
from .models import Producto
from .serializers import ProductoSerializer

class ProductoListView(generics.ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    permission_classes = [permissions.IsAuthenticated]
