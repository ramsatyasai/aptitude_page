import React from 'react'
import Image from '../images/bg_image.png';
import { NavLink } from 'react-router-dom';

export default function Sidenav() {
  return (
    <div className='sidenav'>
        <div className='top-image'>
            <img src={Image}/>
        </div>
        <div className='topics'>
            <ul>
                <li><NavLink to='/numbersystem'>Aptitude - Number Systems</NavLink></li>
                <li><NavLink to='/basic'>Aptitude - Basic Arithmetic</NavLink></li>
                <li><NavLink to='/decimals'>Aptitude - Decimals</NavLink></li>
                <li><NavLink to='/percentages'>Aptitude - Percentages</NavLink></li>
                <li><NavLink to='/ratios'>Aptitude - Ratios</NavLink></li>
                <li><NavLink to='/hcflcm'>Aptitude - H.C.F & L.C.M</NavLink></li>
                <li><NavLink to='/discounts'>Aptitude - Discounts</NavLink></li>
                <li><NavLink to='/averages'>Aptitude - Averages</NavLink></li>
                <li><NavLink to='/profitloss'>Aptitude - Profit & Loss</NavLink></li>
                <li><NavLink to='/squarescubes'>Aptitude - Squares & Cubes</NavLink></li>
                <li><NavLink to='/area'>Aptitude - Area Calculation</NavLink></li>
                <li><NavLink to='/volume'>Aptitude - Volume Calculation</NavLink></li>
                <li><NavLink to='/calendar'>Aptitude - Calendar</NavLink></li>
                <li><NavLink to='/clock'>Aptitude - Clock</NavLink></li>
                <li><NavLink to='/simpleinterest'>Aptitude - Simple Interest</NavLink></li>
                <li><NavLink to='/partnership'>Aptitude - Partnership</NavLink></li>
                <li><NavLink to='/timework'>Aptitude - Time & Work</NavLink></li>
                <li><NavLink to='/trains'>Aptitude - Trains</NavLink></li>
                <li><NavLink to='/tsd'>Aptitude - Speed & Distance</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
