# Generated by Django 4.2.20 on 2025-06-18 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sistemaWeb', '0002_planta_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planta',
            name='imagen',
            field=models.ImageField(default='imagenes/fotoDefault.png', upload_to='imagenes/'),
        ),
    ]
