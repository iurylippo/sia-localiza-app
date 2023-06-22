import { v4 as uuid } from 'uuid';
import { professorsFake } from './professors';
import { subjectsFake } from './subjects';
import { type CampusEvent } from '@/models/campus-event';
import { eventsFake } from './events';

export const campusEventsFake: CampusEvent[] = [
  {
    id: uuid(),
    class: 'lab01',
    description: 'Aula na sala lab01',
    event_id: uuid(),
    event: {
      ...eventsFake[0],
    },
    subject_id: subjectsFake[0].id,
    professor_id: professorsFake[0].id,
    professor: {
      ...professorsFake[0],
    },
    subject: {
      ...subjectsFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    class: 'lab04',
    description: 'Aula na sala lab04',
    event_id: uuid(),
    event: {
      ...eventsFake[0],
    },
    subject_id: subjectsFake[0].id,
    professor_id: professorsFake[0].id,
    professor: {
      ...professorsFake[0],
    },
    subject: {
      ...subjectsFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    class: 'lab07',
    description: 'Aula na sala lab07',
    event_id: uuid(),
    event: {
      ...eventsFake[0],
    },
    subject_id: subjectsFake[0].id,
    professor_id: professorsFake[0].id,
    professor: {
      ...professorsFake[0],
    },
    subject: {
      ...subjectsFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
