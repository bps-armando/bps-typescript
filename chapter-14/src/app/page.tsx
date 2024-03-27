'use client'
import Counter from "./Counter"

export default function Home(){
  return(
    <>
    <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}