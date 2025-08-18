import { $mainApi } from '@src/shared/lib/requester';
import { useQuery } from '@tanstack/react-query';

export const useGroupQuery = () => {
  return useQuery({
    queryKey: ['group'],
    queryFn: async () => {
      const res = await $mainApi.get('student/group');
      return res.data;
    },
  });
};
