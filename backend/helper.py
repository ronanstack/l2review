import os
import openai
import dotenv
from nltk.tokenize import sent_tokenize

dotenv.load_dotenv(verbose=True)

# Get openai API key
openai.api_key = os.getenv("OPENAI_API_KEY")

def call_api(system: str, user: list[str]) -> str:
    messages = [
        {"role": "system", "content": system},
    ]

    for message in user:
        messages.append({"role": "user", "content": message})

    return(
        openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages
        ).choices[0].message.content
    )

'''Call the openai API to analyze user input and provide feedback on grammar mistakes.'''
def get_sentence_grammar_mistakes(language: str, sentence: str) -> str:
    system = f"You are a {language} teacher, trying to correct grammar mistakes from a \
    student learning {language}. You will read a given sentence, and give just the mistake \
    and the corrections, without any other text. Make sure to respond in the same language \
    used by your student."
    user = sentence
    
    response = call_api(system, [user])
    return response

'''Call the openai API to continue the conversation with a natural response to the user's input.'''
def get_text_response(language: str, text: str) -> str:
    system = f"You are a native {language} speaker who is conversing with your friend who is \
    learning {language} in {language} to help them practice. You will read a message and give \
    an appropriate response to continue the conversation. Make sure to respond in the same language \
    used by your friend."
    user = text
    
    response = call_api(system, [user])
    return response

def split_into_sentences(sentence: str) -> list[str]:    
    return sent_tokenize(sentence)