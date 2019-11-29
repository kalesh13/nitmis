import os
import json
from django import template
from django.conf import settings

register = template.Library()


@register.simple_tag
def mix(mix_file):
    """
    Reads the Laravel mix manifest file and returns
    the requested static file
    """
    manifest = read_manifest_file()
    return manifest[mix_file]


def read_manifest_file():
    """Reads the manifest file"""
    manifest_file = os.path.join(settings.STATIC_ROOT, "mix-manifest.json")
    with(open(manifest_file)) as manifest:
        return json.load(manifest)
