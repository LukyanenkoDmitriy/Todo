import { useEffect, useState } from 'react'

export default function Timer({ taskMin, taskSec, onTimerComplete }) {
  const [minutes, setMinutes] = useState(taskMin)
  const [seconds, setSeconds] = useState(taskSec)
  const [isActive, setIsActive] = useState(false)

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  useEffect(() => {
    let interval

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval)
            onTimerComplete()
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, minutes, seconds, onTimerComplete])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="task-timer">
      <button className={`icon icon-${isActive ? 'pause' : 'play'}`} onClick={toggleTimer}></button>
      <span className="description--timer">{`${formattedMinutes}:${formattedSeconds}`}</span>
    </div>
  )
}
