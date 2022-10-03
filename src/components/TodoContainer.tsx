import { Typography, Box } from "@mui/material";
import { TodoList } from "./";

const TodoContainer: React.FC = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Typography variant="h5" sx={{ m: 0, fontWeight: 500 }}>
        Todo List
      </Typography>
      <TodoList />
    </Box>
  );
};

export default TodoContainer;
