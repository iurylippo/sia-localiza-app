import { createBrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Layout } from '@/pages/layout';
import ErrorPage from '@/pages/error';
// import { Login } from '@/pages/login';
import { Main } from '@/pages/main';
import { routeNames } from './route-names';
import Map from '@/pages/map';
// import Professors from '@/pages/professors';
// import Subjects from '@/pages/subjects';
// import Calendar from '@/pages/calendar';
// import Events from '@/pages/events';
// import CampusEvents from '@/pages/campus-events';
// import Courses from '@/pages/courses';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Router isPrivate={false} page={Main} />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: routeNames.PT.login.url,
  //   element: <Router isPrivate={false} page={Login} />,
  // },
  {
    element: <Layout />,
    children: [
      {
        path: routeNames.PT.map.url,
        element: <Router page={Map} />,
      },
      // {
      //   path: routeNames.PT.professors.url,
      //   element: <Router page={Professors} />,
      // },
      // {
      //   path: routeNames.PT.courses.url,
      //   element: <Router page={Courses} />,
      // },
      // {
      //   path: routeNames.PT.subjects.url,
      //   element: <Router page={Subjects} />,
      // },
      // {
      //   path: routeNames.PT.calendar.url,
      //   element: <Router page={Calendar} />,
      // },
      // {
      //   path: routeNames.PT.events.url,
      //   element: <Router page={Events} />,
      // },
      // {
      //   path: routeNames.PT.campusEvents.url,
      //   element: <Router page={CampusEvents} />,
      // },
    ],
  },
]);
