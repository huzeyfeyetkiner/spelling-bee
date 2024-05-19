import React from "react"

import GameCard from "@/components/GameCard"

function Game({ params }) {
	const { locale } = params

	return (
		<div className="flex flex-col justify-center items-center p-12 gap-y-12">
			{/* Kelimeleri ve hive içeriğini görüntüleme */}

			<GameCard locale={locale}></GameCard>
		</div>
	)
}

export default Game
