import { Container, Loader2 } from 'lucide-react';
import { FC } from 'react';
import { useLessonQuery } from '../api/lessonQuery';
import { Card } from '@src/shared/ui';

export const LessonStudent: FC = () => {
  const { data, isLoading } = useLessonQuery();
  const lessons = Array.isArray(data?.data) ? data.data : [];
  return (
    <section>
      <Container>
        {isLoading ? (
          <Loader2 />
        ) : (
          lessons.map((lesson: any) => (
            <Card
              type="lesson"
              title={lesson.title}
              description={lesson.description}
              lessonDate={lesson.homework.dueDate}
            />
          ))
        )}
      </Container>
    </section>
  );
};
