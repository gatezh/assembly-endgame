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
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  function guessALetter(letter) {
    console.log(letter);
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]);
  }

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word word={currentWord} />
      <Keyboard onLetterPress={guessALetter} />
      <NewGameButton />
    </>
  )
}

export default App
