import { ListItemProps } from "./ListItem.types";
import { IconButton, Tooltip } from "@mui/material";
import styles from "./ListItem.styles.module.css";
import { useState } from "react";
import { Dialog } from "../Dialog/Dialog";

export const EditSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33344 2.66666H4.53344C3.41333 2.66666 2.85328 2.66666 2.42545 2.88464C2.04913 3.07639 1.74317 3.38235 1.55142 3.75867C1.33344 4.1865 1.33344 4.74655 1.33344 5.86666V11.4667C1.33344 12.5868 1.33344 13.1468 1.55142 13.5746C1.74317 13.951 2.04913 14.2569 2.42545 14.4487C2.85328 14.6667 3.41333 14.6667 4.53343 14.6667H10.1334C11.2535 14.6667 11.8136 14.6667 12.2414 14.4487C12.6177 14.2569 12.9237 13.951 13.1154 13.5746C13.3334 13.1468 13.3334 12.5868 13.3334 11.4667V8.66666M5.33342 10.6667H6.44978C6.7759 10.6667 6.93896 10.6667 7.09241 10.6298C7.22846 10.5972 7.35852 10.5433 7.47782 10.4702C7.61237 10.3877 7.72767 10.2724 7.95827 10.0418L14.3334 3.66666C14.8857 3.11437 14.8857 2.21894 14.3334 1.66666C13.7812 1.11437 12.8857 1.11437 12.3334 1.66665L5.95826 8.04182C5.72766 8.27242 5.61235 8.38772 5.5299 8.52228C5.45679 8.64157 5.40292 8.77163 5.37026 8.90768C5.33342 9.06113 5.33342 9.22419 5.33342 9.55031V10.6667Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DeleteSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00003 1H9.00003M1.00003 3H13M11.6667 3L11.1992 10.0129C11.129 11.065 11.094 11.5911 10.8667 11.99C10.6666 12.3412 10.3649 12.6235 10.0011 12.7998C9.58801 13 9.06076 13 8.00626 13H5.9938C4.9393 13 4.41205 13 3.99892 12.7998C3.6352 12.6235 3.33342 12.3412 3.13335 11.99C2.9061 11.5911 2.87103 11.065 2.80089 10.0129L2.33336 3M5.6667 6V9.33333M8.33336 6V9.33333"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ListItem: React.FC<ListItemProps> = ({
  name,
  cashflowAmount,
  onRemove,
  id,
  onEdit,
  isFourColumns,
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const dialogContentState = {
    name: name,
    cashflowAmount: cashflowAmount,
  };

  return (
    <div className={styles.StyledListItemWrapper}>
      <Tooltip
        title={name}
        className={styles.StyledNameWrapper}
        style={{ cursor: "default" }}
      >
        <span>{name}</span>
      </Tooltip>

      <div className={styles.StyledPriceWrapper}>
        <div
          className={
            isFourColumns
              ? styles.StyledCashflowAmountFourColumns
              : styles.StyledCashflowAmount
          }
        >
          € {cashflowAmount}
        </div>
      </div>

      <div className={styles.StyledActionButtonsWrapper}>
        <IconButton
          className={styles.StyledEditButtonWrapper}
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <EditSvg />
        </IconButton>
        <IconButton
          className={styles.StyledDeleteButton}
          onClick={() => onRemove && onRemove(id)}
        >
          <DeleteSvg />
        </IconButton>
      </div>
      {openDialog && (
        <Dialog
          open={openDialog}
          buttonActionName="" //TODO check why this is required
          dialogTitle="Edit item"
          onClose={() => setOpenDialog(!openDialog)}
          dialogContent={dialogContentState}
          editCardItem={(updatedName: string, updatedCashflowAmount: number) =>
            onEdit && onEdit(id, updatedName, updatedCashflowAmount)
          }
        ></Dialog>
      )}
    </div>
  );
};
