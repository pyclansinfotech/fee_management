# Generated by Django 2.0.7 on 2018-10-21 16:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0024_auto_20181021_1535'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feereceipt',
            name='idCenter',
        ),
        migrations.RemoveField(
            model_name='feereceipt',
            name='idTranCheckSum',
        ),
        migrations.RemoveField(
            model_name='feereceipt',
            name='idstudent',
        ),
    ]
