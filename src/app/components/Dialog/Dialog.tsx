import React, { useState } from "react"
import {
  ClickAwayListener,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  Dialog as MuiDialog,
} from "@mui/material"
import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { ListItemProps } from "../BigCard/ListItem.types"
import { StyledSubmitButton } from "./Dialog.styles"
import { CustomDialogProps, DialogFormData } from "./Dialog.types"
import { BigCardProps } from "../BigCard/BigCard.types"

export const Dialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  addCardItem,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DialogFormData>()

  const [openDialog, setOpenDialog] = React.useState<boolean>(open)
  const [name, setName] = useState<string>("")
  const [amount, setAmount] = useState<number>(0)

  const onSubmit = () => {
    addCardItem(name, amount)
    if (onClose) {
      onClose() // Close the dialog
    }
  }

  return (
    <MuiDialog
      className="StyledDialogWrapper absolute"
      open={openDialog}
      fullWidth
    >
      <ClickAwayListener onClickAway={() => onClose && onClose()}>
        <DialogContent sx={{ padding: "0" }}>
          <DialogTitle className="bg-[#7286FF] flex justify-center py-2 w-full h-full">
            <span className="text-white-default font-bold">Add new Item</span>
          </DialogTitle>
          <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="StyledInputFieldsWrapper p-5 flex flex-col gap-5">
              <FormControl>
                <TextField
                  {...register("name", {
                    required: true,
                    validate: (value) => typeof value === "string",
                  })}
                  type="text"
                  variant="filled"
                  label="Name"
                  className="border-2 border-gray-300 p-2 rounded-lg"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  {...register("amount", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="text"
                  variant="filled"
                  label="Amount"
                  className="border-2 border-gray-300 p-2 rounded-lg"
                  onChange={(e) => {
                    setAmount(Number(e.target.value))
                  }}
                />
              </FormControl>
              <div className="flex justify-end">
                <StyledSubmitButton
                  type="submit"
                  className="bg-[#7286FF] text-white-default p-2 rounded-lg"
                  onSubmit={onSubmit}
                >
                  Add
                </StyledSubmitButton>
              </div>
            </div>
          </form>
        </DialogContent>
      </ClickAwayListener>
    </MuiDialog>
  )
}
