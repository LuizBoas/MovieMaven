export function formatGenres(genres: { name: string }[]): string {
  const genreNames = genres.map((genre) => genre.name).join(", ");
  return genreNames;
}

export function formatMinToHours(runtime: number): string {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const duration = `${hours} h ${minutes} min`;

  return duration;
}

export function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
