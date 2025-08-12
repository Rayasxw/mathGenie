import {
  HomeworkPage,
  MonthsPage,
  SchedulePage,
  SyllabusPage,
  TestPage,
  TestsPage,
  TimesheetPage,
} from '@src/pages';
import { StudentGuard } from './guards/StudentGuard';
import { paths } from '@src/shared/constants/constants';

export const studentRouter = [
  {
    path: paths.tests,
    element: (
      <StudentGuard>
        <TestsPage />
      </StudentGuard>
    ),
  },
  {
    path: paths.homework,
    element: (
      <StudentGuard>
        <HomeworkPage />
      </StudentGuard>
    ),
  },
  {
    path: paths.syllabus,
    element: (
      <StudentGuard>
        <SyllabusPage />
      </StudentGuard>
    ),
  },
  {
    path: paths.months,
    element: (
      <StudentGuard>
        <MonthsPage />
      </StudentGuard>
    ),
  },
  {
    path: paths.timesheet,
    element: (
      <StudentGuard>
        <TimesheetPage />
      </StudentGuard>
    ),
  },
  {
    path: paths.schedule,
    element: (
      <StudentGuard>
        <SchedulePage />
      </StudentGuard>
    ),
  },
  {
    path: paths.test,
    element: (
      <StudentGuard>
        <TestPage />
      </StudentGuard>
    ),
  },
];
