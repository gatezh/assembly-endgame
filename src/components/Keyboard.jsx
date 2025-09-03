import clsx from 'clsx';

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabet.split('').map(letter => {
    const isTried = props.triedLetters.includes(letter);
    const isCorrect = isTried && props.word.includes(letter);
    const isWrong = isTried && !props.word.includes(letter);

    const className = clsx({
      correctLetter: isCorrect,
      wrongLetter: isWrong
    })

    return (<button
      key={letter}
      className={className}
      onClick={() => {
        props.onLetterPress(letter);
      }}
    >
      {letter.toUpperCase()}
    </button>);
  }
  );
  return (
    <section className="keyboard">
      {letters}
    </section>
  )
}
