import BackgroundImage from "/public/images/Gutter_Clean_6.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `no-repeat center/cover url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        minHeight: "100% 100%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        backgroundPosition: "top",
      }}
    >
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(0, 162, 212, 0.24)",
            maxWidth: "max-content",
            borderRadius: 1,
            marginTop: { xs: "13px", sm: "none" },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "white",
              margin: 1.2,
              padding: 2,
            }}
          >
            <Typography
              fontWeight={500}
              lineHeight={1}
              fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.5rem" }}
              textAlign="center"
            >
              About Us
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(0, 162, 212, 0.24)",
            maxWidth: "1050px",
            borderRadius: 1,
            marginTop: { xs: "13px", sm: "none" },
            marginBottom: 8,
          }}
        >
          <Paper
            sx={{
              backgroundColor: "white",
              margin: 1.2,
              padding: 6,
            }}
          >
            <div
              style={{
                position: "relative",
                height: "300px",
                marginBottom: 30,
              }}
            >
              <Image
                src="/images/michael_powerwashing_vinal.jpeg"
                alt="main photo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Typography
              fontWeight={500}
              display="block"
              align="justify"
              marginBottom={4.5}
            >
              Hi, I’m Michael Elias, proud owner and operator of HomeShine
              Solutions! With a background as a former U.S. Marine and my
              current role as a teacher at Chelsea Public Schools, I established
              HomeShine with a singular purpose – to offer our community a
              trustworthy home services company delivering top-tier results with
              unmatched value. I look forward to working with you!
              <br />
              <br />I would be delighted to share references from other
              satisfied customers upon request!
            </Typography>

            <Typography
              fontWeight={600}
              sx={{
                marginLeft: {
                  xs: "0px",
                  sm: "125px",
                  md: "270px",
                  lg: "280px",
                  xl: "290px",
                },
              }}
            >
              HomeShine Values:
            </Typography>
            <Typography
              fontWeight={600}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <List
                sx={{
                  listStyle: "decimal",
                  pl: 4,
                  margin: "3px",
                }}
              >
                <ListItem
                  sx={{
                    display: "list-item",
                    margin: "0.1em",
                    padding: ".01px",
                  }}
                >
                  <ListItemText
                    primary="Trust + Integrity"
                    primaryTypographyProps={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    margin: "0.1em",
                    padding: ".01px",
                  }}
                >
                  <ListItemText
                    primary="Craftsmanship"
                    primaryTypographyProps={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    margin: "0.1em",
                    padding: ".01px",
                  }}
                >
                  <ListItemText
                    primary="Customer Education"
                    primaryTypographyProps={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    margin: "0.1em",
                    padding: ".01px",
                  }}
                >
                  <ListItemText
                    primary="Continuous Improvement"
                    primaryTypographyProps={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    margin: "0.1em",
                    padding: ".01px",
                  }}
                >
                  <ListItemText
                    primary="Environmental Responsibility"
                    primaryTypographyProps={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </ListItem>
              </List>
            </Typography>
            <Typography sx={{ marginTop: 3 }}>
              A bit more about us:
              <br />
              <br />
              HomeShine originated from my deep passion for cleaning, trade
              work, and years of expertise in property maintenance and
              renovation. Having been a Massachusetts resident for over 11
              years, I intimately understand the challenges faced by homeowners
              in New England. I am continuously exploring ways to perfect my
              methods for managing these issues, and am dedicated to providing
              you with superior cleaning, repair, and restoration services.
              <br />
              <br />
              Environmental responsibility is a core principle at HomeShine. We
              exclusively use environmentally safe, biodegradable cleaning
              compounds, demonstrating our commitment to preserving the health
              of New England's environment.
              <br />
              <br />
              Integrity is paramount to me, not only in the work I perform but
              also in HomeShine’s customer relationships. I believe in equipping
              you with knowledge about your home, never pushing unnecessary
              services, and ensuring transparency by providing before, during,
              and after photos and videos. Together, we can maintain your home
              in its best condition.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
