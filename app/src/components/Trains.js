import React from 'react'
import Sidenav from './Sidenav'

export default function Trains() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Trains</h1><br/>
            <hr/><br/><br/><br/>
            <h2>Important Terms</h2><br/>
            <p>Speed in km/hr.</p><br/>
            <ul className='mainpoints2'>
                <li>a km /hr = (a * 5 / 18) m/s.</li>
            </ul><br/>
            <p>Speed in m/s</p><br/>
            <ul className='mainpoints2'>
            <li>a m/s = ( a * 18/5) km/hr.</li>
            </ul><br/>
            
            <p>Time taken by a train of length L metres to pass a pole or a standing man or a signal post is equal to the time taken by the train to cover</p><br/>
            <ul className='mainpoints2'>
            <li>L Metres.</li>
            </ul><br/>
            <p>Time taken by a train of length L metres to pass a stationary object of length b metres is the time taken by the train to cover</p><br/>
            <ul className='mainpoints2'>
                <li>(L + b) metres.</li>
            </ul><br/>
            <p>Suppose two train or two bodies are moving in the same direction at u m/s and v m/s , where u {'>'} v, then their</p><br/>
            <ul className='mainpoints2'>
                <li>relative speed = (u – v) m/s.</li>
            </ul><br/>
            <p>Suppose two trains or two bodies are moving in opposite directions at u m/s and v m/s , then their relative speed = (u + v) m/s.</p><br/>
            <ul className='mainpoints2'>
            <li>relative speed = ( u + v) m/s.</li>
            </ul><br/>

            <p>If two trains of length a metres and b metres are moving in opposite directions at u m/s and v m/s, then time taken by the trains to cross each other =</p><br/>
            <ul className='mainpoints2'>
            <li>(a+b) / ( u+ v) sec.</li>
            </ul><br/>
            
            <p>If two train s of length a metres and b metres are moving in the same direction at u m/s and v m/s , then the time taken by the faster train to cross the slower train =</p><br/>
            <ul className='mainpoints2'>
            <li>( a+b) / (u + v ) sec.</li>
            </ul><br/>
            
            <p>If two train ( or bodies) start at the same time from points A and B towards each other and after crossing they take a and b sec in reaching B and A respectively, then</p><br/>
            <ul className='mainpoints2'>
            <li>( A  speed) : ( B speed) = ( √b : √a ).</li>
            </ul><br/>
            
        </div>
    </div>
  )
}
