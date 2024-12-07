"use client"

import { useState, useEffect, useRef } from "react"
import { Send, RefreshCw, Copy, Check, Sparkles, Bot, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface Message {
  role: "system" | "user" | "assistant"
  content: string
  timestamp?: number
}

const SYSTEM_MESSAGE: Message = {
  role: "system",
  content:
    "I'm your AI Quran companion. Ask me anything about the Quran, its teachings, verses, or Islamic context. I'm here to help you understand and reflect.",
  timestamp: Date.now()
}

const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInMinutes = (now.getTime() - timestamp) / (1000 * 60)

  if (diffInMinutes < 1) return 'just now'
  if (diffInMinutes < 60) return `${Math.floor(diffInMinutes)} min ago`
  if (diffInMinutes < 24 * 60) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  return date.toLocaleDateString()
}

export default function ChatPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([SYSTEM_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedMessageId, setCopiedMessageId] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Ensure we only interact with localStorage after mounting
  useEffect(() => {
    setIsMounted(true)

    // Load messages from localStorage
    const savedMessagesJson = localStorage.getItem("chat-messages")
    if (savedMessagesJson) {
      try {
        const savedMessages = JSON.parse(savedMessagesJson)
        // Ensure system message is always first
        setMessages([SYSTEM_MESSAGE, ...savedMessages.slice(1)])
      } catch (error) {
        console.error("Failed to parse saved messages:", error)
      }
    }
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("chat-messages", JSON.stringify(messages))
    }
  }, [messages, isMounted])

  // Check for pre-filled message on component mount
  useEffect(() => {
    if (!isMounted) return

    const preFillMessage = localStorage.getItem("pre-filled-chat-message")
    if (preFillMessage) {
      // Automatically send the pre-filled message
      const userMessage: Message = { 
        role: "user", 
        content: preFillMessage,
        timestamp: Date.now()
      }
      setMessages((prev) => [...prev, userMessage])
      
      // Clear the pre-filled message from localStorage
      localStorage.removeItem("pre-filled-chat-message")
      
      // Trigger message submission
      handleSubmitMessage(userMessage)
    }
  }, [isMounted])

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

      const assistantResponse: Message = {
        ...data.response,
        timestamp: Date.now()
      }

      setMessages((prev) => [...prev, assistantResponse])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: error instanceof Error 
          ? `Error: ${error.message}` 
          : "I apologize, but I encountered an error. Please try again.",
        timestamp: Date.now()
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { 
      role: "user", 
      content: input.trim(),
      timestamp: Date.now()
    }
    setMessages((prev) => [...prev, userMessage])
    
    await handleSubmitMessage(userMessage)
  }

  const handleRefreshChat = () => {
    localStorage.removeItem("chat-messages")
    setMessages([SYSTEM_MESSAGE])
    toast({
      description: "Chat has been refreshed",
      duration: 2000
    })
  }

  const copyMessageToClipboard = (message: string, index: number) => {
    navigator.clipboard.writeText(message).then(() => {
      setCopiedMessageId(index)
      setTimeout(() => setCopiedMessageId(null), 2000)
      toast({
        description: "Message copied to clipboard",
        duration: 2000
      })
    })
  }

  // Prevent rendering on server to avoid hydration mismatches
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed inset-x-0 top-16 bottom-20 flex flex-col">
      <div className="container mx-auto h-full px-4 flex flex-col">
        {/* Header */}
        <div className="py-2 flex justify-between items-center border-b pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Quran AI Companion</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleRefreshChat}
              title="Refresh Chat"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Messages Container */}
        <div className="flex-1 min-h-0 overflow-y-auto py-4 space-y-4">
          {messages.slice(1).map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "flex items-start gap-3 max-w-full",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="bg-muted p-2 rounded-full">
                  <Bot className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
              <div 
                className={cn(
                  "rounded-2xl p-3 max-w-[80%] relative group",
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted"
                )}
              >
                <p className="whitespace-pre-wrap text-sm">{message.content}</p>
                <div className="flex items-center justify-between mt-1 text-xs opacity-50">
                  {message.timestamp && (
                    <span>{formatTimestamp(message.timestamp)}</span>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyMessageToClipboard(message.content, index)}
                  >
                    {copiedMessageId === index ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              {message.role === "user" && (
                <div className="bg-muted p-2 rounded-full">
                  <UserRound className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-center gap-3">
              <div className="bg-muted p-2 rounded-full">
                <Bot className="h-5 w-5 text-muted-foreground animate-pulse" />
              </div>
              <div className="bg-muted rounded-2xl p-3">
                <p className="text-sm text-muted-foreground">Thinking...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="py-2 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the Quran..."
              className="flex-1 px-4 py-2 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={isLoading || !input.trim()}
              className="rounded-full"
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
