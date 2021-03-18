import React, { useEffect, useRef, useState } from 'react'

export const Clock = (props) => {
  const [time, setTime] = useState(Date.now())
  const [clock, setClock] = useState('')
  const intervalId = useRef(null)

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(Date.now()), 500)
    return () => {
      clearInterval(intervalId.current)
    }
  }, [])
  useEffect(() => {
    setClock(`${new Date(time).getHours() < 10 ? '0' + new Date(time).getHours() : new Date(time).getHours()}:${new Date(time).getMinutes() < 10 ? '0' + new Date(time).getMinutes() : new Date(time).getMinutes()}:${new Date(time).getSeconds() < 10 ? '0' + new Date(time).getSeconds() : new Date(time).getSeconds()}`)
  }, [new Date(time).getSeconds()])
  return (
    <div className="clock">
      {clock}
    </div>
  )
}
