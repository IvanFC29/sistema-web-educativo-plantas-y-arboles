from rest_framework import viewsets

import wikipedia
from django.http import JsonResponse

wikipedia.set_lang('es')

def buscar_descripcion(request):
    palabra = request.GET.get('palabra')
    if not palabra:
        return JsonResponse({"error": "No se recibió ninguna palabra."}, status=400)
    try:
        resumen = wikipedia.summary(palabra, sentences=2)
        return JsonResponse({"descripcion": resumen})
    except wikipedia.exceptions.DisambiguationError as e:
        return JsonResponse({"error": "Ambigua", "opciones": e.options[:5]}, status=400)
    except wikipedia.exceptions.PageError:
        return JsonResponse({"error": "No se encontró la palabra."}, status=404)
