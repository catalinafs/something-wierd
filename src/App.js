import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ResponsiveContext } from './context/Responsive';
import Header from './components/header/Header';
import Profile from './pages/Profile';
import AllBets from './pages/AllBets';
import Logout from './pages/Logout';
import ProfileBets from './pages/ProfileBets';
import ProfileFinance from './pages/ProfileFinance';
import Works from './pages/Works';

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 908) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <ResponsiveContext>
      <Router>
        <Header />
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/bets' element={<ProfileBets />} />
          <Route path='/profile/finance' element={<ProfileFinance />} />
          <Route path='/all-bets' element={<AllBets />} />
          <Route path='/works' element={<Works />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </ResponsiveContext>
  );
}

export default App;