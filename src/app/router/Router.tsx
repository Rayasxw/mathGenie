import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  ProfilePage,
  LoginPage,
  TestsPage,
  TestPage,
  HomeworkPage,
  SchedulePage,
  SyllabusPage,
  MonthsPage,
  TimesheetPage,
  TeacherGroupsPage,
  TeacherGroupPage,
  TeacherAttendancePage,
  TeacherLessonPage,
  TeacherHomeworkCheckPage,
} from "../../pages";
import { paths } from "../../shared/constants/constants";

export const router = createBrowserRouter([

  {
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.profile,
    element: <ProfilePage />,
  },
  {
    path: paths.login,
    element: <LoginPage />,
  },

  {
    path: paths.tests,
    element: <TestsPage />,
  },
  {
    path: paths.test,
    element: <TestPage />,
  },
  {
    path: paths.homework,
    element: <HomeworkPage />,
  },
  {
    path: paths.schedule,
    element: <SchedulePage />,
  },
  {
    path: paths.syllabus,
    element: <SyllabusPage />,
  },
  {
    path: paths.months,
    element: <MonthsPage />,
  },
  {
    path: paths.timesheet,
    element: <TimesheetPage />,
  },

  
  {
    path: paths.teacher.groups,
    element: <TeacherGroupsPage />,
  },
  {
    path: paths.teacher.group,
    element: <TeacherGroupPage />,
  },
  {
    path: paths.teacher.attendance,
    element: <TeacherAttendancePage />,
  },
  {
    path: paths.teacher.lesson,
    element: <TeacherLessonPage />,
  },
  {
    path: paths.teacher.homeworkCheck,
    element: <TeacherHomeworkCheckPage />,
  },
]);
