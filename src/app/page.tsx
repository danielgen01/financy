"use server"

import React from "react"

import Homepage from "./pageTemplates/homepage/Homepage"

// or Dynamic metadata
export async function generateMetadata({}) {
  return {
    title: "Financy - Get in control of your cashflow",
    description:
      "Manage your finances with financy easily and finally get in control of your cashflow",
    robots: "noindex, nofollow",
    keywords: "financy, finances, cashflow, budgeting",
  }
}

const page = () => {
  return <Homepage />
}

export default page
