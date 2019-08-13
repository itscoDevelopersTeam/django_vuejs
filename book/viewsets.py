from rest_framework import viewsets

from .models import Book
from .serializer import BookSerializer

# Aquí es donde podemos crear un CRUD sobre un modelo
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer