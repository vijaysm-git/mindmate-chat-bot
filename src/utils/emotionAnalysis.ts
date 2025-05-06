
type EmotionCategory = "happy" | "sad" | "angry" | "anxious" | "neutral";

interface EmotionResponse {
  type: EmotionCategory;
  responses: string[];
}

// Map of emotion keywords to emotion categories
const emotionKeywords: Record<EmotionCategory, string[]> = {
  happy: ["happy", "joy", "excited", "glad", "great", "cheerful", "delighted", "content", "pleased", "wonderful"],
  sad: ["sad", "depressed", "unhappy", "miserable", "down", "blue", "gloomy", "heartbroken", "disappointed", "upset"],
  angry: ["angry", "mad", "frustrated", "annoyed", "irritated", "furious", "outraged", "resentful", "bitter", "enraged"],
  anxious: ["anxious", "worried", "nervous", "stressed", "tense", "concerned", "uneasy", "afraid", "scared", "fearful"],
  neutral: ["okay", "fine", "alright", "normal", "so-so", "average", "moderate", "balanced"]
};

// Map of emotion categories to appropriate responses
const emotionResponses: Record<EmotionCategory, string[]> = {
  happy: [
    "That's wonderful to hear! What's contributing to your happiness today?",
    "I'm glad you're feeling happy! It's important to savor these positive moments.",
    "It's great that you're in good spirits! Would you like to share what's going well?",
    "Happiness is such a valuable emotion. What activities help sustain this positive feeling for you?"
  ],
  sad: [
    "I'm sorry to hear you're feeling sad. Would you like to talk about what's troubling you?",
    "It sounds like you're going through a difficult time. Remember that it's okay to feel sad sometimes.",
    "When we feel sad, it can help to share our feelings. Is there something specific causing you to feel down?",
    "I'm here to listen if you want to talk about what's making you feel sad. What's been on your mind lately?"
  ],
  angry: [
    "I can understand feeling frustrated. Would it help to talk about what triggered these feelings?",
    "When we're angry, it often helps to step back and take a few deep breaths. Would you like to try that together?",
    "It sounds like something has really bothered you. Could you share what happened?",
    "Anger is a natural response to certain situations. What might help you process these emotions right now?"
  ],
  anxious: [
    "Feeling anxious can be really challenging. Is there something specific that's making you feel this way?",
    "When anxiety rises, grounding techniques can sometimes help. Would you like to try a simple breathing exercise?",
    "I understand that anxiety can be overwhelming. What typically helps you when you're feeling anxious?",
    "It's common to experience anxiety. Would it help to talk about your concerns?"
  ],
  neutral: [
    "How has your day been going so far?",
    "Is there anything specific on your mind that you'd like to talk about?",
    "Sometimes just having a conversation can help us understand our feelings better. What's been happening in your life recently?",
    "I'm here to listen if there's anything you'd like to share or discuss."
  ]
};

/**
 * Analyzes text input to detect emotional content
 * @param text User's input text
 * @returns The detected emotion category
 */
export const detectEmotion = (text: string): EmotionCategory => {
  const lowercaseText = text.toLowerCase();
  
  // Check for matches with each emotion category
  for (const [emotion, keywords] of Object.entries(emotionKeywords) as [EmotionCategory, string[]][]) {
    for (const keyword of keywords) {
      if (lowercaseText.includes(keyword)) {
        return emotion;
      }
    }
  }
  
  // Default to neutral if no matches found
  return "neutral";
};

/**
 * Generates an appropriate response based on detected emotion
 * @param emotion The detected emotion category
 * @returns A response appropriate for the emotion
 */
export const generateResponse = (emotion: EmotionCategory): string => {
  const possibleResponses = emotionResponses[emotion];
  const randomIndex = Math.floor(Math.random() * possibleResponses.length);
  return possibleResponses[randomIndex];
};

/**
 * Analyzes user input and returns an appropriate response
 * @param userInput User's message text
 * @returns An appropriate response based on emotional analysis
 */
export const getEmotionalResponse = (userInput: string): string => {
  const detectedEmotion = detectEmotion(userInput);
  return generateResponse(detectedEmotion);
};
