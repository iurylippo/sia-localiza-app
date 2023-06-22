import { type Event } from '@/models/events';
import { v4 as uuid } from 'uuid';

export const eventsFake: Event[] = [
  {
    id: uuid(),
    summary: 'Aula',
    start_at: '18:00:00',
    end_at: '20:00:00',
    day_period: 'noite',
    day_week: 'segunda',
    description: 'Desc',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
