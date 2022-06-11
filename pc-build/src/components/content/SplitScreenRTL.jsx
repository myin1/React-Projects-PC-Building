import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

export default function SplitScrenRTL(props) {
  return (
    <Container>
      <Grid container mt={5}>
        <Grid item xs={12} lg={6} sx={{ color: "white" }}>
          <h1>{props.Title}</h1>
          <p>{props.Description}</p>
          <Button variant="contained">Learn More</Button>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "550px",
          }}
        ></Grid>
      </Grid>
    </Container>
  );
}
