import { type FC } from "react";
import { useParams } from "react-router-dom";

export const TeacherLessonPage: FC = () => {
  const { groupId } = useParams();

  return (
    <div>
      <h1>Урок и домашнее задание</h1>
      <p>Группа #{groupId} - создание урока и добавление домашнего задания</p>
    </div>
  );
};
