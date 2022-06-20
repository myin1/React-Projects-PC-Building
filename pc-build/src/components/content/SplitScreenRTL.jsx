import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

export default function SplitScrenRTL(props) {
  return (
    <Container>
      <Grid container mt={5} spacing={5}>
        <Grid item xs={12} lg={6} paddingRight={1}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
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
