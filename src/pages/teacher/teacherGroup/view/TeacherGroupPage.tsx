import  { type FC } from "react";
import { useParams } from "react-router-dom";

export const TeacherGroupPage: FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Группа #{id}</h1>
      <p>Информация о группе и список учеников</p>
    </div>
  );
};

