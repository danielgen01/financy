import Image from "next/image"
import React from "react"

export interface CashflowOverviewProps {
  netCashflowAmount: number
}

const CashflowOverview: React.FC<CashflowOverviewProps> = ({
  netCashflowAmount,
}) => {
  return (
    <div className="StyledCashflowOverviewWrapper bg-white-default w-full rounded-md ">
      <div className="StyledCashflowContentWrapper flex justify-between p-8 items-center h-full w-full">
        <div className="StyledImagePlusTextWrapper flex items-center gap-5">
          <Image
            src="/cashflow.png"
            alt="Cashflow Overview"
            width={75}
            height={75}
            className="bg-[#f1f1f1] rounded-md p-5"
          />
          <div className="StyledCashflowTextWrapper flex flex-col">
            <span className="font-semibold text-2xl">Monthly Cashflow</span>
            <span>(Total Income - Expenses )</span>
          </div>
        </div>

        <span className="text-primary-10% font-bold text-2xl">
          €{netCashflowAmount}
        </span>
      </div>
    </div>
  )
}

export default CashflowOverview
