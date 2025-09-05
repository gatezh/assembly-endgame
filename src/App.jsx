import { useState } from "react";

import Header from './components/Header';
import Status from './components/Status';
import Languages from './components/Languages';
import Word from './components/Word';
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

import { languages } from "./data/languages";
import { getWord } from "./utils";
import './App.css'

function App() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getWord());
  const [triedLetters, setTriedLetters] = useState([]);

  // Derived values
  const wrongGuessCount = triedLetters.reduce(
    (acc, cur) => !currentWord.includes(cur) ? acc + 1 : acc,
    0
  );
  const numberOfGuessesLeft = languages.length - 1
  const isGameWon = currentWord.split('').every(letter => triedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numberOfGuessesLeft;
  const isGameOver = isGameWon | isGameLost;
  const lastGuessedLetter = triedLetters[triedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter
    && !currentWord.includes(lastGuessedLetter);

  function guessALetter(letter) {
    setTriedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]);
  }

  function resetGame() {
    setCurrentWord(getWord());
    setTriedLetters([]);
  }

  return (
    <main>
      <Header />
      <Status
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
      />
      <Languages
        wrongGuessCount={wrongGuessCount}
      />
      <Word
        word={currentWord}
        triedLetters={triedLetters}
      />
      {/* Combined visually-hidden aria-live region for status updates */}
      <section
        className="sr-only"
        aria-live="polite"
        role="status"
      >
        <p>
          {currentWord.includes(lastGuessedLetter) ?
            `Correct! The letter ${lastGuessedLetter} is in the word.` :
            `Sorry, the letter ${lastGuessedLetter} is not in the word.`
          }
          You have {numberOfGuessesLeft} attempts left.
        </p>
        <p>Current word: {currentWord.split("").map(letter =>
          triedLetters.includes(letter) ? letter + "." : "blank.")
          .join(" ")}</p>

      </section>
      <Keyboard
        word={currentWord}
        triedLetters={triedLetters}
        onLetterPress={guessALetter}
        isGameOver={isGameOver}
      />
      {isGameOver
        ? <NewGameButton
          onClick={resetGame}
        />
        : null
      }
    </main>
  )
}

export default App
