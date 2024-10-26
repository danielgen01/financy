import React, { useState } from "react";
import {
  Checkbox,
  DialogContent,
  DialogTitle,
  FormControlLabel,
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
  buttonActionName,
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

    setOpenDialog(!openDialog);
  };

  return (
    <MuiDialog open={openDialog} fullWidth onClose={onClose}>
      <DialogContent className={styles.StyledDialogContent}>
        <DialogTitle className={styles.StyledDialogTitle}>
          {dialogTitle}
        </DialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.StyledFormWrapper}
        >
          <TextField
            {...register("name", {
              required: true,
              validate: (value) => typeof value === "string",
            })}
            className={styles.StyledTextField}
            type="text"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            required
            label="Name"
            defaultValue={dialogContent?.name && dialogContent.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            {...register("amount", {
              required: true,
              valueAsNumber: true,
              validate: (value) => typeof value === "number",
            })}
            type="text"
            variant="filled"
            required
            InputLabelProps={{ shrink: true }}
            label="Amount"
            className={styles.StyledTextField}
            defaultValue={
              dialogContent?.cashflowAmount && dialogContent.cashflowAmount
            }
            onChange={(e) => {
              const formattedAmount = formatToTwoDecimalPlaces(e.target.value);
              setAmount(formattedAmount);
            }}
          />
          {/* {buttonActionName === "Add Income" && (
            <FormControlLabel
              label="This income is earned passively*"
              labelPlacement="end"
              className={styles.StyledFormControlCheckboxWrapper}
              control={<Checkbox />}
            />
          )} */}
          <div className={styles.StyledSubmitButtonWrapper}>
            <button
              className={styles.StyledAddButton}
              type="submit"
              onSubmit={onSubmit}
            >
              {dialogTitle.includes("Add") ? "Add" : "Edit"}
            </button>
          </div>
        </form>
      </DialogContent>
    </MuiDialog>
  );
};
