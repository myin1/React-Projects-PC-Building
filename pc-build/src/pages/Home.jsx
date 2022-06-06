import Navbar from "../components/Navbar";
import Background from "../assets/images/Black_Flat_Screen_Computer_Monitor_on_White_Wooden_Desk.jpg";
import { Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Typography variant="h1" color={"white"}>
              Build A PC
            </Typography>
            <Typography variant="h4" color={"white"}>
              Find your Perfect PC Today
            </Typography>
            <Stack
              alignItems="center"
              justifyContent={"center"}
              direction={"row"}
            >
              <Button variant="contained" sx={{ mx: 2 }}>
                PC Builds
              </Button>
              <Button variant="contained" sx={{ mx: 2 }}>
                Components
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <div>
        <Container>
          <Grid container mt={5}>
            <Grid item xs={6}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png"
                alt=""
                style={{ height: "550px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <h1>Quality Service</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
                convallis nibh tempus dignissim gravida. Nam interdum est vitae
                accumsan feugiat. Suspendisse quis nisi neque. Praesent
                pellentesque viverra maximus.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: "gray" }}>
        <Container>
          <Grid container mt={5}>
            <Grid item xs={6} sx={{ color: "white" }}>
              <h1>High Performance</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
                convallis nibh tempus dignissim gravida. Nam interdum est vitae
                accumsan feugiat. Suspendisse quis nisi neque. Praesent
                pellentesque viverra maximus.
              </p>
            </Grid>
            <Grid item xs={6}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Avant-Tower-Gaming-PC.png"
                alt=""
                style={{ height: "90%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
