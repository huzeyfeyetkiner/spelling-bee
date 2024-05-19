import React from "react"

function WordHive({ char }) {
	return (
		<div className="w-12 h-12 flex justify-center items-center rounded-xl bg-[#272827] text-color-text border border-color-text">
			{char}
		</div>
	)
}

export default WordHive
