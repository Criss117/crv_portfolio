type ReplaceWithSpanOptions = {
  htmlTag?: string;
  className?: string;
};

export function replaceWithSpan(
  text: string,
  { htmlTag = "span", className = "" }: ReplaceWithSpanOptions = {}
): string {
  return text.replace(
    /##(.*?)##/g,
    `<${htmlTag} class="${className}">$1</${htmlTag}>`
  );
}
