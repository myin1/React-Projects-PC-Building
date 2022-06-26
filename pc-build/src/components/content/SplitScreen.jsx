import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

export default function SplitScreen(props) {
  return (
    <Container>
      <Grid container my={5} spacing={5}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: 450,
          }}
        ></Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" py={2}>
            {props.title}
          </Typography>
          <Typography>{props.description}</Typography>
          <Button variant="contained" sx={{ my: 3 }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
