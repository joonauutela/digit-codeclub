import { Alert } from "@mui/material";

export default function GenericError() {
  return (
    <Alert variant="filled" severity="error">
      Error occured. Please try again later
    </Alert>
  );
}
