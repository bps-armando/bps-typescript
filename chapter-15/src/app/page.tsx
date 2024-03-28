'use client'
import Counter from "./Counter"
import { CounterProvider } from "@/context/CounterContext"
import { initState } from "@/context/CounterContext"

export default function Home(){
  return(
    <>
    <CounterProvider count={initState.count} text={initState.text}>
    <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </CounterProvider>
    </>
  )
}