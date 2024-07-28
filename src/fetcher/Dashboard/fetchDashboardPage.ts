export async function fetchDashboardPageProps(fetcher: {
  getIncomeData: () => Promise<any[]>;
  getExpenseData: () => Promise<any[]>;
  getAssetData: () => Promise<any[]>;
  getLiabilitiesData: () => Promise<any[]>;
}): Promise<{
  incomeData: any[];
  expenseData: any[];
  assetData: any[];
  liabilitiesData: any[];
}> {
  const incomeData = await fetcher.getIncomeData();

  // TODO: the data we fetch here is dynamic and doesnt have to be here in the first place,
  //  so we probably dont need to throw an error
  // if (!incomeData) {
  //   throw new Error("No income data found")
  // }

  const expenseData = await fetcher.getExpenseData();
  if (!expenseData) {
    // throw new Error("No expense data found")
  }

  // TODO: the data we fetch here is dynamic and doesnt have to be here in the first place,
  //  so we probably dont need to throw an error
  const assetData = await fetcher.getAssetData();
  // if (!assetData) {
  //   throw new Error("No asset data found")
  // }

  // TODO: the data we fetch here is dynamic and doesnt have to be here in the first place,
  //  so we probably dont need to throw an error
  const liabilitiesData = await fetcher.getLiabilitiesData();
  // if (!liabilitiesData) {
  //   throw new Error("No liabilities data found")
  // }

  return {
    incomeData,
    expenseData,
    assetData,
    liabilitiesData,
  };
}
