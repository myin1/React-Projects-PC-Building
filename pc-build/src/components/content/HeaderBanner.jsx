import Grid from "@mui/material/Grid";
import { Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button";

export default function HeaderBanner(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
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
        <Grid item sm={3}>
          <Typography variant="h1" color={"white"} textAlign={"center"}>
            {props.title}
          </Typography>
          <Typography
            variant="h4"
            color={"white"}
            textAlign={"center"}
            sx={{ mb: 2 }}
          >
            {props.description}
          </Typography>
          <Stack
            alignItems="center"
            justifyContent={"center"}
            direction={"row"}
          ></Stack>
        </Grid>
      </Grid>
    </div>
  );
}
