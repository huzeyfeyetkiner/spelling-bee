import React from "react"

import GameCard from "@/components/GameCard"
import { useTranslations } from "next-intl"

function Game({ params }) {
	const { locale } = params

	const t = useTranslations("Game")

	return (
		<div className="flex flex-col justify-center items-center p-12 gap-y-12">
			{/* Kelimeleri ve hive içeriğini görüntüleme */}
			<h1 className="max-w-96 text-lg text-center text-color-text">
				{t("game-desc")}
			</h1>
			<GameCard locale={locale}></GameCard>
		</div>
	)
}

export default Game
