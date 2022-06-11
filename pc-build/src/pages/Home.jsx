import * as React from "react";
import Background from "../assets/images/Black_Flat_Screen_Computer_Monitor_on_White_Wooden_Desk.jpg";
import { Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SplitScreen from "../components/content/SplitScreen";
import SplitScrenRTL from "../components/content/SplitScreenRTL";
import Avalanche from "../assets/images/Avalanche_Hardline_Liquid_Cooled_Gaming_PC.png";
import Avant from "../assets/images/Avant-Tower-Gaming-PC.png";

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
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Typography variant="h1" color={"white"} textAlign={"center"}>
              Build A PC
            </Typography>
            <Typography
              variant="h4"
              color={"white"}
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
              <Button variant="contained" sx={{ mx: 2 }} size="large">
                PC Builds
              </Button>
              <Button variant="contained" sx={{ mx: 2 }} size="large">
                Components
              </Button>
            </Stack>
          </Grid>
        </Grid>
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
