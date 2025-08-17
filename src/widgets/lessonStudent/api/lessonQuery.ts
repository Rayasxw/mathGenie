import { $mainApi } from '@src/shared/lib/requester';
import { useQuery } from '@tanstack/react-query';

export const useLessonQuery = () => {
  return useQuery({
    queryKey: ['lesson'],
    queryFn: async () => {
      const res = await $mainApi.get('student/lessons');
      return res.data;
    },
  });
};
