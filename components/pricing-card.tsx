'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  title: string
  setup: string
  monthly: string
  includes: string[]
  featured?: boolean
  calendlyUrl: string
  pdfUrl: string
}

export const PricingCard = ({ 
  title, 
  setup, 
  monthly, 
  includes, 
  featured = false,
  calendlyUrl,
  pdfUrl
}: PricingCardProps) => {
  const handleCalendlyClick = () => {
    window.open(calendlyUrl, '_blank')
  }

  const handlePdfClick = () => {
    window.open(pdfUrl, '_blank')
  }

  return (
    <Card
      className={`overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-105 ${
        featured 
          ? 'bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/50 backdrop-blur-sm' 
          : 'bg-slate-800/50 border-slate-700'
      }`}
    >
      <CardContent className="p-8 space-y-6">
        {featured && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
            Most Popular
          </div>
        )}
        <h3 className="font-heading font-semibold text-2xl text-white pt-4">{title}</h3>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-red-400">{setup}</div>
          <div className="text-slate-300">Setup fee</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-cyan-400">{monthly}</div>
          <div className="text-slate-300">per month</div>
        </div>
        <div className="space-y-3">
          <div className="text-white font-semibold">Includes:</div>
          <ul className="space-y-2">
            {includes.map((item, i) => (
              <li key={i} className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 pt-4">
          <Button 
            className="w-full bg-red-500 hover:bg-red-600 text-white animate-scale-pulse"
            onClick={handleCalendlyClick}
          >
            Book a Free Strategy Call
          </Button>
          <Button
            variant="outline"
            className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
            onClick={handlePdfClick}
          >
            Download Pricing PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
