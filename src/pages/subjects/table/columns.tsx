import { cellDates } from '@/common/table/cell-dates';
import { type Subject } from '@/models/subject';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: Array<ColumnDef<Subject>> = [
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
  {
    accessorKey: 'course',
    accessorFn: (s) => s.course.name,
    header: 'Curso',
  },
  ...cellDates,
];
