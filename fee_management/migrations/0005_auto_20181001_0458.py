# Generated by Django 2.0.7 on 2018-10-01 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0004_auto_20180930_0911'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentmodel',
            name='phone_no',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]