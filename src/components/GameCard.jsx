"use client"

import React, { useState } from "react"
import WordHive from "./WordHive"
import { words } from "@/app/data/words"

function GameCard({ children, locale }) {
	const wordList = words[locale]
	const [counter, setCounter] = useState(0)
	const [score, setScore] = useState(0)

	const [guess, setGuess] = useState("")

	const checkGuess = () => {
		if (guess === wordList[counter].word) {
			setCounter(counter + 1)
			setGuess("")
		}
	}

	return (
		<div className="relative w-1/2 flex flex-col items-center justify-center bg-[#242525] p-12 gap-y-12 rounded-xl">
			<h1 className="absolute top-5 right-5 text-3xl text-color-text font-bold">
				{counter + 1}/{7}
			</h1>
			<div className="flex items-center justify-center gap-4">
				{wordList[counter].hive.split("").map((char, index) => (
					<WordHive
						key={index}
						char={char === "-" ? " - " : char}
					></WordHive>
				))}
			</div>
			<input
				className="w-1/2 p-2 text-black rounded-lg outline-none"
				type="text"
				name="guess"
				id="guess"
				value={guess}
				onChange={(e) => setGuess(e.target.value)}
			/>

			<button
				className="bg-color-btn text-white rounded-xl py-3 px-12 hover:bg-opacity-60 transition-all ease-in-out duration-300"
				onClick={checkGuess}
			>
				Next
			</button>
		</div>
	)
}

export default GameCard
