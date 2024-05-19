import { Inter } from "next/font/google"
import "../globals.css"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import LocaleSwitcher from "@/components/LocaleSwitcher"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// }

export async function generateMetadata({ params }) {
	// read route params
	const { locale } = params

	return {
		title: locale === "en" ? "Spelling Bee Game" : "Kelime Oyunu",
	}
}

export default function RootLayout({ children, params: { locale } }) {
	const messages = getMessages()

	return (
		<html lang={locale}>
			<body
				className={` flex flex-1 flex-col min-h-screen ${inter.className}`}
			>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					<div className="flex-1 bg-[#272827]">{children}</div>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
