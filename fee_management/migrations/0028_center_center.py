# Generated by Django 2.0.7 on 2018-10-23 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fee_management', '0027_remove_feereceipt_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='center',
            name='center',
            field=models.CharField(blank=True, max_length=25),
        ),
    ]