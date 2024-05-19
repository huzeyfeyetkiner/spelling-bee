"use client"

import React, { useEffect, useState } from "react"
import WordHive from "./WordHive"
import { words } from "@/app/data/words"

function GameCard({ locale }) {
	const wordList = words[locale]
	const [counter, setCounter] = useState(0)
	const [score, setScore] = useState(0)
	const [guess, setGuess] = useState("")
	const [selectedWords, setSelectedWords] = useState([]) // will be fillfull after shuffle
	const [timeLeft, setTimeLeft] = useState(60)

	const [gameOn, setGameOn] = useState(true)

	const checkGuess = () => {
		if (counter > 7) {
			setGameOn(false)
		}
		if (guess === wordList[counter].word) {
			setScore(score + 10)
			setTimeLeft((prevTime) => prevTime + 15)
		}
		setGuess("")
		setCounter(counter + 1)
	}

	const restartGame = () => {
		setTimeLeft(60)
		setCounter(0)
		setScore(0)
		const shuffledWords = wordList.sort(() => Math.random() - 0.5)
		setSelectedWords(shuffledWords.slice(0, 7))
	}

	useEffect(() => {
		const shuffledWords = wordList.sort(() => Math.random() - 0.5)
		setSelectedWords(shuffledWords.slice(0, 7))
	}, [locale, wordList])

	useEffect(() => {
		if (timeLeft > 0 && counter < 7) {
			const timer = setInterval(() => {
				setTimeLeft((prevTime) => prevTime - 1)
			}, 1000)
			return () => clearInterval(timer)
		} else {
			setGameOn(false)
		}
	}, [timeLeft, locale, counter])

	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${minutes}:${secs < 10 ? "0" : ""}${secs}`
	}

	return (
		<div className="relative w-1/2 min-w-fit flex flex-col items-center justify-center bg-[#242525] p-12 gap-y-12 rounded-xl">
			<h1 className="absolute top-5 right-5 text-2xl text-color-text font-bold">
				{counter + 1}/{7}
			</h1>

			<h1 className="absolute top-5 text-2xl text-color-text font-bold">
				{locale === "tr" ? "Kalan Süre" : "Time Left"}:{" "}
				{formatTime(timeLeft)}
			</h1>

			<h1 className="absolute top-5 left-5 text-3xl text-color-text font-bold">
				{locale === "tr" ? "Skorun" : "Your Score"}: {score}
			</h1>
			<div className="flex items-center justify-center gap-4 mt-6">
				{selectedWords[counter]?.hive.split("").map((char, index) => (
					<WordHive
						key={index}
						char={char === "-" ? " - " : char}
					></WordHive>
				))}
			</div>

			{(counter === 7 || timeLeft === 0) && (
				<div className="flex flex-col justify-center items-center gap-y-5">
					<h1 className="text-2xl text-color-text text-center">
						{locale === "tr"
							? `Oyun Bitti, Skorun:${score}`
							: `The Game Has Ended Your score: ${score}`}
					</h1>

					<button
						className="bg-color-btn text-white rounded-xl py-3 px-12 hover:bg-opacity-60 transition-all ease-in-out duration-300"
						onClick={restartGame}
					>
						{locale === "tr" ? "Yeniden Oyna" : "Restart Game"}
					</button>
				</div>
			)}
			<input
				className="w-1/2 p-2 text-black rounded-lg outline-none"
				type="text"
				name="guess"
				id="guess"
				value={guess}
				onChange={(e) => setGuess(e.target.value)}
				disabled={counter === 7 || timeLeft === 0}
			/>

			<button
				className="bg-color-btn text-white rounded-xl py-3 px-12 hover:bg-opacity-60 transition-all ease-in-out duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed"
				onClick={checkGuess}
				disabled={counter === 7 || timeLeft === 0}
			>
				{locale === "tr" ? "Tahmin Et" : "Guess"}
			</button>

			{counter === 7 ||
				(timeLeft === 0 && (
					<div className="flex flex-col flex-1 justify-center items-center">
						<h1 className="text-2xl text-color-text">Time is up</h1>
						<button
							className="bg-white text-black rounded-xl py-3 px-12 hover:bg-opacity-60 transition-all ease-in-out duration-300 mt-3"
							onClick={restartGame}
						>
							{locale === "tr" ? "Tekrar Oyna" : "Restart"}
						</button>
					</div>
				))}
		</div>
	)
}

export default GameCard
