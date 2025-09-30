export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function cn(
  ...classes: ReadonlyArray<string | null | undefined | false>
): string {
  return classes.filter(Boolean).join(' ');
}
