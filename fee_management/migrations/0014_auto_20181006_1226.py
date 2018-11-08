# Generated by Django 2.0.7 on 2018-10-06 12:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0013_auto_20181006_1203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='idbatch',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='fee_management.batch'),
        ),
        migrations.AlterField(
            model_name='student',
            name='idcenter',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='fee_management.center'),
        ),
    ]