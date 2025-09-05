import clsx from "clsx";
import { languages } from "../data/languages";
import { getFarewellText } from "../utils/getFarewellText";

export default function Status(props) {
  const className = clsx("status",
    {
      isGameWon: props.isGameWon,
      isGameLost: props.isGameLost,
      farewell: props.isLastGuessIncorrect,
    });
  
  function gameStatusMessage() {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
      return (
        <>
          <p>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
        </>
      );
    }

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

    return null;
  }
  
  return (
    <section
      aria-live="polite"
      role="status"
      className={className}>
      {gameStatusMessage()}
    </section>
  )
}
