from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Project, Skill, ContactLink
from .serializers import ProjectSerializer, SkillSerializer, ContactLinkSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all().order_by("-created_at")
    serializer_class = SkillSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]


class ContactLinkViewSet(viewsets.ModelViewSet):
    queryset = ContactLink.objects.all()
    serializer_class = ContactLinkSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

