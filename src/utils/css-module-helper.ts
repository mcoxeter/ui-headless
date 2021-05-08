export function toCssModuleName(
  classes: string[],
  resolver: { readonly [key: string]: string }
): string {
  const mapped = classes.map((x) => resolver[x]);
  return mapped.join(' ');
}
