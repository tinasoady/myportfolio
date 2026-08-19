import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 28, startDelay = 300, className = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    let frame
    const startId = setTimeout(() => {
      const tick = () => {
        setCount((c) => {
          if (c >= text.length) return c
          frame = setTimeout(tick, speed)
          return c + 1
        })
      }
      tick()
    }, startDelay)
    return () => {
      clearTimeout(startId)
      clearTimeout(frame)
    }
  }, [text, speed, startDelay])

  const done = count >= text.length

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className={`text-accent ${done ? 'cursor-blink' : ''}`}>_</span>
    </span>
  )
}
