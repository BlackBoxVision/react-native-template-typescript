import { fetchJson } from './fetch';

export type Reminder = {
  id: number;
  text: string;
};

export const getAll = async (): Promise<Reminder[]> =>
  await fetchJson('/api/reminders');
