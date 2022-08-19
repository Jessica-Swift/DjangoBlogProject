from django.shortcuts import render, HttpResponse


def Index(request):
    return HttpResponse("It is working")
