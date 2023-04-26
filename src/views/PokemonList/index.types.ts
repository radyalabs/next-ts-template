export interface Pokemon {
  count: number,
  next: string,
  previous: string,
  results: Array<{
    url: string;
    name: string;
  }>
}
