import {
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Todo } from "../types";

interface Props {
  data: Todo;
  handler: {
    toggleHandler: (todo: Todo) => void;
    deleteHandler: (id: string) => void;
  };
}

const TodoListItem: React.FC<Props> = ({ data, handler: { toggleHandler, deleteHandler } }) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={() => deleteHandler(data.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton role={undefined} onClick={() => toggleHandler(data)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={data.completed}
            tabIndex={-1}
            inputProps={{ "aria-labelledby": data.id }}
          />
        </ListItemIcon>
        <ListItemText id={data.id} primary={data.title} secondary={data.desc} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
