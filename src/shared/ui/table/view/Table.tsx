import { Typography } from '../../typography/view/Typography';
import { TableProps } from '../types/types';
import styles from './Table.module.scss';

export const Table = <T extends object>({
  header,
  rows,
  rowKey,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          {header.map((head) => (
            <th
              key={String(head.key)}
              style={{ width: head.width ? head.width : 'auto' }}
            >
              <Typography variant="h4" weight="medium" color="white">
                {head.title}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.body}>
        {rows.map((row) => (
          <tr className={styles.row} key={String(row[rowKey])}>
            {header.map((head) => (
              <td key={String(head.key)}>{String(row[head.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
