export const calculateTotal = ({
  incomeData,
  expenseData,
}: {
  incomeData: any
  expenseData: any
}) => {
  let total = 0
  for (const key in incomeData) {
    if (Object.prototype.hasOwnProperty.call(incomeData, key)) {
      total += incomeData[key].cashflowAmount
    }
  }
  for (const key in expenseData) {
    if (Object.prototype.hasOwnProperty.call(expenseData, key)) {
      total -= expenseData[key].cashflowAmount
    }
  }
  return total
}

export const calculateTotalIncome = (incomeData: any) => {
  let total = 0
  for (const key in incomeData) {
    if (Object.prototype.hasOwnProperty.call(incomeData, key)) {
      total += incomeData[key].cashflowAmount
    }
  }
  return total
}

export const calculateTotalExpense = (expenseData: any) => {
  let total = 0
  for (const key in expenseData) {
    if (Object.prototype.hasOwnProperty.call(expenseData, key)) {
      total += expenseData[key].cashflowAmount
    }
  }
  return total
}
