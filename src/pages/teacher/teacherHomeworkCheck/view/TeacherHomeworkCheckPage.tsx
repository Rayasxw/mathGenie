import  { type FC } from "react";
import { useParams } from "react-router-dom";

export const TeacherHomeworkCheckPage: FC = () => {
  const { homeworkId } = useParams();

  return (
    <div>
      <h1>Проверка домашнего задания</h1>
      <p>Проверка ДЗ #{homeworkId}</p>
    </div>
  );
};
