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

export default function ContactCard(props) {
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
        <Typography>{props.phone}</Typography>
        <Typography>{props.email}</Typography>
        <Typography>{props.faq}</Typography>
      </CardContent>
    </Card>
  );
}
