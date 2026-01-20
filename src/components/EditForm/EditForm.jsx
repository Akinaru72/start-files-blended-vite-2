import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import css from './EditForm.module.css';

export default function EditForm({ defaultValue, cancelUpdate, updateTodo }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.text.value;
    const id = defaultValue.id;
    updateTodo(id, value);
    console.log(id, value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={cancelUpdate} className={css.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue.text}
        autoFocus
      />
    </form>
  );
}
