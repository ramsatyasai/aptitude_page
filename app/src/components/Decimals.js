import React from 'react'
import Sidenav from './Sidenav'

export default function Decimals() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Decimals & Fractions</h1><br/>
            <hr/><br/><br/><br/>
            <h2>Decimal Fractions</h2><br/>
            <p>Fractions having denominators in power of 10 are called decimal fractions.</p><br/>
            <ul className='lists'>
                <li>1/10 = .1, 2/10 = .2, ....</li>
                <li>1/100 = .01, 2/100 = .02, ...</li>
                <li>1/1000 = .001, 2/1000 = .002, ...</li>
            </ul><br/>
            <h2>Converting a decimal number into a fraction</h2><br/>
            <p>In the denominator part, place 1 under decimal point and suffix with as many zeroes as is the total number of digits after decimal point. Remove the decimal point and reduce the fraction to its lowest term.</p><br/>
            <ul className='lists'>
            <li>.56 = 56/100 = 14/25</li>
            <li>.0024 = 24/10000 = 3/1250</li>
            </ul><br/>
            <p>Suffixing zeroes to the right of a decimal fraction does not change its value. Thus 0.6 = 0.60 = 0.600 etc.</p><br/>
            <p>If numerator and denominator contains same number of decimal places, we can remove decimal signs from each number.</p><br/>
            <ul className='lists'>
            <li>2.71/3.41 = 271/341</li>
            <li>14.4/15.6 = 144/156 = 12/13</li>
            </ul><br/>
            <h2>Adding decimals</h2><br/>
            <p>Place each number under each other in such a way that decimal points lies in same colum. Numbers so arranged can be added in usual way.</p><br/>
            <ul className='lists'>
                <li>21.3 + .213 + 3.21 + .021 + 2.0031 = ?</li>
                <li>21.3</li>
                <li>.213</li>
                <li>3.21</li>
                <li>.021</li>
                <li>2.0031</li>
                <li>--------</li>
                <li>26.7471</li>
                <li>--------</li>
            </ul><br/>
            <h2>Subtracting decimals</h2><br/>
            <p>Place each number under each other in such a way that decimal points lies in same colum. Numbers so arranged can be subtracted in usual way.</p><br/>
            <ul className='lists'>
                <li>23.004</li>
                <li>-16.5628</li>
                <li>---------</li>
                <li>6.4412</li>
                <li>---------</li>
            </ul><br/>
            <h2>Multiplying decimals</h2><br/>
            <p>Multiply given numbers without considering decimal point. In product, mark the decimal point as many places of decimals as is the sum of number of decimal places in the given numbers.</p><br/>
            <ul className='lists'>
            <li>2.3 x 0.12 = ?</li>
            <li>23 x 12 = 276</li>
            <li>Sum of decimal places = 1 + 2 = 3</li>
            <li>∴ 2.3 x 0.12 = 0.276</li>
            </ul><br/>
            <h2>Dividing decimals by number</h2><br/>
            <p>Divide given decimal number without considering decimal point. In quotient, mark the decimal point as many places of decimals as is the sum of number of decimal places in the given dividend.</p><br/>
            <ul className='lists'>
            <li>0.63 / 9 = ?</li>
            <li>63 / 9 = 7</li>
            <li>Decimal places in dividend = 2</li>
            <li>∴ 0.63 / 9 = 0.07</li>
            </ul><br/>
            <h2>Dividing decimals by decimals</h2><br/>
            <p>Multiply both dividend and divisor by such multiple of 10 so that divisor becomes a whole number. Divide dividend without considering decimal point. In quotient, mark the decimal point as many places of decimals as is the sum of number of decimal places in the given dividend.</p><br/>
            <ul className='lists'>
            <li>0.00042/ 0.06 = ?</li>
            <li>0.00042/ 0.06 = (0.00042 x 100 )/ (0.06 x 100)</li>
            <li>= 0.042 / 6</li><br/>
            <li>Now 42/6 = 7</li>
            <li>Decimal places in dividend = 3</li>
            <li>∴ 0.00042 / 0.06 = 0.007</li>
            </ul><br/>
            <h1>Recurring Decimals</h1><br/>
            <h2>Pure recurring decimals</h2><br/>
            <p>A decimal fraction in which all figures after decimal point are repeated is called a pure recurring decimals. For example, 0.5555, 0.323232</p><br/>
            <h2>Converting pure recurring decimal to fraction</h2><br/>
            <p>Put the repeating figure only once in the numerator and put as many nines in the denominator as in number of repeating figures.</p><br/>
            <ul className='lists'>
            <li>Express 0.33333 in fraction.</li>
            <li>0.3333 = 3/9 = 1/3</li><br/>
            <li>Express 0.2727 in fraction.</li>
            <li>0.2727 = 27/99 = 3/11 </li>
            </ul><br/>
            <h2>Mixed recurring decimals</h2><br/>
            <p>A decimal fraction in which some figures are not repeating whereas some of them are repeating, is called as mixed recurring decimals. For example, 0.534242, 0.078888.0</p><br/>
            <h2>Converting mixed recurring decimal to fraction</h2><br/>
            <p>Put the difference of numbers formed by digits after decimal point taking repeated digits once and that formed by non-repeating number, in the numerator and put as many nines in the denominator as in number of repeating figures and annex them with as many zeroes as in the non-repeating digits.</p><br/>
            <ul className='lists'>
            <li>Express 0.266666 in fraction.</li>
            <li>0.26666 = (26-2)/90 = 24/90 = 4/15</li><br/>
            <li>Express 0.326868 in fraction.</li>
            <li>0.326868 = (3268 - 32)/9900 = 3236/9900 = 809/2475</li>
            </ul><br/>
        </div>
    </div>
  )
}
