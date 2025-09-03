export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabet.split('').map(letter =>
    <button key={letter}>{letter.toUpperCase()}</button>
  );
  return (
    <section className="keyboard">
      {letters}
    </section>
  )
}
