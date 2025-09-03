import { nanoid } from "nanoid";

export default function Word(props) {
  const letters = props.word.split('').map(letter => {
    const isCorrect = props.triedLetters.includes(letter);

    return (
      <span
        key={nanoid()}
        className="letter"
        >
          {isCorrect ? letter.toUpperCase() : ''}
      </span>
    )}
  )

  return (
    <section className="word">
      {letters}
    </section>
  )
}