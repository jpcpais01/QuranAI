import { NextRequest, NextResponse } from "next/server"
import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const systemPrompt = {
  role: "system",
  content: `You are a knowledgeable Islamic scholar and Quran expert, dedicated to helping users understand and learn from the Quran. Your responses should:

1. Be accurate and respectful when discussing Quranic verses and Islamic concepts
2. Provide clear explanations with references to specific verses when relevant
3. Offer contextual understanding of the verses and their meanings
4. Share relevant historical context when appropriate
5. Maintain a respectful and educational tone
6. If asked follow-up questions, reference previous parts of the discussion for continuity

Remember to be helpful while providing detailed, accurate information based on authentic Islamic sources.`
};

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ 
        error: 'Invalid messages format' 
      }, { 
        status: 400 
      });
    }

    // Add system prompt at the beginning of the conversation
    const messagesWithSystem = [
      systemPrompt,
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    // Generate AI response
    const completion = await groq.chat.completions.create({
      messages: messagesWithSystem,
      model: "llama-3.1-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stop: null,
      stream: false
    });

    const aiResponse = completion.choices[0]?.message?.content;
    
    if (!aiResponse) {
      throw new Error('No response from AI');
    }

    return NextResponse.json({ 
      response: {
        role: 'assistant',
        content: aiResponse
      }
    }, { 
      status: 200 
    });

  } catch (error) {
    console.error('Error in Quran analysis:', error);
    
    // Check if it's an API key error
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json({ 
        error: 'API configuration error. Please check your environment variables.' 
      }, { 
        status: 500 
      });
    }

    return NextResponse.json({ 
      error: 'Failed to process request' 
    }, { 
      status: 500 
    });
  }
}
