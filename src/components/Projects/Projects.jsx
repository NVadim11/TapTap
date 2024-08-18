import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const Projects = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
	return (
		<Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
			<Typography
				variant='h2'
				sx={{
					fontWeight: 700,
					fontSize: isMobile ? '46px' : '74px',
					lineHeight: '116%',
					letterSpacing: '-0.06em',
					textTransform: 'capitalize',
					textAlign: 'center',
					color: '#fff',
					marginBottom: '16px',
				}}
			>
				Our Projects
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 400,
					fontSize: '20px',
					lineHeight: '160%',
					textAlign: 'center',
					color: '#fff',
					marginTop: '24px',
				}}
			>
                {isMobile ? (
						<>
							Discover the various <br /> projects we’ve developed. <br /> Take a look and see the kind <br/>
				of innovative solutions we <br/> can create.
						</>
					) : (
            <>
           Discover the various projects we’ve developed. Take a look and <br /> see the kind
				of innovative solutions we can create.
            </>
					)}
			</Typography>

            <Grid container spacing={4} 
            sx={{ marginTop: isMobile ? '30px' : '70px' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              backgroundColor: '#e0f7fa',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Project One
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Brief description of project one.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              backgroundColor: '#ffebee',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Project Two
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Brief description of project two.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              backgroundColor: '#fff9c4',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Project Three
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Brief description of project three.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              backgroundColor: '#e1bee7',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Project Four
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Brief description of project four.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              backgroundColor: '#c5e1a5',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Project Five
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Brief description of project five.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              backgroundColor: '#ffab91',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Project Six
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '160%',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Brief description of project six.
            </Typography>
          </Box>
        </Grid>
      </Grid>
		</Box>
	);
};

export default Projects;
