from django.urls import path
from .views import LoginView, ClienteListView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('', ClienteListView.as_view(), name='clientes'),
]
