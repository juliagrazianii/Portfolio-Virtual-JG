from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    detailed_description = models.TextField(blank=True)
    features = models.TextField(blank=True)
    technologies = models.CharField(max_length=300)
    github = models.URLField(blank=True, null=True)
    gradient = models.CharField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.IntegerField()
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    
class ContactLink(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

    