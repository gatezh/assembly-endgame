import { useState } from "react";

import Header from './components/Header';
import Status from './components/Status';
import Languages from './components/Languages';
import Word from './components/Word';
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

import { languages } from "./data/languages";
import './App.css'

function App() {
  // State values
  const [currentWord, setCurrentWord] = useState('react');
  const [triedLetters, setTriedLetters] = useState([]);

  // Derived values
  const wrongGuessCount = triedLetters.reduce(
    (acc, cur) => !currentWord.includes(cur) ? acc + 1 : acc,
    0
  );
  const isGameWon = currentWord.split('').every(letter => triedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon | isGameLost;
  const lastGuessedLetter = triedLetters[triedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter
    && !currentWord.includes(lastGuessedLetter);

  function guessALetter(letter) {
    setTriedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]);
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
      {/* a11y section */}
      <section
        className="sr-only"
        aria-live="polite"
        role="status"
      >
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
        ? <NewGameButton />
        : null
      }
    </main>
  )
}

export default App
