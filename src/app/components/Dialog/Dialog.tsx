import React, { useState } from "react"
import {
  Button,
  ClickAwayListener,
  DialogContent,
  DialogTitle,
  FormControl,
  Dialog as MuiDialog,
} from "@mui/material"
import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { CustomDialogProps, DialogFormData } from "./Dialog.types"
import styles from "./Dialog.styles.module.css"
import { formatToTwoDecimalPlaces } from "./SubComponents"

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
    <MuiDialog className="StyledDialogWrapper" open={openDialog} fullWidth>
      <ClickAwayListener onClickAway={() => onClose && onClose()}>
        <DialogContent sx={{ padding: "0" }}>
          <DialogTitle className={styles.StyledDialogTitle}>
            Add new Item
          </DialogTitle>
          <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.StyledInputFieldsWrapper}>
              <FormControl>
                <TextField
                  {...register("name", {
                    required: true,
                    validate: (value) => typeof value === "string",
                  })}
                  type="text"
                  variant="filled"
                  label="Name"
                  className={styles.StyledTextField}
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
                  className={styles.StyledTextField}
                  onChange={(e) => {
                    const formattedAmount = formatToTwoDecimalPlaces(
                      e.target.value
                    )
                    setAmount(formattedAmount)
                  }}
                />
              </FormControl>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#7286FF] text-white-default p-2 rounded-lg"
                  onSubmit={onSubmit}
                >
                  Add
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </ClickAwayListener>
    </MuiDialog>
  )
}
