import { List, ListItem, Paper } from "@mui/material";
import { ContactInformation } from "../../../../interfaces";

interface ContactInfoProps {
  contactInfo: ContactInformation;
}

export default function ContactInfoCard({ contactInfo }: ContactInfoProps) {
  return (
    <Paper>
      <List>
        <ListItem>
          <b>Employee id:</b> {contactInfo.employeeId}
        </ListItem>
        <ListItem>
          <b>Mobile:</b> {contactInfo.mobile}
        </ListItem>
        <ListItem>
          <b>Email:</b> {contactInfo.email}
        </ListItem>
        <ListItem>
          <b>Address:</b> {contactInfo.address}
        </ListItem>
      </List>
    </Paper>
  );
}
