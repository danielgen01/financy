import React from "react"
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
import { StyledSubmitButton } from "./Dialog.styles"

export const Dialog: React.FC<DialogProps> = ({ open }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isOpen, setOpen] = React.useState(open)

  const onSubmit = (data) => {
    console.log(data) // TODO::  die Formulardaten verarbeiten, z.B. an  Datenbank senden
    setOpen(false)
  }

  return (
    <MuiDialog className="StyledDialogWrapper absolute" open={isOpen} fullWidth>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
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
                />
              </FormControl>
              <FormControl>
                <TextField
                  {...register("cashflow", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="text"
                  variant="filled"
                  label="Cashflow"
                  className="border-2 border-gray-300 p-2 rounded-lg"
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
