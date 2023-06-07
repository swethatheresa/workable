import React from "react";
import { Box, Typography, TextField, Button, Grid, useTheme } from "@mui/material";
import NavBar from "./NavBar";

function CompanyForm() {
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 0.5rem)", 
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box sx={{ width: "80%", maxWidth: 600 }}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Company Name"
                  fullWidth
                  variant="outlined"
                  sx={{
                    fontSize: theme.breakpoints.down("xs")
                      ? "0.4rem"
                      : "0.5rem",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Address"
                  fullWidth
                  variant="outlined"
                  multiline
                  minRows={3}
                  sx={{
                    fontSize: theme.breakpoints.down("xs")
                      ? "0.4rem"
                      : theme.breakpoints.down("sm")
                      ? "0.5rem"
                      : "1rem"
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Number of Employees"
                  type="number"
                  fullWidth
                  variant="outlined"
                  sx={{
                    fontSize: theme.breakpoints.down("xs")
                      ? "0.rem"
                      : theme.breakpoints.down("sm")
                      ? "0.8rem"
                      : "1rem",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Website URL"
                  fullWidth
                  variant="outlined"
                  sx={{
                    fontSize: theme.breakpoints.down("xs")
                      ? "0.4rem"
                      : theme.breakpoints.down("sm")
                      ? "0.8rem"
                      : "1rem",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="outlined" component="label">
                    Upload Logo
                    <input type="file" hidden />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default CompanyForm;
