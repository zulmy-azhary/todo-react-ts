import { Container, createTheme, ThemeProvider, CssBaseline, Box, Typography } from "@mui/material";
import { useMemo, useContext } from "react";
import { ColorModeContext, TodoProvider } from "./context";
import { Navbar, Form, TodoContainer } from "./components";

const App: React.FC = () => {
  const { toggle } = useContext(ColorModeContext);

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                display: "flex",
                minWidth: 320,
                minHeight: "100vh",
              },
            },
          },
        },
        palette: {
          background: {
            default: toggle === "dark" ? "#242424" : "#F4F4F4",
          },
          mode: toggle,
        },
        typography: {
          fontFamily: "Inter",
          fontSize: 16,
          fontWeightRegular: 400,
          fontWeightBold: 700,
        },
      }),
    [toggle]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          minHeight: "100vh",
          justifyContent: "flex-start",
          pt: 20,
          pb: 5
        }}
      >
        <TodoProvider>
          <Form />
          <TodoContainer />
        </TodoProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
