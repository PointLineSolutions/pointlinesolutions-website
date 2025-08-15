'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

interface CTAButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  url: string
  className?: string
  size?: 'default' | 'sm' | 'lg'
  location?: string
  buttonName?: string
}

export const CTAButton = ({ 
  variant = 'primary', 
  children, 
  url, 
  className = "",
  size = 'lg',
  location = 'unknown',
  buttonName = 'cta_button'
}: CTAButtonProps) => {
  const { trackButtonClick, trackCalendlyClick, trackPDFDownload } = useAnalytics()

  const handleClick = () => {
    // Track the button click
    trackButtonClick(buttonName, location)
    
    // Track specific actions based on URL
    if (url.includes('calendly.com')) {
      trackCalendlyClick(location)
    } else if (url.includes('pricing-guide.pdf')) {
      trackPDFDownload(location)
    }
    
    // Open the URL
    window.open(url, '_blank')
  }

  if (variant === 'primary') {
    return (
      <Button 
        size={size} 
        className={`bg-red-500 hover:bg-red-600 text-white animate-scale-pulse font-semibold text-lg px-8 py-4 ${className}`}
        onClick={handleClick}
      >
        {children}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    )
  }
  return (
    <Button
      size={size}
      variant="outline"
      className={`border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent animate-pulse-glow font-semibold text-lg px-8 py-4 ${className}`}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}
