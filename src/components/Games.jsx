import React, { useState } from 'react'
import { Hint, letters, Word } from '../utils/game'
import Modal from './Modal'

export default function Games() {
    let currentWord = Word
    var wrongGuessCount = 0
    const maxGuesses = 6
    let correctLetters = []

    const [resetModal, setResetModal] = useState(false)


    async function initGame(clickedLetter, bId){
        if(currentWord.includes(clickedLetter)){
            [...currentWord].forEach((letter, index)=>{
                if(letter===clickedLetter){
                    let wordDisplay = document.querySelector(".word-display")
                    wordDisplay.querySelectorAll("li")[index].innerText= letter
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
                    correctLetters.push(clickedLetter)
                }
            })
        } else{
            wrongGuessCount++
            let hangmanImage = document.querySelector(".hangman-box img")
            hangmanImage.src = `../game/images/hangman-${wrongGuessCount}.svg`
        }
        let GuessesText = document.querySelector(".guess-text b")
        GuessesText.innerText = ` ${wrongGuessCount} / ${maxGuesses}`
        let button = document.getElementById(bId)
        button.disabled = true
        let gameModal = document.querySelector(".game-modal")
        if(wrongGuessCount===maxGuesses)  {
            gameModal.querySelector("img").src = "../game/images/lost.gif"
            gameModal.querySelector("h4").innerText = "Game Over!"
            gameModal.querySelector("p").innerText = `The correct word was : `
            gameModal.querySelector(".p2").innerText =`${Word}`
            gameModal.classList.add("show")
        }
        if(correctLetters.length===currentWord.length)  {
            gameModal.querySelector("img").src = "../game/images/victory.gif"
            gameModal.querySelector("h4").innerText = "Congratulations"
            gameModal.querySelector("p").innerText = `You found the word : `
            gameModal.querySelector(".p2").innerText =`${Word}`
            gameModal.classList.add("show")
        }

    }

    
  return (
    <section id='game' className='min-h-screen p-5 px-10 bg-gradient-to-b from-lime-300 to-lime-200 flex flex-col gap-10 items-center sm:pb-20 pb-30'>
        <h1 className='heading px-10 bg-white rounded-lg md:rounded-[5rem]'><i className='fa-solid fa-gamepad'></i> Game!</h1>
        <div className="game-modal">
            <div className="content">
                <img className='mx-auto' src="" alt="" />
                <h4></h4>
                <p></p>
                <p className='p2'></p>
                <button className="play-again" onClick={()=>{
                     window.location.reload()
                }}>Exit Game</button>
            </div>
        </div>
        <div className='game-container'>
            <div className='hangman-box'>
                <img src="../game/images/hangman-0.svg" alt="hangman-img" />
                <h1>Hangman Game</h1>
            </div>
            <div className='game-box flex flex-col items-center justify-center'>
                <ul className='word-display'>
                    {Word.split("").map((option, optionIndex)=>{
                        return(
                        <li key={optionIndex} className='letter'></li>
                    )})}
                </ul>
                <h4 className='hint-text'>
                    Hint :
                    <b> {Hint}</b>
                </h4>
                <h4 className='guess-text'>
                    Incorrect Guesses : 
                    <b> 0 / 6</b>
                </h4>
                <div className='keyboard'>
                    {letters.map((option, optionIndex)=>{
                        return(
                        <button key={optionIndex} id={optionIndex} onClick={()=>{
                            initGame(option.name, optionIndex)
                        }}>{option.name}</button>
                    )})}
                </div>
                <button onClick={()=>{setResetModal(true)}} className='mt-5 rounded-xl border-black border-1 
                p-2 hover:bg-lime-300 hover:border-0 hover:p-3 hover:transition-[0.8s]'>How to play</button>
                {(resetModal)&&(<Modal handleCloseModal={()=>{setResetModal(false)}} >
                    <div className='bg-white flex flex-col items-center rounded-[3rem] justify-center p-4 max-w-[500px] gap-5'>
                        <h1 className='heading text-[darkgreen] font-semibold'>Rules!</h1>
                        <ol type="1" className='flex flex-col gap-2'>
                            <li>1. The guesser suggests a letter they think might be in the word. 
                                If the letter is in the word, the game writes it in the correct position(s) 
                                on the dashes. If the letter is not in the word, the game draws one element of 
                                a hangman diagram, typically starting with the face.
                            </li>
                            <li>2. The guesser continues suggesting letters, trying to correctly guess all the 
                                letters in the word before the hangman diagram is complete. 
                                Each incorrect guess adds another element to the diagram.
                            </li>
                            <li>
                            3. If the guesser correctly guesses all the letters before the hangman diagram is 
                            complete, they win. If the diagram is completed first, they lose.
                            </li>
                        </ol>
                    </div>
                </Modal>)}
            </div>
        </div>
    </section>
  )
}
