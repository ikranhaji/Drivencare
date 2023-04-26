from .models import AutomobileVO,  Salesperson, Customer, Sale
from common.json import ModelEncoder

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties= ["import_href", "vin", "id", "sold"]

class SalepersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "customer",
        "price",
        "salesperson",
        "automobile",
        "id"
    ]
    encoders = {"salesperson": SalepersonEncoder(), "customer": CustomerEncoder(), "automobile": AutomobileVOEncoder()}
