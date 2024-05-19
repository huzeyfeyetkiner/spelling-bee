import React from "react"

function WordHive({ char }) {
	return (
		<div className="w-6 h-6 md:w-12 md:h-12 flex justify-center items-center rounded-lg bg-[#272827] text-color-text border border-color-text">
			{char}
		</div>
	)
}

export default WordHive
