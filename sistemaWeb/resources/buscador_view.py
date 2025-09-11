from rest_framework import viewsets

import wikipedia
from django.http import JsonResponse

wikipedia.set_lang('es')

def buscar_descripcion(request):
    palabra = request.GET.get('palabra')
    if not palabra:
        return JsonResponse({"error": "No se recibió ninguna palabra."}, status=400)
    try:
        filtros = ["planta", "árbol", "flor", "botánica", "género", "especie", "flora", "hoja"]
        resumen = wikipedia.summary(palabra, sentences=5)
        if not any(f in resumen.lower() for f in filtros):
            return JsonResponse({"error": f"No se encontró información de '{palabra}' en el contexto de plantas."}, status=404)
        return JsonResponse({"descripcion": resumen})
    except wikipedia.exceptions.PageError:
        # Si ocurre un error 404, busca sugerencias
        print(f"La palabra '{palabra}' no se encontró. Buscando sugerencias...")
        try:
            sugerencias = wikipedia.search(palabra)
            if sugerencias:
                print("Se encontraron las siguientes sugerencias:")
                for sugerencia in sugerencias[:5]:  # Muestra las primeras 5 sugerencias
                    try:
                        resumen_sugerencia = wikipedia.summary(sugerencia, sentences=5)
                        if any(palabra in resumen_sugerencia.lower() for palabra in ['planta', 'botánica', 'género', 'especie', 'flora', 'hoja']):
                            print(f"- {sugerencia} (Coincidencia probable)")
                            descripcion_sugerida = wikipedia.summary(sugerencia, sentences=2)
                            print(f"- {descripcion_sugerida}")
                    except:
                        continue
                    return JsonResponse({"descripcion": resumen_sugerencia})
            else:
                return "No se encontraron resultados para esta búsqueda."
        except wikipedia.exceptions.DisambiguationError as e:
            # Maneja casos en los que la búsqueda lleva a una página de desambiguación
            return f"La palabra es ambigua y tiene varias entradas. Posibles temas: {e.options}"
        except Exception:
            return "Ocurrió un error inesperado al buscar sugerencias."
    except wikipedia.exceptions.DisambiguationError as e:
        return JsonResponse({"error": "Ambigua", "opciones": e.options[:5]}, status=400)
    except wikipedia.exceptions.PageError:
        return JsonResponse({"error": "No se encontró la palabra."}, status=404)
