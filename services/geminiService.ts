
import { GoogleGenAI, Chat, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is present.
  console.warn("API_KEY is not set. Chatbot will not function.");
}

// FIX: The GoogleGenAI constructor expects an object with an `apiKey` property.
const ai = new GoogleGenAI({ apiKey: API_KEY || "" });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: `You are a helpful and friendly chatbot for Credtics.com.
    Credtics is an AI-powered credit management platform for Microfinance Institutions (MFIs).
    Your goal is to answer questions about Credtics based on the following information:
    - Problem: MFIs face high costs, slow loan decisions (3-5 days), and limited reach due to manual processes.
    - Solution: Credtics offers an AI platform for end-to-end automation, smart data processing, and an instantaneous decision engine.
    - Value Proposition: We make lending faster (under 10 minutes), cheaper (40% operational savings), and smarter (superior AI-driven risk assessment).
    - Target Market: Microfinance Institutions in emerging economies.
    - Key Features: Credit Scoring, Risk Recommendation, Loan Recommendation, Fraud Flags.
    Keep your answers concise, professional, and friendly. If you don't know an answer, say you need to connect them with a human representative.`,
  },
});

export const getChatbotResponseStream = async (message: string) => {
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to get response from AI. Please try again.");
  }
};

export const generateBlogContent = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate 3 blog post titles and short summaries (2-3 sentences each) about the intersection of AI and microfinance for a company called Credtics. The tone should be insightful and professional.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: "The title of the blog post."
              },
              summary: {
                type: Type.STRING,
                description: "A short summary of the blog post."
              }
            },
            required: ['title', 'summary']
          }
        }
      }
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini API error (blog content):", error);
    throw new Error("Failed to generate blog content.");
  }
};
