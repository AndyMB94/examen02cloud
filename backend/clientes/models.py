from django.db import models
from django.contrib.auth.models import AbstractUser

class Cliente(AbstractUser):
    nombre = models.CharField(max_length=100)
    celular = models.CharField(max_length=15, blank=True)