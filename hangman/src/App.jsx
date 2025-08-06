import { useState } from 'react'
import clsx from 'clsx';
import { languages } from './languages'

function App() {

  const [word, setWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);

  let wrongGuesses = guessedLetters.filter(letter=>!word.includes(letter)).length;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languageChips = languages.map(language => {
    return (
      <span key={language.name} className='chip' style={{ color: language.color, backgroundColor: language.backgroundColor }}>{language.name}</span>
    )
  });

  const letterSquares = word.split('').map((letter, index) => {
    return (
      <span key={index} className='letter'>{guessedLetters.includes(letter) ? letter.toUpperCase() : ''}</span>
    )
  });

  const keys = alphabet.split('').map((letter, index) => {
    return (
      <button key={index}
        className={clsx('key',
          word.includes(letter) && guessedLetters.includes(letter) && 'correct',
          !word.includes(letter) && guessedLetters.includes(letter) && 'incorrect')}
        onClick={() => guessLetter(letter)}
      >{letter.toUpperCase()}</button>
    )
  });

  function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters(prev => ([...prev, letter]));
    }

  }

  return (
    <main>
      <header>
        <h1 className='title'>Assembly: Endgame</h1>
        <p className='instructions'>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className='status'>
        <h2 className='status-line-1'>You win!</h2>
        <h3 className='status-line-2'>Well done! 🎉</h3>
      </section>
      <section className='chip-box'>
        {languageChips}
      </section>
      <section className='word-box'>
        {letterSquares}
      </section>
      <section className='keyboard'>
        {keys}
      </section>
      <button className="new-game">New Game</button>
    </main>
  )
}

export default App
