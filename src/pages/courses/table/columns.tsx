import { cellDates } from '@/common/table/cell-dates';
import { type Course } from '@/models/course';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: Array<ColumnDef<Course>> = [
  {
    accessorKey: 'code',
    header: 'Código',
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  ...cellDates,
];
