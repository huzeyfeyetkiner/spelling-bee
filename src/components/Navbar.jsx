import React from "react"
import LocaleSwitcher from "./LocaleSwitcher"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"

function Navbar() {
	const t = useTranslations("Navbar")

	return (
		<div className="relative w-full flex flex-col justify-center items-center bg-[#242525] py-10">
			<Link href={"/"}>
				<h1 className="text-3xl text-color-text font-bold">
					{t("title")}
				</h1>
			</Link>
			<div className="absolute right-10 flex">
				<LocaleSwitcher />
				<Link
					href={"https://github.com/huzeyfeyetkiner"}
					target="_blank"
				>
					<Image
						src={"/github-mark-white.png"}
						width={30}
						height={30}
						alt="github_logo"
					/>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
