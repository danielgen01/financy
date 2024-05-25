/**
 * Formats a number string to ensure it has at most two decimal places.
 * Also replaces commas with periods.
 *
 * @param {string} value - The input value from the input field.
 * @returns {number} - The formatted number.
 */
export function formatToTwoDecimalPlaces(value: string) {
  let formattedValue = value.replace(",", ".")

  if (formattedValue.includes(".")) {
    const [integerPart, decimalPart] = formattedValue.split(".")
    const limitedDecimalPart = decimalPart.substring(0, 2)
    formattedValue = `${integerPart}.${limitedDecimalPart}`
  }

  return Number(formattedValue)
}
