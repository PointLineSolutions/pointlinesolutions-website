'use client'
import { useEffect, useRef } from 'react'
import { useAnalytics } from '@/hooks/use-analytics'

export const ScrollTracker = () => {
  const { trackScrollDepth, trackTimeOnPage } = useAnalytics()
  const startTime = useRef(Date.now())
  const lastTrackedDepth = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      // Track scroll depth at 25%, 50%, 75%, and 100%
      if (scrollPercent >= 25 && lastTrackedDepth.current < 25) {
        trackScrollDepth(25)
        lastTrackedDepth.current = 25
      } else if (scrollPercent >= 50 && lastTrackedDepth.current < 50) {
        trackScrollDepth(50)
        lastTrackedDepth.current = 50
      } else if (scrollPercent >= 75 && lastTrackedDepth.current < 75) {
        trackScrollDepth(75)
        lastTrackedDepth.current = 75
      } else if (scrollPercent >= 100 && lastTrackedDepth.current < 100) {
        trackScrollDepth(100)
        lastTrackedDepth.current = 100
      }
    }

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
      if (timeSpent > 10) { // Only track if user spent more than 10 seconds
        trackTimeOnPage(timeSpent)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [trackScrollDepth, trackTimeOnPage])

  return null // This component doesn't render anything
}
