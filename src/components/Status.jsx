import clsx from "clsx";

export default function Status(props) {
  const className = clsx("status",
    {
      isGameWon: props.isGameWon,
      isGameLost: props.isGameLost
    });
  
  function gameStatusMessage() {
    if (!props.isGameOver) {
      return null;
    }

    if (props.isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉🎉🎉</p>
        </>
      );
    }

    if (props.isGameLost) {
      return (
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly 😿</p>
        </>
      );
    }
  }
  
  return (
    <section className={className}>
      {gameStatusMessage()}
    </section>
  )
}
