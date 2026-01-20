import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

export default function TodoList({ array, onDelete, onEdit }) {
  return (
    <Grid>
      {array.map(({ id, text }, idx) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            text={text}
            idx={idx + 1}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
