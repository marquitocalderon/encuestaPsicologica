# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Datospersonales(models.Model):
    id_datospersonales = models.AutoField(primary_key=True)
    nombre = models.CharField(unique=True, max_length=255, db_collation='Modern_Spanish_CI_AS')
    edad = models.IntegerField(blank=True, null=True)
    idusuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='idusuario')

    class Meta:
        managed = False
        db_table = 'datospersonales'


class Psicologia(models.Model):
    id_psicologia = models.AutoField(primary_key=True)
    alcholismo = models.CharField(max_length=2, db_collation='Modern_Spanish_CI_AS', blank=True, null=True)
    idusuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='idusuario')

    class Meta:
        managed = False
        db_table = 'psicologia'


class Usuarios(models.Model):
    idusuario = models.AutoField(primary_key=True)
    usuario = models.CharField(unique=True, max_length=255, db_collation='Modern_Spanish_CI_AS')
    contra = models.CharField(unique=True, max_length=255, db_collation='Modern_Spanish_CI_AS')

    class Meta:
        managed = False
        db_table = 'usuarios'
