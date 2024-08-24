import React, { useState } from "react";
import {
  Button,
  ClickAwayListener,
  DialogContent,
  DialogTitle,
  FormControl,
  Dialog as MuiDialog,
} from "@mui/material";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CustomDialogProps, DialogFormData } from "./Dialog.types";
import styles from "./Dialog.styles.module.css";
import { formatToTwoDecimalPlaces } from "./SubComponents";

export const Dialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  addCardItem,
  editCardItem,
  dialogTitle,
  dialogContent,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DialogFormData>();

  const [openDialog, setOpenDialog] = React.useState<boolean>(open);
  const [name, setName] = useState<string>(dialogContent?.name || "");
  const [amount, setAmount] = useState<number>(
    dialogContent?.cashflowAmount || 0,
  );

  const onSubmit = () => {
    if (addCardItem) {
      addCardItem(name, amount);
    }
    if (editCardItem) {
      editCardItem(name, amount);
    }
  };

  console.log(open);

  return (
    <MuiDialog
      className="StyledDialogWrapper"
      open={openDialog}
      fullWidth
      onClose={onClose}
    >
      <DialogContent sx={{ padding: "0" }}>
        <DialogTitle className={styles.StyledDialogTitle}>
          {dialogTitle}
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
                defaultValue={dialogContent?.name && dialogContent.name}
                className={styles.StyledTextField}
                onChange={(e) => {
                  setName(e.target.value);
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
                defaultValue={
                  dialogContent?.cashflowAmount && dialogContent.cashflowAmount
                }
                onChange={(e) => {
                  const formattedAmount = formatToTwoDecimalPlaces(
                    e.target.value,
                  );
                  setAmount(formattedAmount);
                }}
              />
            </FormControl>
            <div className="flex justify-end">
              <Button
                className={styles.StyledAddButton}
                type="submit"
                onSubmit={onSubmit}
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </MuiDialog>
  );
};
