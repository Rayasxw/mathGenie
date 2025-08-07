
import type { FC } from "react";
import { useParams } from "react-router-dom";

export const TeacherAttendancePage: FC = () => {
  const { groupId } = useParams();

  return (
    <div>
      <h1>Посещаемость и табель</h1>
      <p>Группа #{groupId} - отметки посещаемости и успеваемости</p>
    </div>
  );
};

