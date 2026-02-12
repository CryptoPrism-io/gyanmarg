#!/usr/bin/env python3
"""Test script to list available Gemini models."""

import os
from google import genai

API_KEY = os.getenv('GEMINI_API_KEY') or 'AIzaSyDIxpNqLTm_lEFiDyHvYiz-ba3GeK4vhbc'

client = genai.Client(api_key=API_KEY)

print("🔍 Listing available Gemini models...\n")

try:
    models = client.models.list()

    text_models = []
    for model in models:
        # Print all models
        print(f"Model: {model.name}")
        if hasattr(model, 'supported_generation_methods'):
            print(f"  Methods: {model.supported_generation_methods}")
        if 'generateContent' in str(getattr(model, 'supported_generation_methods', [])):
            text_models.append(model.name)
        print()

    print("\n✅ Text generation models:")
    for model_name in text_models:
        print(f"  - {model_name}")

except Exception as e:
    print(f"❌ Error: {e}")
