import { useLocale, useTranslations } from "next-intl"
import { locales } from "../config"
import LocaleSwitcherSelect from "./LocaleSwitcherSelect"
import Image from "next/image"

export default function LocaleSwitcher() {
	const t = useTranslations("LocaleSwitcher")
	const locale = useLocale()

	return (
		<LocaleSwitcherSelect defaultValue={locale}>
			{locales.map((cur) => (
				<button
					key={cur}
					value={cur}
					className="flex flex-row items-center justify-center w-10 h-10 text-color-text"
				>
					{cur == "tr" ? (
						<>{t("locale", { locale: cur })}</>
					) : (
						<>{t("locale", { locale: cur })}</>
					)}
				</button>
			))}
		</LocaleSwitcherSelect>
	)
}
