import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import css from './TodoListItem.module.css';
import Text from '../Text/Text';

export default function TodoListItem({ id, text, idx, onDelete, onEdit }) {
  return (
    <div className={css.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{idx}
      </Text>
      <Text>{text}</Text>
      <button
        onClick={() => onDelete(id)}
        className={css.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        onClick={() => onEdit(id)}
        className={css.editButton}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
}
