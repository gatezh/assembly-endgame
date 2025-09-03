import { useState } from "react";

import Header from './components/Header';
import Status from './components/Status';
import Languages from './components/Languages';
import Word from './components/Word';
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

import './App.css'

function App() {
  const [currentWord, setCurrentWord] = useState('react');
  const [triedLetters, setTriedLetters] = useState([]);

  function guessALetter(letter) {
    console.log(letter);
    setTriedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]);
  }

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word word={currentWord} />
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
