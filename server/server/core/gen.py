from typing import List, Dict, Any, Optional
from transformers import pipeline
import phonemizer
from nltk.metrics.distance import edit_distance
from langchain_anthropic import ChatAnthropic
from langchain_core.pydantic_v1 import BaseModel, Field
import dotenv
import os
import datetime


class Lesson(BaseModel):
    """
    Lesson model that contains the name, content, category, description, and difficulty level of the lesson
    """
    name: str = Field(
        "",
        description="The name of the lesson",
    )
    content: List[str] = Field(
        [],
        description="List of words or phrases in the lesson",
    )
    category: str = Field(
        "",
        description="The category of the lesson",
    )
    description: str = Field(
        "",
        description="The description of the lesson",
    )
    difficulty: int = Field(
        1,
        description="The difficulty level of the lesson (1-5)",
    )


class ContentGenerator:
    """
    Content generator class that uses the langchain_anthropic model to generate content
    """

    def __init__(self):
        self.llm = ChatAnthropic(
            model="claude-3-5-sonnet-20240620"
        ).with_structured_output(Lesson)

    def generate(self, prompt: str, target_language: str = "English", level: int = 1,) -> Lesson:
        prompt = f"""
        Generate a set of words and phrases that can be used to teach a beginner
        how to speak {target_language} at level {level}. The content should be
        suitable for a beginner and should include words and phrases that are
        relevant to {prompt}.
        """
        return self.llm.invoke(prompt)
