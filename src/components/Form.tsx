import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { FormControl, InputLabel, OutlinedInput, Box, Button } from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context";
import { showFormattedDate } from "../helper";
import type { Todo } from "../types";

const Form: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const date = +new Date();
  const [task, setTask] = useState<Todo>({
    id: uuidv4(),
    title: "",
    desc: "",
    completed: false,
    createdAt: showFormattedDate(date),
  } as Todo);

  const inputChange = useMemo(
    () =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setTask({
          ...task,
          [e.target.id]: e.target.value,
          createdAt: showFormattedDate(date),
        });
      },
    [task]
  );

  const submitHandler = (): void => {
    if (!task.title || !task.desc) return;

    setTodos([...todos, task]);
    setTask({
      id: uuidv4(),
      title: "",
      desc: "",
      completed: false,
      createdAt: showFormattedDate(date),
    } as Todo);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        width: "100%",
      }}
    >
      <FormControl variant="outlined">
        <InputLabel htmlFor="title">Title</InputLabel>
        <OutlinedInput
          id="title"
          type="text"
          value={task.title}
          onChange={inputChange}
          label="Title"
          placeholder="Input todo's title"
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="desc">Description</InputLabel>
        <OutlinedInput
          id="desc"
          type="text"
          value={task.desc}
          onChange={inputChange}
          label="Description"
          placeholder="Input todo's description"
        />
      </FormControl>
      <Button
        variant="outlined"
        size="large"
        startIcon={<CreateOutlinedIcon />}
        onClick={submitHandler}
      >
        Create
      </Button>
    </Box>
  );
};

export default Form;
