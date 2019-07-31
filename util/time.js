export function formatSeconds(seconds) {
  const date = new Date(seconds * 1000)

  return date.toISOString().substr(14, 5)
}
