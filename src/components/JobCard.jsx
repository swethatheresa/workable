import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

const JobCard = ({
  companyLogo,
  title,
  description,
  disabilities,
  jobTypes,
  applicationStatus,
}) => {
  return (
    <Card
      sx={{
        // width: '100%',
        maxWidth: 961,
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '1.5em',
        marginLeft: { xs: '5%', sm: '15%' },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
        >
          <img
            src={companyLogo}
            alt="Company Logo"
            style={{
              width: { xs: 80, sm: 120 },
              height: { xs: 80, sm: 120 },
              marginRight: 16,
              alignSelf: 'center',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Typography variant="h6" style={{ marginBottom: 0, textAlign: 'left' }}>
                {title}
              </Typography>
              <Chip
                label={applicationStatus}
                variant="outlined"
                style={{ backgroundColor: '#E3E9FF' }}
              />
            </Box>
            <Typography
              variant="body1"
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
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
                    marginRight: 1,
                    backgroundColor: '#CAFFCF',
                    borderRadius: 3,
                    height: '2.5em',
                  }}
                />
              ))}
            </Box>
            <Box display="flex" alignItems="center" marginTop={1}>
              <Typography variant="body2" style={{ color: '#767676' }}>
                {jobTypes.join(' | ')}
              </Typography>
            </Box>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
