# Generated by Django 4.0.3 on 2023-04-26 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0008_automobilevo_sold'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
