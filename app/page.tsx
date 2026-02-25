'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [attempts, setAttempts] = useState(0)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/final')
    }, 20000)

    return () => clearTimeout(timer)
  }, [router])

  const handleInteraction = () => {
    setAttempts(prev => prev + 1)

    const maxX = 85
    const maxY = 85
    const minX = 5
    const minY = 5

    const newX = Math.random() * (maxX - minX) + minX
    const newY = Math.random() * (maxY - minY) + minY

    setPosition({ x: newX, y: newY })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    handleInteraction()
  }

  const getEncouragingText = () => {
    if (attempts < 5) return "try to catch me!"
    if (attempts < 10) return "hehe too slow"
    if (attempts < 15) return "still trying?"
    if (attempts < 20) return "you're persistent"
    return "just wait... patience!"
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      touchAction: 'none'
    }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 'clamp(12px, 3vw, 14px)',
        fontWeight: '500',
        padding: '5px 10px'
      }}>
        attempts: {attempts}
      </div>

      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 'clamp(10px, 2.5vw, 12px)',
        fontStyle: 'italic',
        padding: '5px 10px',
        maxWidth: '50%'
      }}>
        {getEncouragingText()}
      </div>

      <div
        ref={buttonRef}
        onMouseEnter={handleInteraction}
        onClick={handleInteraction}
        onTouchStart={handleTouchStart}
        style={{
          position: 'absolute',
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          animation: 'float 3s ease-in-out infinite',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <h1 className="pacifico" style={{
          fontSize: 'clamp(60px, 20vw, 120px)',
          fontWeight: '400',
          color: 'white',
          textShadow: '0 10px 30px rgba(0,0,0,0.3)',
          userSelect: 'none',
          padding: '20px',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none'
        }}>
          hi
        </h1>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          @keyframes float {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0px);
            }
            50% {
              transform: translate(-50%, -50%) translateY(-10px);
            }
          }
        }
      `}</style>
    </div>
  )
}
