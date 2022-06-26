import * as React from "react";
import {
  Typography,
  Stack,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SplitScreen from "../components/content/SplitScreen";
import SplitScrenRTL from "../components/content/SplitScreenRTL";
import { Link } from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";
import ConstructionIcon from "@mui/icons-material/Construction";
import SpeedIcon from "@mui/icons-material/Speed";
import { alpha } from "@mui/material/styles";
import { components, types } from "../components/Navbar";

import Background from "../assets/images/Black_Flat_Screen_Computer_Monitor_on_White_Wooden_Desk.jpg";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import Avant from "../assets/images/Avant-Tower-Gaming-PC.png";

// Color Pallete choices: #AFE3C0 (turqiouse green), #3F3F37 (black olive), #EEE5E9 (lavendar)
// #92DCE5 (middle blue)

function TripleIcon() {
  return (
    <Container sx={{ textAlign: "center", pb: 5 }}>
      <Typography variant="h4" p={5}>
        A Simpler Way of Building Your New PC
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <BoltIcon fontSize="large" />
          <Typography variant="h6">Powerful Builds</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <SpeedIcon fontSize="large" />
          <Typography variant="h6">Fast Service</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ConstructionIcon fontSize="large" />
          <Typography variant="h6">Guaranteed Quality</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

function NavCards(props) {
  return (
    <Container>
      <Typography variant="h4" py={5} sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>
      <Grid container spacing={3}>
        {props.content.map((content) => (
          <Grid item xs={12} lg={4}>
            <Card raised="true">
              <CardHeader title={content} />
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        size="large"
        sx={{ display: "flex", mx: "auto", my: 5 }}
      >
        View All
      </Button>
    </Container>
  );
}

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: "100vh",
          }}
        >
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.common.white, 0.8),
                p: 5,
              }}
            >
              <Typography
                variant="h1"
                textAlign={"center"}
                sx={{ fontWeight: "normal" }}
              >
                Build A PC
              </Typography>
              <Typography variant="h4" textAlign={"center"} sx={{ mb: 2 }}>
                Find your Perfect PC Today
              </Typography>
              <Stack
                alignItems="center"
                justifyContent={"center"}
                direction={"row"}
                spacing={4}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="PCBuilds"
                  size="large"
                >
                  PC Builds
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="Components"
                  size="large"
                >
                  Components
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: "#AFE3C0" }}>
        <TripleIcon />
      </div>
      <div>
        <SplitScreen
          image={Avalanche}
          title="Quality Service"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
                convallis nibh tempus dignissim gravida. Nam interdum est vitae
                accumsan feugiat. Suspendisse quis nisi neque. Praesent
                pellentesque viverra maximus."
        />
      </div>
      <div style={{ backgroundColor: "#AFE3C0", padding: 1 }}>
        <NavCards
          title="Learn What's Inside your Machine"
          content={components}
        />
      </div>
      <div style={{ backgroundColor: "white", padding: 1 }}>
        <SplitScrenRTL
          image={Avant}
          title="High Performance"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                felis quam, fringilla a lorem ut, tincidunt commodo elit. Ut
                convallis nibh tempus dignissim gravida. Nam interdum est vitae
                accumsan feugiat. Suspendisse quis nisi neque. Praesent
                pellentesque viverra maximus."
        />
      </div>
      <div style={{ backgroundColor: "#AFE3C0", padding: 1 }}>
        <NavCards title="Find the Perfect PC for your Needs" content={types} />
      </div>
    </div>
  );
}
