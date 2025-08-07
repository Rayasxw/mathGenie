export const paths = {
  home: "/",
  profile: "/profile",
  login: "/login",

  homework: "/homework",
  schedule: "/schedule",
  syllabus: "/syllabus",
  months: "/months",
  tests: "/tests",
  test: "/test/:id",
  timesheet: "/timesheet",

  teacher: {
    groups: "/teacher/groups",
    group: "/teacher/group/:id",
    attendance: "/teacher/attendance/:groupId",
    lesson: "/teacher/lesson/:groupId",
    homeworkCheck: "/teacher/homework-check/:homeworkId",
  },
};
