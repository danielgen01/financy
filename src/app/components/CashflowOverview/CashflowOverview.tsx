import Image from "next/image"
import React from "react"

const CashflowOverview = () => {
  return (
    <div className="StyledCashflowOverviewWrapper bg-white-default w-full rounded-md">
      <div className="StyledCashflowContentWrapper flex justify-between p-10 items-center h-full w-full">
        <div className="StyledImagePlusTextWrapper flex items-center gap-5">
          <Image
            src="/cashflow.png"
            alt="Cashflow Overview"
            width={100}
            height={100}
            className="bg-[#f1f1f1] rounded-md p-5"
          />
          <div className="StyledCashflowTextWrapper flex flex-col">
            <span className="font-semibold text-2xl">Monthly Cashflow</span>
            <span>(Total Income - Expenses )</span>
          </div>
        </div>

        <span className="text-primary-10% font-bold text-2xl">€20000</span>
      </div>
    </div>
  )
}

export default CashflowOverview
