// Navigation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

function Navigation() {
  const location = useLocation();
  const routesToHideSideNav = ['/Login', '/Signup_teachers', '/Signup_student', '/Login_Student'];
  const noHiding = ['/Area','/Averages','/Basic','/Calendar','/Clock','/Decimals','/Discounts','/HcfLcm','/NumberSystem','/Partnership','/Percentages','/ProfitLoss','/Ratios','/SimpleInterest','/SquaresCubes','/Timework','/Trains','/Tsd','/dashboard'];
  const shouldHideSideNav = routesToHideSideNav.includes(location.pathname);
  const noHide = noHiding.includes(location.pathname);
  return (
    <div>
      {!shouldHideSideNav && <Navbar />}
      {noHide && <Sidenav />}
    </div>
  );
}

export default Navigation;
