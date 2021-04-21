import { useState, useEffect } from 'react';

import { getAll, Reminder } from '../../services/remindersService';

export const useWelcome = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAll()
      .then(setReminders)
      .catch(err => console.warn('[getAll] error: ', err))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, reminders };
};
