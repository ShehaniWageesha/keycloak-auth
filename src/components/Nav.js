import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            WFM
          </Typography>
          <Button component={Link} href="/" sx={{ color: "common.white" }}>
            Home
          </Button>
          <Button
            component={Link}
            href="/secured"
            sx={{ color: "common.white" }}
          >
            Secured Page
          </Button>
          {!keycloak.authenticated && (
            <Button onClick={() => keycloak.login()} sx={{ color: "common.white" }}>
              Login
            </Button>
          )}
          {!!keycloak.authenticated && (
            <Button onClick={() => keycloak.logout()} sx={{ color: "common.white" }}>
              Logout ({keycloak.tokenParsed.preferred_username})
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
