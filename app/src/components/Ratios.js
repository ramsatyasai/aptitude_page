import React from 'react'
import Sidenav from './Sidenav'

export default function Ratios() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
        <h1>Number System - Ratios</h1><br/>
        <hr/><br/><br/>
        <h2>Ratio</h2><br/>
Ratio represents the proportion in which a number contains another number. A ratio is represented by a/b or a:b. The duplication or division of every term of a proportion by the same non zero number does not influence the proportion.Subsequently, 3:5 is the same as 6:10 or 9:15 or 12:20 and so on.

Extent
The fairness of two proportions is called extent. As 2:3 = 6:9, we compose, 2:3::6:9 and we can say that 2,3,6,9 are in extent . Here 2 and 9 are called extremes while 3 and 6 are called implies.

In an extent, result of extremes=product of means.

Fourth Relative
if a:b::c:d, then d is known as the fourth relative to a,b and c.

Third Relative
if a:b::c:d, then c is known as the third relative to a and b.

Mean Relative
Mean relative is the middle of a and b.
        </div>
    </div>
  )
}
