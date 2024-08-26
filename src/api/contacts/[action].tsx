// pages/api/contacts/[action].js

import { PrismaClient } from '@prisma/client'
import { parse } from 'querystring'
import { stringify } from 'querystring'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { action } = req.query;

  if (action === 'import') {
    try {
      const data = [];
      req.on('data', async (chunk) => {
        await new Promise((resolve) => {
          parse(chunk)
            .on('data', (row) => data.push(row))
            .on('end', resolve);
        });
      });

      req.on('end', async () => {
        await prisma.contact.createMany({
          data: data,
        });
        res.status(200).json({ message: 'Contacts imported successfully' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error importing contacts' });
    }
  } else if (action === 'export') {
    try {
      const contacts = await prisma.contact.findMany();
      const csv = stringify(contacts, { header: true });
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv');
      res.send(csv);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error exporting contacts' });
    }
  } else {
    res.status(400).json({ message: 'Invalid action' });
  }
}