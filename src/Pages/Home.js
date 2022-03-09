import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Navigation from "../components/navigation/Navigation";
import LineBar from "../components/LineBar/LineBar";

const titleStyle = {
  color: "#fff",
  fontFamily: "'Fira Code', monospace",
};

const Home = () => {
  return (
    <>
      <Navigation />
      <LineBar degree="120deg" />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "#001E3C",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="md" sx={{ mt: 2 }}>
          <Typography
            sx={[
              titleStyle,
              { fontWeight: "400", fontSize: "1.2rem", color: "#ffffff" },
            ]}
          >
            About sumit
          </Typography>
          <Typography sx={[titleStyle, { fontWeight: "300", mt: 2 }]}>
            Hey there! This is Sumit. I'm Passionate about thinking, learning &
            exploring new things. 😐 Serious about Web Dev...
          </Typography>
          <Typography sx={[titleStyle, { fontWeight: "300", mt: 1 }]}>
            Checkout some my{" "}
            <Link style={{ color: "#fff" }} to="/projects">
              projects »
            </Link>
          </Typography>
          <Typography
            sx={[
              titleStyle,
              {
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#ffffff",
                mt: 4,
              },
            ]}
          >
            When you come back you'll find me here
          </Typography>
          <Box sx={{ mt:1 }}>
            <a href="mailto:contact.sumitkrdas@gmail.com">
              <img
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                src="/images/logo-gmail-9951.png"
                alt="logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/sumit-kumar-das-01/">
              <img
                style={{ width: "30px", height: "30px", objectFit: "contain", margin: "0 0.5rem" }}
                src="/images/linkedin-logo-png-1853.png"
                alt="logo"
              />
            </a>
            <a href="https://github.com/sumit-kr-das">
              <img
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                src="/images/desktop-icon.svg"
                alt="logo"
              />
            </a>
            <a href="https://twitter.com/Mr_SumitKrDas?fbclid=IwAR2L90USVGjheW0-Ys-4az4QW2_bcrFQ70X3m0psr4zIL87Kd9vBvEzF2FI">
              <img
                style={{ width: "30px", height: "30px", objectFit: "contain",margin: "0 0.5rem" }}
                src="/images/logo-twitter-png-5861.png"
                alt="logo"
              />
            </a>
            <a href="https://www.instagram.com/mr_sumit_kr_das/?hl=en">
              <img
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                src="/images/logo-ig-png-32464.png"
                alt="logo"
              />
            </a>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
