# Generated by Django 2.0.7 on 2018-10-15 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0016_remove_uploaded_idtranchecksum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checker',
            name='Type',
            field=models.CharField(blank=True, max_length=40),
        ),
    ]
