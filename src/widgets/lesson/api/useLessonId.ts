import { $mainApi } from '@src/shared/lib/requester';
import { useQuery } from '@tanstack/react-query';

export const useLessonIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['lessonId', id],
    queryFn: async () => {
      const res = await $mainApi.get(`/lessons/${id}`);
      return res.data;
    },
  });
};
