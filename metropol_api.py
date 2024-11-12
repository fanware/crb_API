import requests
from django.conf import settings


class Metropol:
    def __init__(self):
        self.public_key = settings.METROPOL_PUBLIC_KEY
        self.private_key = settings.METROPOL_PRIVATE_KEY

    def identity_verification(self, id_number):
        # Implement the actual API call here
        # Example placeholder response
        return {"status": "success", "message": "ID Verified"}

    def deliquency_status(self, id_number, loan_amount):
        # Implement the actual API call here
        # Example placeholder response
        return {"status": "success", "message": "No Delinquency"}

    def credit_info(self, id_number, loan_amount):
        # Implement the actual API call here
        # Example placeholder response
        return {"status": "success", "credit_info": "Good"}

    def consumer_score(self, id_number):
        # Implement the actual API call here
        # Example placeholder response
        return {"status": "success", "score": 750}
