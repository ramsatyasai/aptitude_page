import React from 'react'
import Sidenav from './Sidenav'

export default function Percentages() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
        <h1>Number System - Percentages</h1><br/>
        <hr/><br/><br/><br/><br/>
        <h2>Percentage</h2><br/>
        <p>Percent means many hundredths.Example: z% is z percent which means z hundredths. It will be written as:</p><br/>
        <h3>z% = z/100</h3><br/>
        <h3>p/q as percent: (p/q x 100)%</h3><br/>
        <h2>Commodity</h2><br/>
        <p>If the price of a commodity increases by R%, then the reduction in consumption so as not to increase the expenditure is:</p><br/>
        <h3>[R/(100 + R)x 100]%</h3><br/>
        <p>If the price of a commodity decreases by R%, then the increase in consumption so as not to decrease the expenditure is:</p><br/>
        <h3>[R/(100 - R)x 100]%</h3><br/>
        <h2>Population</h2><br/>
        <p>The population of a city is P and let it increases at the rate of R% per annum:</p><br/>
        <h3>Population after t years: P(1 + R/100)t</h3><br/>
        <h3>Population t years ago: P/(1 + R/100)t</h3><br/>
        <h2>Depreciation</h2><br/>
        <p>Let V be the present value of machine. Suppose it depreciates at the rate of R% per annum:</p><br/>
        <h3>Machine's value after t years:P(1 - R/100)t</h3><br/>
        <h3>Machine's value t years ago: P/(1 - R/100)t</h3><br/>
        <ul>
        <li>If P is R% more than Q, then Q is less than P by how many percent?<br/><br/><br/>


        [R⁄(100 + R)x 100]%</li><br/>
        <li>If P is R% more than Q, then Q is more than P by how many percent?<br/><br/><br/>


        [R⁄(100 - R)x 100]%</li>
        </ul>
        </div>
    </div>
  )
}
