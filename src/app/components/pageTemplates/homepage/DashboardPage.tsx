import React from "react";
import { Grid } from "@mui/material";
import {
  headlineItemsMockCard,
  headlineItemsMockBigCardAssets,
  headlineItemsMockBigCardLiabilities,
} from "@/headlineItems.mock";
import Card from "../../Card/Card";
import { BigCard } from "../../BigCard/BigCard";
import { FilterMenu } from "../../FilterMenu/FilterMenu";
import CashflowOverview from "../../CashflowOverview/CashflowOverview";
import { DashboardPageProps } from "./DashboardPage.types";
import styles from "./DashboardPage.styles.module.css";
import {
  calculateTotal,
  calculateTotalExpense,
  calculateTotalIncome,
} from "./utilities";

const DashboardPage = ({ ...props }: DashboardPageProps) => {
  return (
    <>
      <section>
        <Grid container className={styles.StyledCardWrapper} spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <Card
              title="Balance"
              amount={94242}
              performance={20}
              isBalanceCard={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Card
              title="Incomes"
              amount={calculateTotalIncome(props.incomeData)}
              performance={20}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Card
              title="Expenses"
              amount={calculateTotalExpense(props.expenseData)}
              performance={10}
            />
          </Grid>
        </Grid>
      </section>
      <div className={styles.StyledHeadlineAndFilterWrapper}>
        <h1 className={styles.StyledHeadline}>Income Statement</h1>
        {/* <FilterMenu /> */}
      </div>
      <section className={styles.StyledBigCardsWrapperSection}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BigCard
              headlineItems={headlineItemsMockCard}
              color="red"
              buttonActionName="Add Income"
              cardTitle="Income"
              listItems={props.incomeData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BigCard
              headlineItems={headlineItemsMockCard}
              color="red"
              buttonActionName="Add Expense"
              cardTitle="Expenses"
              listItems={props.expenseData}
            />
          </Grid>
        </Grid>
      </section>

      <section className="StyledCashflowOverviewSection mt-10">
        <CashflowOverview
          netCashflowAmount={calculateTotal({
            incomeData: props.incomeData,
            expenseData: props.expenseData,
          })}
          incomeTotal={calculateTotalIncome(props.incomeData)}
          expenseTotal={calculateTotalExpense(props.expenseData)}
        />
      </section>
      <p>
        * Passive means in this case income, which you don&apos;t work actively
        for. As an example this could be a rented-out property, a YouTube video
        which brings you passive money after recording it, a published book,
        etc...
      </p>

      <section className={styles.StyledBigCardsWrapperSection}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} >
            <BigCard
              headlineItems={headlineItemsMockBigCardAssets}
              color="red"
              buttonActionName="Add Asset"
              cardTitle="Assets"
              listItems={props.assetData}
              isFourColumns={false} // We will check later on if we really need 4 columns TODO
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BigCard
              headlineItems={headlineItemsMockBigCardLiabilities}
              color="red"
              buttonActionName="Add Liability"
              cardTitle="Liabilities"
              listItems={props.liabilitiesData}
              isFourColumns={false} // We will check later on if we really need 4 columns TODO
            />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default DashboardPage;
