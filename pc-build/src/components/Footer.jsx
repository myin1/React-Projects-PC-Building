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
import { compTypes } from "../pages/ComputerTypes";
import { partList } from "../pages/Parts";

const headerList = ["Company", "About Us", "PC Types", "Parts", "Builds"];
const companyList = [
  "Homepage",
  "company2",
  "company3",
  "company4",
  "company5",
];
const aboutList = ["Services", "about2", "about3"];
const typesList = compTypes;
const partsList = partList;
const buildsList = ["PC Builds"];

const Item = {
  padding: 3,
  color: "black",
  fontSize: 12,
  textDecoration: "none",
};

const Socials = {
  padding: 3,
  textAlign: "left",
};

const Head = {
  padding: 3,
  textSize: 15,
  color: "#FFFFFF",
};

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#ACACAC",
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
                  <Link style={Item} to="/Service">
                    {aboutItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[2]}</h3>
                {typesList.map((typesItem) => (
                  <Link style={Item} to={`/ComputerTypes/${typesItem}`}>
                    {typesItem}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[3]}</h3>
                {partsList.map((partItem) => (
                  <Link style={Item} to="/Components">
                    {partItem.title}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack sx={{ textAlign: "center" }}>
                <h3 style={Head}>{headerList[4]}</h3>
                {buildsList.map((buildsItem) => (
                  <Link style={Item} to="/PCBuilds">
                    {buildsItem}
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
