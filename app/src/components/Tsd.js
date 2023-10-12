import React from 'react'
import Sidenav from './Sidenav'

export default function Tsd() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>

            <h1>Aptitude - Speed and Distance</h1><br/>
            <hr/><br/><br/><br/>
            <h2>Formulaes</h2><br/>
            <ul className='mainpoints'>
                <li>Speed = Distance⁄Time.</li>
                <li>Time = Distance⁄Speed.</li>
                <li>P km/hr = (P x 5⁄18)m/sec</li>
                <li>P m/sec = (P x 18⁄5)km/hr</li>
            </ul><br/>
            <p>If the ratio of the speeds of P and Q is p:q, then the ratio of the times taken by them to cover the same distance is</p><br/>
            <ul className='mainpoints'>
            <li>1⁄p:1⁄q or q : p</li>
            </ul><br/>
            <p>The average speed of the journey is</p><br/>
            <ul className='mainpoints'>
                <li>(2pq⁄p+q)km/hr.</li>
            </ul><br/>
            <p>if a man covers a certain distance at p km/hr and an equal distance at q km/hr</p><br/>        </div>
    </div>
  )
}
