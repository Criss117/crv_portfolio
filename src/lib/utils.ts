import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type ReplaceWithSpanOptions = {
	htmlTag?: string;
	className?: string;
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function replaceWithSpan(
	text: string,
	{ htmlTag = "span", className = "" }: ReplaceWithSpanOptions = {},
): string {
	return text.replace(
		/##(.*?)##/g,
		`<${htmlTag} class="${className}">$1</${htmlTag}>`,
	);
}
