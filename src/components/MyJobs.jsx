import React from "react";
import JobCard from "./JobCard";
import { Typography, Box, useTheme } from "@mui/material";
import companyLogo from "../assets/companyLogo.png";

function MyJobs() {
  const theme = useTheme();

  const jobs = [
    {
      companyLogo: companyLogo,
      title: "Job Title 1",
      description:
        "Lorem ipsum dolor sit amet. Ad perferendis nihil ut quia magni sit voluptatibus totam non libero rerum qui eveniet neque ut totam ipsa. Quo dolores aliquam et natus consectetur et placeat provident ut nulla internos quo architecto vitae ut perferendis omnis non quos minus!",
      disabilities: ["Disability 1", "Disability 2", "Disability 3"],
      jobTypes: ["Remote", "Contractual", "Entry-Level"],
      applicationStatus: "Viewed",
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.3srem",
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
          lineHeight: { xs: "40px", sm: "80px" },
          textAlign: "center",
          mb: 2,
        }}
      >
        My Jobs List
      </Typography>
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </Box>
  );
}

export default MyJobs;