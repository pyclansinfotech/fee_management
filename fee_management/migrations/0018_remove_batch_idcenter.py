# Generated by Django 2.0.7 on 2018-10-16 05:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0017_auto_20181015_1638'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='batch',
            name='idCenter',
        ),
    ]