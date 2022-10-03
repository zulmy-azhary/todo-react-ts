import { Box, Container, Typography } from "@mui/material";
import { Toggle } from "./";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        right: 0,
        borderBottom: "1px solid",
        borderRadius: 0,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "background.default",
          color: "text.primary",
          py: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Todo App
        </Typography>
        <Toggle />
      </Container>
    </Box>
  );
};

export default Navbar;
