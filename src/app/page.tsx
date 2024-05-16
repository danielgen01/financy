"use client"
import { listItemsMock } from "@/listItems.mock"
import { BigCard } from "./components/BigCard/BigCard"
import Card from "./components/Card/Card"
import { FilterMenu } from "./components/FilterMenu/FilterMenu"
import { headlineItemsMockCard } from "@/headlineItems.mock"
import { getFirebaseData } from "../app/utils/firebaseConfig"
import React, { useState } from "react"
import Homepage from "./homepage/page"

export default function HomePageAKADashboardPage() {
  return <Homepage />
}
