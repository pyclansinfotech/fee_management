# Generated by Django 2.0.7 on 2018-10-16 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0018_remove_batch_idcenter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='center',
            name='validTill',
            field=models.DateField(blank=True, null=True),
        ),
    ]