from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Datospersonales, Psicologia, Usuarios
from .serializers import DatospersonalesSerializer, PsicologiaSerializer, UsuariosSerializer

class Usuario_API(APIView):
    def get(self, request, id=None):
        if id is None:
            # Obtener todos los usuarios
            usuarios = Usuarios.objects.all()
            serializer = UsuariosSerializer(usuarios, many=True)
            return Response(serializer.data)
        else:
            try:
                # Obtener el usuario por el id
                usuario = Usuarios.objects.get(idusuario=id)
                serializer = UsuariosSerializer(usuario)
                return Response(serializer.data)
            except Usuarios.DoesNotExist:
                return Response({"message": "No existe el usuario."}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        # Validar los datos recibidos con el serializer
        serializer = UsuariosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Retornar una respuesta exitosa
            return Response({"message": "Datos guardados exitosamente."}, status=status.HTTP_201_CREATED)
        else:
            # Retornar los errores de validación si los datos no son válidos
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
class Datospersonales_API(APIView):
    def get(self, request, id=None):
        if id is None:
            # Obtener todos los datos personales
            datospersonales = Datospersonales.objects.all()
            serializer = DatospersonalesSerializer(datospersonales, many=True)
            return Response(serializer.data)
        else:
            try:
                # Obtener los datos personales por el id
                datos_personales = Datospersonales.objects.get(id=id)
                serializer = DatospersonalesSerializer(datos_personales)
                return Response(serializer.data)
            except Datospersonales.DoesNotExist:
                return Response({"message": "No existen datos personales para este usuario."}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        # Validar los datos recibidos con el serializer
        serializer = DatospersonalesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Retornar una respuesta exitosa
            return Response({"message": "Datos personales guardados exitosamente."}, status=status.HTTP_201_CREATED)
        else:
            # Retornar los errores de validación si los datos no son válidos
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Psicologia_API(APIView):
    def get(self, request, id=None):
        if id is None:
            # Obtener todos los registros de psicologia
            psicologia = Psicologia.objects.all()
            serializer = PsicologiaSerializer(psicologia, many=True)
            return Response(serializer.data)
        else:
            try:
                # Obtener los registros de psicologia por el id
                psicologia = Psicologia.objects.get(id=id)
                serializer = PsicologiaSerializer(psicologia)
                return Response(serializer.data)
            except Psicologia.DoesNotExist:
                return Response({"message": "No existen registros de psicologia para este usuario."}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        # Validar los datos recibidos con el serializer
        serializer = PsicologiaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Retornar una respuesta exitosa
            return Response({"message": "Datos de psicologia guardados exitosamente."}, status=status.HTTP_201_CREATED)
        else:
            # Retornar los errores de validación si los datos no son válidos
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)