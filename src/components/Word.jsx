import { nanoid } from "nanoid";
import clsx from "clsx";

export default function Word(props) {
  const letters = props.word.split('').map(letter => {
    const isCorrectLetter = props.triedLetters.includes(letter);

    function renderLetter() {
      const shouldRevelLetter = props.isGameLost || isCorrectLetter;
      return shouldRevelLetter ? letter.toUpperCase() : '';
    }

    return (
      <span
        key={nanoid()}
        className={clsx("letter",
          { notGuessed: props.isGameLost && !isCorrectLetter })
        }
        >
          {renderLetter()}
      </span>
    )}
  )

  return (
    <section className="word">
      {letters}
    </section>
  )
}
