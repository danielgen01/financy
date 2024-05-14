import React from "react"
import { Dialog as MuiDialog } from "@mui/material"

export const Dialog = () => {
  return (
    <MuiDialog
      className="StyledDialogWrapper absolute  bg-white-default rounded-xl"
      open={true}
    >
      <div className="bg-[#7286FF] flex justify-center p-2 ">
        <span className="text-white-default font-bold">Add new Item</span>
      </div>
      <div className="p-2">
        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-gray-300 p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Price"
            className="border-2 border-gray-300 p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Cashflow"
            className="border-2 border-gray-300 p-2 rounded-lg"
          />
          <div className="flex justify-end">
            <button className="bg-[#7286FF] text-white-default p-2 rounded-lg">
              Add
            </button>
          </div>
        </form>
      </div>
    </MuiDialog>
  )
}
