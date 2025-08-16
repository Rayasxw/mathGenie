export interface CardProps {
  type: 'month' | 'lesson' | 'homework';
  title: string;
  startDate?: string;
  endDate?: string;
  teacher?: string;
  status?: 'Проверено' | 'На исправление' | 'Отправлено' | 'Просрочен';
  description?: string[];
  lessonDate?: string;
  deadline?: string;
  onClick?: () => void;
}
