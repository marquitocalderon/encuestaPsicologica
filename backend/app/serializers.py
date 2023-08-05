from rest_framework import serializers
from .models import Datospersonales, Psicologia, Usuarios

class DatospersonalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datospersonales
        fields = '__all__'

class PsicologiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psicologia
        fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
