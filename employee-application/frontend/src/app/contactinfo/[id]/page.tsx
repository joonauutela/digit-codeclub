import { List, ListItem, Paper } from "@mui/material";
import { ContactInformation } from "../../../../interfaces";
import ContactInfoCard from "../components/ContactInfoCard";
import GenericError from "@/app/components/GenericError";
import { API_BASE_URL, DEFAULT_OPTIONS } from "@/app/api";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const response = await fetch(
    `${API_BASE_URL}/contactinfo/${params.id}`,
    DEFAULT_OPTIONS
  );

  if (!response.ok) {
    return <GenericError />;
  }

  const contactInfo: ContactInformation = await response.json();

  return <ContactInfoCard contactInfo={contactInfo} />;
}
