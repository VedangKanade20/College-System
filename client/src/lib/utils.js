import {
  IconShieldHalf,
  IconColumns1,
  IconBookUpload,
  IconFileSpreadsheet,
} from "@tabler/icons-react";

export const featureCardDetails = [
  {
    title: "Secure Login",
    description:
      "Multi-factor authentication and role-based access control to keep your data safe.",
    icon: <IconShieldHalf stroke={1} color="#2A238A" />,
    backgroundColor: "#E6F0FF",
  },
  {
    title: "Subject Management",
    description:
      "Organize and manage multiple subjects with ease. Create custom grading schemes.",
    icon: <IconColumns1 stroke={1} color="#2A238A" />,
    backgroundColor: "#E6F7E6",
  },
  {
    title: "Upload Marks",
    description:
      "Quick and easy mark entry with batch upload capabilities and validation checks.",
    icon: <IconBookUpload stroke={1} color="#2A238A" />,
    backgroundColor: "#F0E9FF",
  },
  {
    title: "Excel Import",
    description:
      "Import existing data from Excel spreadsheets with automatic formatting and error detection.",
    icon: <IconFileSpreadsheet stroke={1} color="#C75A2A" />,
    backgroundColor: "#FFF3E6",
  },
];
