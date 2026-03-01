from rest_framework import serializers
from .models import Project, Skill, ContactLink

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"

class ContactLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactLink
        fields = "__all__"

