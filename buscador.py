import wikipedia

# Configura el idioma si deseas en español
wikipedia.set_lang("es")

def buscar_descripcion(palabra):
    try:
        resumen = wikipedia.summary(palabra, sentences=2)
        return resumen
    except wikipedia.exceptions.DisambiguationError as e:
        return f"La palabra es ambigua, puede referirse a: {e.options[:5]}"
    except wikipedia.exceptions.PageError:
        return "No se encontró información sobre esa palabra."

# Ejemplo de uso
palabra = "Pino"
print(f"Descripción de '{palabra}':\n{buscar_descripcion(palabra)}")
