import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Button.scss";
import { useClient } from "../../contexts/ClientContext.tsx";
import { purchaseCorn } from "../../services/purchaseService.tsx";

export default function ShopButton() {
  const { clientId, cornQuantity } = useClient();
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  const amountCornToBuy = 1;

  const handleClose = (event: React.SyntheticEvent, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const showToast = (message, severity = "success") => {
    setToastMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleBuyCorn = async () => {
    try {
      const response = await purchaseCorn(clientId, amountCornToBuy);
      if (response.success) {
        await cornQuantity();
        showToast(response.message);
      } else {
        showToast(
          `${response.message} Please try again in one minute.`,
          "error"
        );
      }
    } catch (error) {
      console.error("Error purchasing corn:", error);
      showToast("Failed to purchase corn. Please try again.", "error");
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className="shop-button"
        data-custom-button="true"
        onClick={handleBuyCorn}
      >
        {`Click here to buy ${amountCornToBuy} corn`}
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
