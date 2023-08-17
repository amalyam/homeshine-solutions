import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

/*Name, email, phone, Zip Code, message 

Checkboxes for services you're interested in
Other (please describe below)

How did you hear about HomeShine?

What can we do for you?
*/
export default function ContactForm() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          m: 1,
          border: 1,
          borderRadius: "10px",
        }}
      >
        <div>Contact Form</div>
        <div></div>
        <div>
          <Button variant="contained">Submit</Button>
        </div>
      </Box>
    </Container>
  );
}
