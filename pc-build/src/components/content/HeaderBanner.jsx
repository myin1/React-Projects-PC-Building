import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function HeaderBanner(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "70vh" }}
      >
        <Grid item sm={3}>
          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.7),
              p: 5,
            }}
          >
            <Typography
              variant="h1"
              textAlign={"center"}
              sx={{ fontWeight: "normal" }}
            >
              {props.title}
            </Typography>
            <Typography variant="h4" textAlign={"center"} sx={{ mb: 2 }}>
              {props.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
