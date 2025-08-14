export const paths = {
  home: '/',
  profile: '/profile',
  login: '/login',

  homeworks: '/homeworks',
  homework: '/homeworks/:id',
  schedule: '/schedule',
  syllabus: '/syllabus',
  months: '/months',
  month: '/months/:id',
  tests: '/tests',
  test: '/test/:id',
  timesheet: '/timesheet',

  teacher: {
    lessons: '/teacher/lessons',
    lesson: '/teacher/lessons/:id',
    students: '/teacher/students',
    homeworks: '/teacher/homeworks/',
    homework: '/teacher/homeworks/:groupId',
    tests: '/teacher/tests',
    test: '/teacher/tests/:testId',
  },
};

export const BASE_URL = import.meta.env.BASE_URL;
export const tokens = { access: 'access_token', refresh: 'refresh_token' };
