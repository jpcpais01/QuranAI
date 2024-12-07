"use client"

import { useState, useEffect } from "react"
import { Send, RefreshCw } from "lucide-react"

interface Message {
  role: "system" | "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initialize messages from localStorage or with system message
    const savedMessages = localStorage.getItem("chat-messages")
    return savedMessages 
      ? JSON.parse(savedMessages) 
      : [
          {
            role: "system",
            content:
              "You are a knowledgeable assistant who helps users understand the Quran. You provide accurate information and context about verses, chapters, and Islamic teachings. When referencing Quranic verses, you cite them properly.",
          },
        ]
  })
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chat-messages", JSON.stringify(messages))
  }, [messages])

  // Check for pre-filled message on component mount
  useEffect(() => {
    const preFillMessage = localStorage.getItem("pre-filled-chat-message")
    if (preFillMessage) {
      // Automatically send the pre-filled message
      const userMessage: Message = { role: "user", content: preFillMessage }
      setMessages((prev) => [...prev, userMessage])
      
      // Clear the pre-filled message from localStorage
      localStorage.removeItem("pre-filled-chat-message")
      
      // Trigger message submission
      handleSubmitMessage(userMessage)
    }
  }, [])

  const handleSubmitMessage = async (messageToSend: Message) => {
    if (isLoading) return

    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.slice(1).concat(messageToSend),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response")
      }

      if (!data.response || typeof data.response.content !== "string") {
        throw new Error("Invalid response format")
      }

      setMessages((prev) => [...prev, data.response])
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: error instanceof Error 
            ? `Error: ${error.message}` 
            : "I apologize, but I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    
    await handleSubmitMessage(userMessage)
  }

  const handleRefreshChat = () => {
    // Clear localStorage and reset to initial state
    localStorage.removeItem("chat-messages")
    setMessages([
      {
        role: "system",
        content:
          "You are a knowledgeable assistant who helps users understand the Quran. You provide accurate information and context about verses, chapters, and Islamic teachings. When referencing Quranic verses, you cite them properly.",
      },
    ])
  }

  return (
    <div className="fixed inset-x-0 top-16 bottom-20">
      <div className="container mx-auto h-full px-4 flex flex-col">
        <div className="py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold">Chat with Quran AI</h1>
          <button 
            onClick={handleRefreshChat}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            title="Refresh Chat"
          >
            <RefreshCw className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        
        <div className="flex-1 min-h-0">
          <div className="h-full rounded-md border bg-muted/50 overflow-hidden">
            <div className="h-full overflow-y-auto p-3 space-y-2">
              {messages.slice(1).map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-2 bg-background">
                    <p className="text-sm">Thinking...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="py-2">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about the Quran..."
              className="flex-1 px-3 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
