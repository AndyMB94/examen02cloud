from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Cliente

class ClienteAdmin(UserAdmin):
    model = Cliente
    list_display = ('username', 'email', 'nombre', 'celular', 'is_staff', 'is_superuser')
    fieldsets = UserAdmin.fieldsets + (
        ('Información adicional', {'fields': ('nombre', 'celular')}),
    )

admin.site.register(Cliente, ClienteAdmin)