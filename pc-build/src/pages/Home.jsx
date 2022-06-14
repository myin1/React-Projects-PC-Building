import * as React from "react";
import Background from "../assets/images/Black_Flat_Screen_Computer_Monitor_on_White_Wooden_Desk.jpg";
import { Typography, Stack, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SplitScreen from "../components/content/SplitScreen";
import SplitScrenRTL from "../components/content/SplitScreenRTL";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import Avant from "../assets/images/Avant-Tower-Gaming-PC.png";
import { Link } from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";
import ConstructionIcon from "@mui/icons-material/Construction";
import SpeedIcon from "@mui/icons-material/Speed";
import { styled, alpha } from "@mui/material/styles";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.5),
            minHeight: "100vh",
          }}
        >
          <Grid item xs={3}>
            <Typography variant="h1" color={"#1565c0"} textAlign={"center"}>
              Build A PC
            </Typography>
            <Typography
              variant="h4"
              color={"#1565c0"}
              textAlign={"center"}
              sx={{ mb: 2 }}
            >
              Find your Perfect PC Today
            </Typography>
            <Stack
              alignItems="center"
              justifyContent={"center"}
              direction={"row"}
            >
              <Button
                variant="contained"
                component={Link}
                to="PCBuilds"
                sx={{ mx: 2 }}
                size="large"
              >
                PC Builds
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="Components"
                sx={{ mx: 2 }}
                size="large"
              >
                Components
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: "#bbdefb" }}>
        <Container sx={{ textAlign: "center", pb: 15 }}>
          <Typography variant="h4" p={5}>
            A Simpler Way of Building Your New PC
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4}>
              <BoltIcon fontSize="large" />
              <Typography variant="h6">Powerful Builds</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <SpeedIcon fontSize="large" />
              <Typography variant="h6">Fast Service</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <ConstructionIcon fontSize="large" />
              <Typography variant="h6">Guaranteed Quality</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          </Grid>
        </Container>
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
      <div style={{ backgroundColor: "gray" }}>
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
    </div>
  );
}
