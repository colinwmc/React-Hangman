import { useState } from 'react'
import clsx from 'clsx';
import { languages } from './languages'

function App() {

  const [word, setWord] = useState('react');
  const [guessedLetters, setGuessedLetters] = useState([]);

  let wrongGuesses = guessedLetters.filter(letter => !word.includes(letter)).length;
  let gameWon = (guessedLetters.length - wrongGuesses) >= [...new Set(word)].length;
  let gameLost = wrongGuesses >= languages.length - 1;
  let gameOver = gameWon || gameLost;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const statuses = [
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: 'Goodbye HTML', bottom: '', style: { backgroundColor: '#7A5EA7' } },
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: 'Goodbye JS', bottom: '😭', style: { backgroundColor: '#7A5EA7' } },
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: '', bottom: '', style: { backgroundColor: 'transparent' } },
    { top: 'Game Over!', bottom: 'You lose! Better start learning Assembly 😭', style: { backgroundColor: '#BA2A2A' } },
    { top: 'You Win!', bottom: 'Well done! 🎉', style: { backgroundColor: '#10A95B' } }
  ];
  let statusIndex = gameWon ? statuses.length - 1 : wrongGuesses;

  const languageChips = languages.map((language, index) => {
    return (
      <span key={language.name} className={clsx({ chip: true, lost: index < wrongGuesses })} style={{ color: language.color, backgroundColor: language.backgroundColor }}>{language.name}</span>
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
      <section className='status' style={statuses[statusIndex].style}>
        <h2 className='status-line-1'>{statuses[statusIndex].top}</h2>
        {statuses[statusIndex].bottom.length > 0 && <h3 className='status-line-2'>{statuses[statusIndex].bottom}</h3>}
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
      {gameOver && <button className="new-game">New Game</button>}
    </main>
  )
}

export default App
