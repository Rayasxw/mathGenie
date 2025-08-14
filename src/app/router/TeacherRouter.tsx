import { TeacherLessonPage } from '@src/pages';
import { TeacherGuard } from './guards/TeacherGuard';
import { paths } from '@src/shared/constants/constants';
import { TeacherLessons } from '@src/pages/teacher/teacherLessons/view/TeacherLessons';
import { TeacherHomeworksPage } from '@src/pages/teacher/homeworks/view/TeacherHomeworksPage';
import { TeacherHomeworkPage } from '@src/pages/teacher/homework/view/TeacherHomeworkPage';

export const teacherRouter = [
  {
    path: paths.teacher.lessons,
    element: (
      <TeacherGuard>
        <TeacherLessons />
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
    path: paths.teacher.homeworks,
    element: (
      <TeacherGuard>
        <TeacherHomeworksPage />
      </TeacherGuard>
    ),
  },
  {
    path: paths.teacher.homework,
    element: (
      <TeacherGuard>
        <TeacherHomeworkPage />
      </TeacherGuard>
    ),
  },
];
