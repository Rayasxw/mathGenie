import React from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "../../../shared/constants/constants";
import "./Navigation.scss";

interface NavigationProps {
  userRole?: "student" | "teacher";
}

const Navigation: React.FC<NavigationProps> = ({ userRole = "student" }) => {
  const location = useLocation();

  const studentRoutes = [
    { path: paths.home, label: "Главная" },
    { path: paths.profile, label: "Профиль" },
    { path: paths.tests, label: "Тесты" },
    { path: paths.homework, label: "Домашние задания" },
    { path: paths.schedule, label: "Расписание" },
    { path: paths.syllabus, label: "Учебный план" },
    { path: paths.months, label: "Месяцы" },
    { path: paths.timesheet, label: "Табель" },
  ];

  const teacherRoutes = [
    { path: paths.home, label: "Главная" },
    { path: paths.profile, label: "Профиль" },
    { path: paths.teacher.groups, label: "Список групп" },
  ];

  const routes = userRole === "teacher" ? teacherRoutes : studentRoutes;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {routes.map((route) => (
          <li key={route.path} className="navigation__item">
            <Link
              to={route.path}
              className={`navigation__link ${
                location.pathname === route.path
                  ? "navigation__link--active"
                  : ""
              }`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
