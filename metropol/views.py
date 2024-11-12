from django.shortcuts import render
from django.http import JsonResponse


from metropol_api import Metropol


metropol = Metropol()



def identity_verification(request, id_number):
    result = metropol.identity_verification(id_number)
    return JsonResponse(result)


def deliquency_status(request, id_number, loan_amount):
    result = metropol.deliquency_status(id_number, loan_amount)
    return JsonResponse(result)


def credit_info(request, id_number, loan_amount):
    result = metropol.credit_info(id_number, loan_amount)
    return JsonResponse(result)


def consumer_score(request, id_number):
    result = metropol.consumer_score(id_number)
    return JsonResponse(result)

def index(request):
   return render(request,"index.html")


