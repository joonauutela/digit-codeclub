import { List, ListItem, Paper } from "@mui/material";
import { ContactInformation } from "../../../../interfaces";
import ContactInfoCard from "../components/ContactInfoCard";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  // TODO: Replace this placeholder with real data from the API
  const contactInfo: ContactInformation = {
    employeeId: "123",
    email: "placeholder@mail.com",
    mobile: "04000000",
    address: "Placeholder",
  };

  return <ContactInfoCard contactInfo={contactInfo} />;
}
