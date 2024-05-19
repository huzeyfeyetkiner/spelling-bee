import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	const t = useTranslations("Index")

	return (
		<main className="flex flex-col items-center justify-between p-12">
			<h1 className="w-96 text-center text-color-text ">
				{t("description")}
			</h1>
			<Link
				href={"game"}
				className="bg-color-btn text-white rounded-xl py-3 px-12 mt-6 hover:bg-opacity-60 transition-all ease-in-out duration-300"
			>
				{t("play")}
			</Link>
		</main>
	)
}
