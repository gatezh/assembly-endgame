export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabet.split('').map(letter =>
    <button
      key={letter}
      onClick={() => props.onLetterPress(letter)}
    >
      {letter.toUpperCase()}
    </button>
  );
  return (
    <section className="keyboard">
      {letters}
    </section>
  )
}
