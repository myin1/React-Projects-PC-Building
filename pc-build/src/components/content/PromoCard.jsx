import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function PromoCard(props) {
  return (
    <Card raised="true">
      <CardHeader title={props.title} sx={{ textAlign: "center" }} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={props.image}
          alt=""
          style={{
            height: "250px",
          }}
        />
        <Typography>{props.body}</Typography>
        <Button variant="contained">Shop Now</Button>
      </CardContent>
    </Card>
  );
}
