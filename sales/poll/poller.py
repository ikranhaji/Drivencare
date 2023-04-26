import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO



def get_autombile():
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href=auto["href"],
            vin = auto["vin"],
            defaults={"sold": auto["sold"]},
        )


def poll(repeat=True):
    while True:
        print('Service poller polling for data')
        try:
            get_autombile()
        except Exception as e:
            print(e, file=sys.stderr)
        if (not repeat):
            break
        time.sleep(20)


if __name__ == "__main__":
    poll()
