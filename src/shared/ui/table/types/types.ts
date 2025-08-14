export interface Column<T extends object> {
  key: keyof T; // теперь это ключ из T
  title: string;
  width?: number | string; // px, %, auto
}

export interface TableProps<T extends object> {
  header: Column<T>[];
  rows: T[];
  rowKey: keyof T;
}
