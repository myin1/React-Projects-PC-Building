import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <div>
      <Typography variant="h2" textAlign="center" mt={3}>
        Contact Us
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        mt={3}
        paddingBottom={4}
      >
        Have questions? Send us a message!
      </Typography>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid container item spacing={3} xs={12} md={3} lg={4}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container item spacing={3} xs={12} md={3} lg={4}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container item spacing={3} xs={12} md={6} lg={8}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container></Grid>
          <Grid container item spacing={3} xs={12} md={6} lg={8}>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container></Grid>
          <Grid container item spacing={3} xs={1}>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Container>

      <Stack textAlign="center">
        <Typography>
          <strong>Phone:</strong> 123-456-7890
        </Typography>
        <Typography>
          <strong>FAQ:</strong> 987-654-3210
        </Typography>
        <Typography>
          <strong>Email:</strong> PcBuilds@email.com
        </Typography>
      </Stack>
    </div>
  );
}
