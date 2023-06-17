import {
  MapIcon,
  UsersIcon,
  PencilIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  CalendarIcon,
  School,
} from 'lucide-react';
import { type NavItem } from './sidebar';

export const defaultNavItems: NavItem[] = [
  {
    label: 'Mapa',
    href: '/map',
    icon: <MapIcon className="w-6 h-6" />,
  },
  {
    label: 'Agenda',
    href: '/schedules',
    icon: <CalendarDaysIcon className="w-6 h-6" />,
  },
  {
    label: 'Campus eventos',
    href: '/campus-events',
    icon: <School className="w-6 h-6" />,
  },
  {
    label: 'Eventos',
    href: '/events',
    icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: 'Cursos',
    href: '/courses',
    icon: <BookOpenIcon className="w-6 h-6" />,
  },
  {
    label: 'Disciplinas',
    href: '/subjects',
    icon: <PencilIcon className="w-6 h-6" />,
  },
  {
    label: 'Professores',
    href: '/professors',
    icon: <UsersIcon className="w-6 h-6" />,
  },
];
