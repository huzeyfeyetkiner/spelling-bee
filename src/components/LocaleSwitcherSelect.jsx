"use client"
import { useParams } from "next/navigation"
import { ChangeEvent, useTransition } from "react"
import { useRouter, usePathname } from "../navigation"

export default function LocaleSwitcherSelect({ children, defaultValue }) {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const pathname = usePathname()
	const params = useParams()

	function onSelectChange(event) {
		//event.preventDefault();
		const nextLocale = event.target.value
		console.log("defaultnext  ", nextLocale)
		startTransition(() => {
			router.replace({ pathname, params }, { locale: nextLocale })
		})
	}

	return (
		<div
			className="inline-flex w-28 mr-5 justify-between text-lg text-white "
			disabled={isPending}
			onClick={onSelectChange}
			value="tr"
			defaultValue={defaultValue}
		>
			{children}
		</div>
	)
}
