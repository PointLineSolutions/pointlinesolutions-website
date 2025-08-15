'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FloatingCTAProps {
  url: string
}

export const FloatingCTA = ({ url }: FloatingCTAProps) => {
  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 shadow-2xl animate-bounce"
        onClick={handleClick}
      >
        <ArrowRight className="w-6 h-6" />
      </Button>
    </div>
  )
}
