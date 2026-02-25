'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const photos = [
  '/photos/photo1.jpg',
  '/photos/photo2.jpg',
  '/photos/photo3.jpg',
  '/photos/photo6.jpg',
  '/photos/photo7.jpg',
  '/photos/photo8.jpg',
  '/photos/photo9.jpg',
  '/photos/photo10.jpg',
]

const cardMessages = [
  "happy 4 years\ndumb bich",
  "remember when\nwe first met? 🥰",
  "i miss you\nman",
  "best decision\ni ever made was you",
  "can't wait for\nthe next 4 years!",
  "i love you\nso much",
  "you're stuck\nwith me now",
  "thanks for putting\nup with my bs 😂"
]

const secretMessages = [
  "remember when we first met? 🥰",
  "you still make my heart skip a beat",
  "best decision i ever made was you",
  "can't wait for the next 4 years... and more!",
  "you're stuck with me forever 😘",
  "thanks for putting up with my bs 😂"
]

export default function Final() {
  const [show, setShow] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const [secretClicks, setSecretClicks] = useState(0)
  const [showSecret, setShowSecret] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [konami, setKonami] = useState<string[]>([])
  const [easterEggFound, setEasterEggFound] = useState(false)

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight']

  useEffect(() => {
    setTimeout(() => setShow(true), 300)

    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami(prev => {
        const newKonami = [...prev, e.key].slice(-8)
        if (newKonami.join(',') === konamiCode.join(',')) {
          setEasterEggFound(true)
          setShowConfetti(true)
          setTimeout(() => setShowConfetti(false), 3000)
        }
        return newKonami
      })
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleHeartClick = () => {
    setSecretClicks(prev => prev + 1)
    if (secretClicks >= 2) {
      setShowSecret(true)
      setTimeout(() => setShowSecret(false), 3000)
      setSecretClicks(0)
    }
  }

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'auto',
      padding: '40px 20px 80px'
    }}>
      {/* Confetti effect */}
      {showConfetti && (
        <div style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1000
        }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: '-10px',
                width: '10px',
                height: '10px',
                background: ['#FFD700', '#FF69B4', '#00CED1', '#FF1493'][Math.floor(Math.random() * 4)],
                animation: `fall ${2 + Math.random() * 3}s linear forwards`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      {/* Photo Grid with Flip Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
        gap: 'clamp(15px, 4vw, 25px)',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {photos.map((photo, index) => {
          const isFlipped = flippedCards.has(index)

          return (
            <div
              key={photo}
              onClick={() => handleCardClick(index)}
              onTouchEnd={(e) => {
                e.preventDefault()
                handleCardClick(index)
              }}
              style={{
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`,
                cursor: 'pointer',
                perspective: '1000px',
                WebkitPerspective: '1000px',
                minHeight: 'clamp(280px, 50vw, 400px)',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: 'clamp(280px, 50vw, 400px)',
                  transformStyle: 'preserve-3d',
                  WebkitTransformStyle: 'preserve-3d',
                  transition: 'transform 0.6s ease-out',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of card - Photo */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    minHeight: 'clamp(280px, 50vw, 400px)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                    border: '4px solid white',
                    background: '#ffffff'
                  }}
                >
                  <Image
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    fill
                    style={{ objectFit: 'contain', padding: '10px' }}
                    priority={index < 3}
                  />
                </div>

                {/* Back of card - Text */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    minHeight: 'clamp(280px, 50vw, 400px)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                    border: '4px solid white',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(20px, 5vw, 30px)'
                  }}
                >
                  <p
                    className="pacifico"
                    style={{
                      fontSize: 'clamp(22px, 5.5vw, 36px)',
                      fontWeight: '400',
                      color: 'white',
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      textAlign: 'center',
                      lineHeight: '1.4',
                      whiteSpace: 'pre-line',
                      wordBreak: 'break-word',
                      maxWidth: '100%',
                      margin: 0
                    }}
                  >
                    {cardMessages[index]}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Clickable sparkle emoji - bottom right */}
      <div
        onClick={handleHeartClick}
        style={{
          position: 'fixed',
          bottom: 'clamp(20px, 3vh, 30px)',
          right: 'clamp(20px, 3vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          cursor: 'pointer',
          zIndex: 100,
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
          pointerEvents: 'auto'
        }}
        title="click me! 🤫"
      >
        <span style={{
          fontSize: 'clamp(36px, 8vw, 48px)',
          animation: 'pulse 1.5s ease-in-out infinite'
        }}>
          ✨
        </span>
        <span style={{
          fontSize: 'clamp(10px, 2.5vw, 14px)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: '600',
          fontStyle: 'italic',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          surprise, tap 3 times
        </span>
      </div>

      {/* Secret message popup */}
      {showSecret && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.9)',
          padding: 'clamp(20px, 5vw, 40px) clamp(30px, 8vw, 60px)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          zIndex: 1000,
          animation: 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          maxWidth: '90vw'
        }}>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 28px)',
            color: 'white',
            textAlign: 'center',
            fontWeight: '600'
          }}>
            {secretMessages[Math.floor(Math.random() * secretMessages.length)]}
          </p>
        </div>
      )}

      {/* Easter egg message */}
      {easterEggFound && (
        <div style={{
          position: 'fixed',
          top: 'clamp(10px, 2vh, 20px)',
          right: 'clamp(10px, 2vw, 20px)',
          background: 'rgba(255,255,255,0.95)',
          padding: 'clamp(10px, 2vw, 15px) clamp(15px, 3vw, 25px)',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          zIndex: 1000,
          animation: 'slideInRight 0.5s ease-out',
          maxWidth: '80vw'
        }}>
          <p style={{
            fontSize: 'clamp(12px, 2.5vw, 16px)',
            color: '#f5576c',
            fontWeight: '700',
            margin: 0
          }}>
            🎮 you found the secret code! you're such a nerd 😂
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes fall {
          to {
            top: 110%;
            transform: rotate(720deg);
          }
        }

        @keyframes popIn {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(400px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
