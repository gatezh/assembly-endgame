import { useState } from "react";

import Header from './components/Header';
import Status from './components/Status';
import Languages from './components/Languages';
import Word from './components/Word';
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

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
  console.log("wrongGuessCount");
  console.log(wrongGuessCount);

  function guessALetter(letter) {
    setTriedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]);
  }

  return (
    <>
      <Header />
      <Status />
      <Languages
        wrongGuessCount={wrongGuessCount}
      />
      <Word
        word={currentWord}
        triedLetters={triedLetters}
      />
      <Keyboard
        word={currentWord}
        triedLetters={triedLetters}
        onLetterPress={guessALetter}
      />
      <NewGameButton />
    </>
  )
}

export default App
