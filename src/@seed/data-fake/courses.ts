import { type Course } from '@/models/course';
import { v4 as uuid } from 'uuid';

export const coursesFake: Course[] = [
  {
    id: uuid(),
    code: '0001',
    name: 'Sistema da informação',
    description: 'Desc',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0002',
    name: 'Administração',
    description: 'Desc',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0003',
    name: 'Engenharia de Software',
    description: 'Desc',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0004',
    name: 'Ciências da Computação',
    description: 'Desc',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    code: '0005',
    name: 'Línguas',
    description: 'Desc',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
