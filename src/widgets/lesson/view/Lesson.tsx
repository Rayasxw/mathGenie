import { Container, LessonForm } from '@src/shared/ui';
import { useLessonQuery } from '@src/widgets/lessonStudent/api/lessonQuery';
import { FC } from 'react';

export const Lesson: FC = () => {
  const { data } = useLessonQuery();
  return (
    <Container>
      <LessonForm
        title={data?.title || 'Sample Lesson'}
        description={
          data?.description || ['This is a sample lesson description.']
        }
        videoUrl="https://www.example.com/video"
        materials="Sample materials"
      />
    </Container>
  );
};
