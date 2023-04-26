from django.urls import path

from .views import api_show_appointment, api_show_technician, api_list_appointments, api_list_technicians, api_finish_appointment, api_cancel_appointment

urlpatterns = [
    path("appointments/", api_list_appointments, name="api_create_appointments"),
    path("appointments/<int:id>/", api_show_appointment, name="api_show_appointment"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:id>/", api_show_technician, name="api_show_techician"),
    path("appointments/<int:id>/finished", api_finish_appointment, name="api_finish_appointment"),
    path("appointments/<int:id>/canceled", api_cancel_appointment, name="api_cancel_appointment"),


]
