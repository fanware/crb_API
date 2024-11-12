from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='my_index'),
    path('identity-verification/<str:id_number>/', views.identity_verification, name='identity_verification'),
    path('deliquency-status/<str:id_number>/<int:loan_amount>/', views.deliquency_status, name='deliquency_status'),
    path('credit-info/<str:id_number>/<int:loan_amount>/', views.credit_info, name='credit_info'),
    path('consumer-score/<str:id_number>/', views.consumer_score, name='consumer_score'),
]


