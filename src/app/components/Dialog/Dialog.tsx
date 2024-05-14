import React from "react"
import {
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  Dialog as MuiDialog,
} from "@mui/material"
import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { StyledSubmitButton } from "./Dialog.styles"

export const Dialog: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data) // Hier können Sie die Formulardaten verarbeiten, z.B. an Ihre Datenbank senden
  }

  return (
    <MuiDialog
      className="StyledDialogWrapper absolute  bg-white-default rounded-xl "
      open={true}
      fullWidth
    >
      <DialogContent sx={{ padding: "0" }}>
        <DialogTitle className="bg-[#7286FF] flex justify-center py-2 w-full h-full">
          <span className="text-white-default font-bold">Add new Item</span>
        </DialogTitle>
        <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="StyledInputFieldsWrapper p-5 flex flex-col gap-5">
            <FormControl>
              <TextField
                {...register("name")} // Hier registrieren Sie das Eingabefeld mit React Hook Form
                type="text"
                variant="filled"
                label="Name"
                className="border-2 border-gray-300 p-2 rounded-lg"
              />
            </FormControl>
            <FormControl>
              <TextField
                {...register("cashflow")} // Hier registrieren Sie das Eingabefeld mit React Hook Form
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
              >
                Add
              </StyledSubmitButton>
            </div>
          </div>
        </form>
      </DialogContent>
    </MuiDialog>
  )
}
