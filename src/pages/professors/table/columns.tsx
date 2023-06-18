import { cellDates } from '@/common/table/cell-dates';
import { type Professor } from '@/models/professors';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: Array<ColumnDef<Professor>> = [
  // {
  //   accessorKey: 'id',
  //   header: '#',
  // },
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
