
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SkillViewSet, ContactLinkViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'contact', ContactLinkViewSet)

urlpatterns = router.urls

