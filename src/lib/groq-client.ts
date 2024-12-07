interface Message {
  role: "system" | "user" | "assistant"
  content: string
}

interface ChatCompletionRequest {
  messages: Message[]
  model: string
  temperature?: number
  max_tokens?: number
  top_p?: number
  stream?: boolean
}

interface ChatCompletionResponse {
  choices: {
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }[]
}

export class Groq {
  private apiKey: string
  private baseUrl = "https://api.groq.com/v1"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  chat = {
    completions: {
      create: async (
        params: ChatCompletionRequest
      ): Promise<ChatCompletionResponse> => {
        const response = await fetch(`${this.baseUrl}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
          },
          body: JSON.stringify(params),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json()
      },
    },
  }
}
