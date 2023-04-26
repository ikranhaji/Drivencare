from django.db import models

from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    import_href = models.CharField(max_length=200, unique=True)
    def __str__(self):
        return self.vin

class Status(models.Model):
    name = models.CharField(max_length=200)


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.IntegerField()

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"id": self.id})

class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    reason = models.CharField(max_length=200)
    vin = models.CharField(max_length=50)
    customer = models.CharField(max_length=200)
    inventory_vehicle = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    status = models.CharField(max_length=50, default="CREATED")

    def canceled(self):

        self.status = "CANCELED"
        self.save()

    def finished(self):

        self.status = "FINSHED"
        self.save()



    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"id": self.id})
