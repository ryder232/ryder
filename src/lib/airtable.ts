import Airtable from 'airtable';

const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;


if (!apiKey || !baseId) {
  throw new Error('Airtable API key or Base ID is not configured in .env');
}

export const base = new Airtable({ apiKey }).base(baseId);
