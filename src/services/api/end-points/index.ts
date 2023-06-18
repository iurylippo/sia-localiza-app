import { createActionTypesMap } from '@/utils';

export const professorsEP = createActionTypesMap('', ['/professors']);

export const coursesEP = createActionTypesMap('', ['/courses']);

export const subjectsEP = createActionTypesMap('', ['/subjects']);

export const eventsEP = createActionTypesMap('/events', ['/events/campus']);

export const authEP = createActionTypesMap('/auth', [
  'register',
  'authenticate',
  'refresh-token',
]);
