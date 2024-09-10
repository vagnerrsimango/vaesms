// src/api/contacts/action.tsx

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  sector: string | null;  // Change this depending on how you store sector data
};

// Fetch Contacts including their sector relationship
export async function getContacts() {
  const contacts = await prisma.contact.findMany({
    include: {
      sector: true, // Assuming 'sector' is a relation (from `sectorId`)
    },
  });

  // Map database result to match the Contact type used in the front-end
  const transformedContacts = contacts.map((contact) => ({
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    sector: contact.sector?.name || "No Sector",  // Assuming sector has a name field
  }));

  return transformedContacts;
}

export async function addContacts(contactsData: any[]) {
  const contacts = await prisma.contact.createMany({
    data: contactsData,
    skipDuplicates: true, // Avoid duplicate records
  });
  return contacts;
}
