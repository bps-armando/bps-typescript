'use client'
import Heading from "./components/heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import { useState } from "react";
import List from "./components/List";

export default function Home() {
  const[count, setCount] = useState<number>(1)
  return (
    <>
    <Heading title={"Sup"}/>
    <Section title="Not a Title">
      This is my Section
    </Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={["Coffee", "Tacos", "Fortnite"]} render={(item:string) => <span className="bold">{item}</span>}/>
    </>
  );
}
