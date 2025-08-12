import {
  TeacherAttendancePage,
  TeacherGroupPage,
  TeacherGroupsPage,
  TeacherHomeworkCheckPage,
  TeacherLessonPage,
} from '@src/pages';
import { TeacherGuard } from './guards/TeacherGuard';
import { paths } from '@src/shared/constants/constants';

export const teacherRouter = [
  {
    path: paths.teacher.groups,
    element: (
      <TeacherGuard>
        <TeacherGroupsPage />
      </TeacherGuard>
    ),
  },
  {
    path: paths.teacher.group,
    element: (
      <TeacherGuard>
        <TeacherGroupPage />
      </TeacherGuard>
    ),
  },
  {
    path: paths.teacher.attendance,
    element: (
      <TeacherGuard>
        <TeacherAttendancePage />
      </TeacherGuard>
    ),
  },
  {
    path: paths.teacher.lesson,
    element: (
      <TeacherGuard>
        <TeacherLessonPage />
      </TeacherGuard>
    ),
  },
  {
    path: paths.teacher.homeworkCheck,
    element: (
      <TeacherGuard>
        <TeacherHomeworkCheckPage />
      </TeacherGuard>
    ),
  },
];
