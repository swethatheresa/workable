import React from "react";
import { Card, CardContent, Typography, Box, Chip, useTheme } from "@mui/material";

const JobCard = ({
  companyLogo,
  title,
  description,
  disabilities,
  jobTypes,
  applicationStatus,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        margin: "1.5rem auto",
        borderRadius: "10px",
        minWidth: "80%",
        [theme.breakpoints.up("sm")]: {
          maxWidth: "70%",
        },
        position: "relative", 
      }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row", sm: "row" }}
          alignItems="center"
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          <img
            src={companyLogo}
            alt="Company Logo"
            style={{
              width: "5rem",
              height: "5rem",
              marginRight: "1rem",
              alignSelf: "center",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "1rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.7rem",
                  },
                }}
              >
                {title}
              </Typography>
              {applicationStatus && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    [theme.breakpoints.down("md")]: {
                      top: "0.3rem",
                      right: "0.3rem",
                    },
                    [theme.breakpoints.down("sm")]: {
                      top: "0.2rem",
                      right: "0.2rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                      top: "0.2rem",
                      right: "0.2rem",
                    },
                  }}
                >
                  <Chip
                    label={applicationStatus}
                    variant="outlined"
                    sx={{
                      backgroundColor: "#E3E9FF",
                      color: "#4668E0",
                      fontSize: "0.9rem",
                      marginTop: "0.9rem",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "0.7rem",
                        marginTop: "0.65rem",
                        height: "0.8rem"
                      },
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "0.6rem",
                        height: "0.7rem"
                      },
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "0.5rem",
                        height: "0.9rem"
                      },
                    }}
                  />
                </Box>
              )}
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                maxWidth: "35rem",
                mt: "0.5rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.9rem",
                  maxWidth: "100px"
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.8rem",
                  maxWidth: "300px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "0.7rem",
                  maxWidth: "200px",
                },
              }}
            >
              {description}
            </Typography>
            <Box display="flex" alignItems="center" marginTop={1}>
              {disabilities.map((disability, index) => (
                <Chip
                  key={index}
                  label={disability}
                  sx={{
                    marginRight: "0.5rem",
                    backgroundColor: "#CAFFCF",
                    borderRadius: 3,
                    [theme.breakpoints.down("md")]: {
                      height: "1rem",
                      fontSize: "0.9rem",
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "0.9rem",
                      fontSize: "0.7rem",
                      marginLeft: "0.6rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                      height: "0.7rem",
                      fontSize: "0.6rem",
                      marginLeft: "0rem",
                    },
                  }}
                />
              ))}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              marginTop={1}
              sx={{
                [theme.breakpoints.down("md")]: {
                  marginLeft: "0.1rem",
                },
                [theme.breakpoints.down("sm")]: {
                  marginLeft: "3rem",
                },
                [theme.breakpoints.down("xs")]: {
                  marginLeft: "0.1rem",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#767676",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "0.9rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.75rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    fontSize: "0.6rem",
                  },
                }}
              >
                {jobTypes.join(" | ")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
