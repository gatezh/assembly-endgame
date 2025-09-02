import { nanoid } from "nanoid";

export default function Word({ word }) {
  const letters = word.split('').map(letter =>
    <span
      key={nanoid()}
      className="letter"
    >
      {letter.toUpperCase()}
    </span>
  )

  return (
    <section className="word">
      {letters}
    </section>
  )
}