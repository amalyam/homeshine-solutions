import { List, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function TextBox({ text }: { text: string }) {
  return (
    <Container
      sx={{
        m: 1,
        marginTop: 10,
        p: 3,
        display: "flex",
        blockSize: "fit-content",
        backgroundColor: "rgba(83, 208, 254, 0.5)",
      }}
    >
      <Paper
        sx={{ p: 2, blockSize: "fit-content", backgroundColor: "primary" }}
      >
        <Typography
          fontWeight={700}
          color="inherit"
          textAlign="center"
          textTransform={"uppercase"}
        >
          {text}
        </Typography>
      </Paper>
    </Container>
  );
}
