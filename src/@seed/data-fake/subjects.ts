import { type Subject } from '@/models/subject';
import { v4 as uuid } from 'uuid';
import { coursesFake } from './courses';

export const subjectsFake: Subject[] = [
  {
    id: uuid(),
    code: '0001',
    name: 'Arquitetura de sistemas',
    description: 'Desc',
    course_id: coursesFake[0].id,
    course: {
      ...coursesFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0002',
    name: 'Programação I',
    description: 'Desc',
    course_id: coursesFake[0].id,
    course: {
      ...coursesFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0003',
    name: 'Programação II',
    description: 'Desc',
    course_id: coursesFake[0].id,
    course: {
      ...coursesFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0004',
    name: 'Estrutura de Dados',
    description: 'Desc',
    course_id: coursesFake[0].id,
    course: {
      ...coursesFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0005',
    name: 'Banco de dados',
    description: 'Desc',
    course_id: coursesFake[0].id,
    course: {
      ...coursesFake[0],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
