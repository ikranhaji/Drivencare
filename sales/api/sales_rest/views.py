from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO,  Salesperson, Customer, Sale
from .encoders import  SaleListEncoder, SalepersonEncoder, CustomerEncoder

@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method == "GET":
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salesperson": salespersons},
            encoder=SalepersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalepersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create salesperson"}
            )
            response.status_code = 404
            return response

@require_http_methods(["DELETE", "GET"])
def show_salesperson(request, id):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=id)
            return JsonResponse (
                salesperson,
                encoder=SalepersonEncoder,
                safe= False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"message": "Salesperson does not exist"}
            )
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            count, _ = Salesperson.objects.filter(id=id).delete()
            return JsonResponse({"deleted": count > 0})

        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"message": "Salesperson does not exist"}
            )
            response.status_code = 404
            return response


@require_http_methods(["POST", "GET"])
def list_customer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create customer"}
            )
            response.status_code = 404
            return response

@require_http_methods(["DELETE", "GET"])
def show_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse (
                customer,
                encoder=CustomerEncoder,
                safe= False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse(
                {"message": "Customer does not exist"}
            )
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            count, _ = Customer.objects.filter(id=id).delete()
            return JsonResponse({"deleted": count > 0})

        except Customer.DoesNotExist:
            response = JsonResponse(
                {"message": "customer does not exist"}
            )
            response.status_code = 404
            return response

@require_http_methods(["POST", "GET"])
def list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        auto_vin = content["automobile"]
        automobile = AutomobileVO.objects.get(vin=auto_vin)
        if automobile.sold is False:
            content["automobile"] = automobile
            try:
                salesperson_id = content["salesperson"]
                salesperson = Salesperson.objects.get(id=salesperson_id)
                content["salesperson"] = salesperson
            except Salesperson.DoesNotExist:
                return JsonResponse(
                    {"message": "Invalid salesperson id"},
                    status=404,
                )
            try:
                customer_id = content["customer"]
                customer = Customer.objects.get(id=customer_id)
                content["customer"] = customer
            except Customer.DoesNotExist:
                return JsonResponse(
                    {"message": "Customer does not exist"},
                    status=404,
                )
            automobile.sold =True
            automobile.save()

            sale = Sale.objects.create(**content)
            return JsonResponse(
                    sale,
                    encoder=SaleListEncoder,
                    safe=False,
                )
        else:
            response = JsonResponse(
                {"message": "Car does not exist"}
            )
            response.status_code = 404
            return response

@require_http_methods(["DELETE", "GET"])
def show_sales(request, id):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=id)
            return JsonResponse (
                sale,
                encoder=SaleListEncoder,
                safe= False,
            )
        except Sale.DoesNotExist:
            response = JsonResponse(
                {"message": "Sale does not exist"}
            )
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            count, _ = Sale.objects.filter(id=id).delete()
            return JsonResponse({"deleted": count > 0})

        except Sale.DoesNotExist:
            response = JsonResponse(
                {"message": "Sale delete unknow id"}
            )
            response.status_code = 404
            return response
