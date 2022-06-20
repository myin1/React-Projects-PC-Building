import { Grid, Box, Stack, IconButton } from "@mui/material";
import {
  Instagram,
  YouTube,
  Reddit,
  Twitter,
  Facebook,
  LinkedIn,
} from "@mui/icons-material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const headerList = ["Company", "About Us", "Builds", "Parts", "PC Type"];
const companyList = [
  "company1",
  "company2",
  "company3",
  "company4",
  "company5",
];
const aboutList = ["about1", "about2", "about3"];
const buildsList = [
  "builds1",
  "builds2",
  "builds3",
  "builds4",
  "builds5",
  "builds6",
  "builds7",
];
const partsList = ["parts1", "parts2", "parts3", "parts4"];
const typesList = ["type1"];

const Item = {
  padding: 3,
  color: "black",
  textDecoration: "none",
};

const Socials = {
  padding: 3,
  textAlign: "left",
};

const Head = {
  padding: 3,
  color: "#FFFFFF",
};

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#E785FF",
        marginTop: 20,
        padding: 5,
      }}
    >
      <Container>
        <div className="socials" style={Socials}>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <YouTube />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Reddit />
          </IconButton>
        </div>
      </Container>
      <Container>
        <Box container sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={5}>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[0]}</h3>
                {companyList.map((companyItem) => (
                  <Link style={Item} to="/">
                    {companyItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[1]}</h3>
                {aboutList.map((aboutItem) => (
                  <Link style={Item} to="/">
                    {aboutItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[2]}</h3>
                {buildsList.map((buildItem) => (
                  <Link style={Item} to="/">
                    {buildItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[3]}</h3>
                {partsList.map((partItem) => (
                  <Link style={Item} to="/">
                    {partItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[4]}</h3>
                {typesList.map((typeItem) => (
                  <Link style={Item} to="/">
                    {typeItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <div className="legal" style={Item}>
          <p>© MSG Inc. 2022 All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
}
