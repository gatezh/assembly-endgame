import { useState } from "react";

import Header from './components/Header';
import Status from './components/Status';
import Languages from './components/Languages';
import Word from './components/Word';
import Keyboard from "./components/Keyboard";

import './App.css'

function App() {
  const [currentWord, setCurrentWord] = useState('react');

  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word word={currentWord} />
      <Keyboard />
    </>
  )
}

export default App
