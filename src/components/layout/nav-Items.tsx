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
import { routeNames } from '@/routes/route-names';

export const defaultNavItems: NavItem[] = [
  {
    label: routeNames.PT.map.name,
    href: routeNames.PT.map.url,
    icon: <MapIcon className="w-6 h-6" />,
  },
  {
    label: routeNames.PT.calendar.name,
    href: routeNames.PT.calendar.url,
    icon: <CalendarDaysIcon className="w-6 h-6" />,
  },
  {
    label: routeNames.PT.campusEvents.name,
    href: routeNames.PT.campusEvents.url,
    icon: <School className="w-6 h-6" />,
  },
  {
    label: routeNames.PT.events.name,
    href: routeNames.PT.events.url,
    icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: routeNames.PT.courses.name,
    href: routeNames.PT.courses.url,
    icon: <BookOpenIcon className="w-6 h-6" />,
  },
  {
    label: routeNames.PT.subjects.name,
    href: routeNames.PT.subjects.url,
    icon: <PencilIcon className="w-6 h-6" />,
  },
  {
    label: routeNames.PT.professors.name,
    href: routeNames.PT.professors.url,
    icon: <UsersIcon className="w-6 h-6" />,
  },
];
