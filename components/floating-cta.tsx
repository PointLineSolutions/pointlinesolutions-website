'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

interface FloatingCTAProps {
  url: string
}

export const FloatingCTA = ({ url }: FloatingCTAProps) => {
  const { trackButtonClick, trackCalendlyClick } = useAnalytics()

  const handleClick = () => {
    trackButtonClick('floating_cta', 'floating_button')
    if (url.includes('calendly.com')) {
      trackCalendlyClick('floating_button')
    }
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
