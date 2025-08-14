export const paths = {
  home: '/',
  profile: '/profile',
  login: '/login',

  homework: '/homework',
  schedule: '/schedule',
  syllabus: '/syllabus',
  months: '/months',
  tests: '/tests',
  test: '/test/:id',
  tabel: '/tabel',

  teacher: {
    lessons: '/teacher/lessons',
    lesson: '/teacher/lessons/:id',
    homeworks: '/teacher/homeworks/:groupId',
    homework: '/teacher/homeworks/:groupId',
    tests: '/teacher/tests',
    test: '/teacher/tests/:testId',
  },
};

export const BASE_URL = import.meta.env.BASE_URL;
export const tokens = { access: 'access_token', refresh: 'refresh_token' };
