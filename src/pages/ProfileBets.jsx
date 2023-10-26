import HeaderProfile from '../components/profile/HeaderProfile';
import SideBarProfile from '../components/profile/SideBarProfile';
import Footer from '../components/footer/Footer';
import { Container, Grid } from '@mui/material';

const ProfileBets = () => {
  return (
    <>
      <HeaderProfile />
      <Container maxWidth='lg'
        sx={{
          padding: '0 20px',
          display: 'flex',
          width: '100%'
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={7.5} xl={7.5}>
            Profile Bets
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4.5} xl={4.5}>
            <SideBarProfile />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='lg'>
        <Footer />
      </Container>
    </>
  );
}

export default ProfileBets;
