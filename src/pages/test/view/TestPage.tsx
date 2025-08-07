
import type { FC } from "react";
import { useParams } from "react-router-dom";

export const TestPage: FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Тест #{id}</h1>
      <p>Прохождение теста</p>
    </div>
  );
};

