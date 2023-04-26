from django.db import models
from django.urls import reverse

from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(unique=True, max_length=200)
    import_href = models.CharField(max_length=200)
    sold = models.BooleanField(default=False)


class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.IntegerField()

    def __str__(self):
        return self.first_name

    def get_api_url(self):
        return reverse("show_salesperson", kwargs={"id": self.id})


class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.first_name

    def get_api_url(self):
        return reverse("show_customer", kwargs={"id": self.id})


class Sale(models.Model):
    price = models.IntegerField()
    automobile = models.ForeignKey(
        AutomobileVO, related_name="sale", on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer, related_name="sale", on_delete=models.CASCADE
    )
    salesperson = models.ForeignKey(
        Salesperson, related_name="sale", on_delete=models.CASCADE
    )

    def get_api_url(self):
        return reverse("show_sale", kwargs={"id": self.id})
