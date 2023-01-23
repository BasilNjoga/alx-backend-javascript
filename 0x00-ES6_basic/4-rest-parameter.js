export default function returnHowManyArguments (...theArgs) {
  let counter
  for (const x of theArgs) {
    if (x) {
      counter++
    }
  }
  return counter
}
