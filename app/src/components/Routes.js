import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/dashboard';
import NumberSystem from './NumberSystem'; // Import your NumberSystem component
import Basic from '../components/Basic';
import Decimals from '../components/Decimals';
import Percentages from '../components/Percentages';
import Ratios from '../components/Ratios';
import HcfLcm from '../components/HcfLcm';
import Discounts from '../components/Discounts';
import Averages from '../components/Averages';
import Profitloss from '../components/Profitloss';
import SquaresCubes from '../components/SquaresCubes';
import Area from '../components/Area';
import Volume from '../components/Volume';
import Calendar from '../components/Calendar';
import Clock from '../components/Clock';
import SimpleInterest from '../components/SimpleInterest';
import Partnership from '../components/Partnership';
import Timework from '../components/Timework';
import Trains from '../components/Trains';
import Tsd from '../components/Tsd';

export default function MainRoutes() {
  return (
    <Routes>
        <Route exact path='/dashboard' element={<Dashboard/>}>
            <Route exact path="numbersystem" element={<NumberSystem />} />
            <Route exact path='basic' element={<Basic />}/>
            <Route exact path='decimals' element={<Decimals />}/>
            <Route exact path='percentages' element={<Percentages />}/>
            <Route exact path='ratios' element={<Ratios />}/>
            <Route exact path='hcflcm' element={<HcfLcm />}/>
            <Route exact path='discounts' element={<Discounts />}/>
            <Route exact path='averages' element={<Averages />}/>
            <Route exact path='profitloss' element={<Profitloss />}/>
            <Route exact path='squarescubes' element={<SquaresCubes />}/>
            <Route exact path='area' element={<Area />}/>
            <Route exact path='volume' element={<Volume />}/>
            <Route exact path='calendar' element={<Calendar />}/>
            <Route exact path='clock' element={<Clock />}/>
            <Route exact path='simpleinterest' element={<SimpleInterest />}/>
            <Route exact path='partnership' element={<Partnership />}/>
            <Route exact path='timework' element={<Timework />}/>
            <Route exact path='trains' element={<Trains />}/>
            <Route exact path='tsd' element={<Tsd />}/>
        </Route>
    </Routes>
  );
}
