import { FiSearch } from 'react-icons/fi';
import css from './Form.module.css';
import { Formik, Form as FormikForm, Field } from 'formik';
import { nanoid } from 'nanoid';

export default function Form({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    if (!values.search.trim()) {
      return;
    }
    const newTodo = { id: nanoid(), text: values.search };
    onSubmit(newTodo);

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormikForm className={css.form}>
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <Field
          className={css.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </FormikForm>
    </Formik>
  );
}
