import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function FullCard(props) {
  return (
    <Grid item component={Card} variant="outlined" xs={12} md={6} lg={3}>
      <CardHeader title={props.title} />
      <Box sx={{ height: { md: "500px", lg: "400px" } }}>
        <CardMedia
          component="img"
          objectFit="cover"
          image={props.img}
          alt={props.title}
        />
        <CardContent>
          <Typography>{props.body}</Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Grid>
  );
}
