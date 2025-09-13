from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

token_generator = PasswordResetTokenGenerator()

@api_view(["POST"])
def generar_token(request):
    correo = request.data.get("correo")
    try:
        user = User.objects.get(email=correo)
    except:
        return Response({"error": "Correo no encontrado"}, status=status.HTTP_404_NOT_FOUND)
    
    # Si se encontro
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = token_generator.make_token(user)

    reset_url = f"http://localhost:5173/reset-password/{uid}/{token}/"

    # Aquí deberías usar un sistema real de emails (SMTP, Sendgrid, etc.)
    try:
        send_mail(
            "Recuperar contraseña",
            f"Ingresa a este link para restablecer tu contraseña: {reset_url}",
            "ivanflores521111@gmail.com",
            [user.email],
        )
        print('enviando')
        return Response({"success": "Correo enviado"}, status=status.HTTP_200_OK)
    except:
        return Response({"error": "Correo no fue enviado"}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["POST"])
def reset_password(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (User.DoesNotExist, ValueError, TypeError, OverflowError):
        return Response({"error": "Token inválido"}, status=status.HTTP_400_BAD_REQUEST)

    if not token_generator.check_token(user, token):
        return Response({"error": "Token inválido o expirado"}, status=status.HTTP_400_BAD_REQUEST)

    new_password = request.data.get("new_password")
    user.set_password(new_password)
    user.save()
    return Response({"success": "Contraseña restablecida correctamente"}, status=status.HTTP_200_OK)