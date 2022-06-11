import Grid from "@mui/material/Grid";

export default function TierList(props) {
  return (
    <Grid
      item
      xs={props.len}
      lg={12}
      sx={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "550px",
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Grid>
  );
}
