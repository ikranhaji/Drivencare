from django.shortcuts import render
from django.http import JsonResponse
from service_rest.models import Technician, AutomobileVO, Appointment
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href", "id"]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id", "id"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["date", "time", "reason", "vin", "customer", "technician", "status", "inventory_vehicle", "id"]
    encoders = {

        "technician": TechnicianEncoder(),

    }



@require_http_methods(["GET", "POST"])
def api_list_appointments(request, vin=None):
    if request.method == "GET":
        if vin is not None:
            try:
                appointments=Appointment.objects.filter(vin=vin)
                return JsonResponse({"appointments": appointments}, encoder=AppointmentEncoder)
            except Appointment.DoesNotExist:
                return JsonResponse(
                    {"message: No appointment"},
                    status=400,
                    )

        else:
            appointments= Appointment.objects.all()
            return JsonResponse({"appointments": appointments}, encoder=AppointmentEncoder)
    else:
        content = json.loads(request.body)

        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(first_name=technician_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician does not exist"},
                status=400,
            )


        if AutomobileVO.objects.filter(vin=content["vin"]).exists():
            content["inventory_vehicle"]=True
        else:
            content["inventory_vehicle"]=False

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
            )




@require_http_methods(["GET", "DELETE"])
def api_show_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )

    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"delete": count > 0})

    else:
        content = json.loads(request.body)

        Appointment.objects.filter(id=id).update(**content)
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
            )

@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
    except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "No appointment with this id"},
                status=400,
            )
    appointment.finished()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )


@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "No appointment with this id"},
            status=400,
        )
    appointment.canceled()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )




@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        try:
            technicians=Technician.objects.all()
            return JsonResponse({"technicians": technicians}, encoder=TechnicianEncoder)
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Could not get the technician"}
            )

    else:
        try:
            content = json.loads(request.body)

            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response







@require_http_methods(["GET", "DELETE"])
def api_show_technician(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)
    elif request.method == "DELETE":
        try:
            count, _ = Technician.objects.filter(id=id).delete()
            return JsonResponse({"delete": count > 0})
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Could not delete technician"},
                status=400,
                )

    else:
        content = json.loads(request.body)

        Technician.objects.filter(id=id).update(**content)
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
            )
