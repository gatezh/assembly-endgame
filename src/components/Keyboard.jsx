import clsx from 'clsx';

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabet.split('').map(letter => {
    const isTried = props.triedLetters.includes(letter);
    const isCorrect = isTried && props.word.includes(letter);
    const isWrong = isTried && !props.word.includes(letter);

    const className = clsx({
      correctLetter: isCorrect,
      wrongLetter: isWrong,
      disabled: props.isGameOver
    })

    return (
      <button
        disabled={props.isGameOver}
        aria-disabled={props.triedLetters.includes(letter)}
        key={letter}
        className={className}
        aria-label={`Letter ${letter}`}
        onClick={() => {
          props.onLetterPress(letter);
        }}
      >
        {letter.toUpperCase()}
      </button>
    );
  }
  );
  return (
    <section className="keyboard">
      {letters}
    </section>
  )
}
