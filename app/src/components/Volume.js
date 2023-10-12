import React from 'react'
import Sidenav from './Sidenav'

export default function Volume() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Volume Calculation</h1><br/>
            <hr/><br/><br/><br/>
            <h2>Important Fact and Formulae</h2><br/>
            <p>Following are important facts and formulaes used in questions for volume calculations.</p><br/>
            <h2>Cuboid</h2>
            <p>Let Length=L, Breath =b and Height =h units. Then,</p><br/>
            <ul className='lists'>
                <li>Volume = (L*b*h) cubic units.</li>
                <li>Surface area=2(Lb+bh+Lh) sq. units.</li>
                <li>Diagonal =√(L2+b2+h2) units.</li>
            </ul><br/>

            <h2>Cube</h2><br/>
            <p>Let each edge of a cube be of length a. Then,</p><br/>
            <ul className='lists'>
            <li>Volume=a3 cubic units.</li>
            <li>Surface area= 6a2 sq. units.</li>
            <li>Diagonal= √3a units.</li>
            </ul><br/>
            
            <h2>Cylinder</h2><br/>
            <p>Let radius of base = r and Height (or length) =h. Then,</p><br/>
            <ul className='lists'>
                <li>Volume = (πr2h) cubic units.</li>
                <li>Curved surface area= (2πrh) sq. units.</li>
                <li>Total surface area= (2πrh+2πr2) sq. units. = 2πr (h+r) sq. units.</li>
            </ul><br/>

            <h2>Cone</h2><br/>
            <p>Let radius of base=r and Height (or length) = h. Then,</p><br/>
            <ul className='lists'>
                <li>Slant height=√h2+r2 units.</li>
                <li>Volume = (1/3 πr2h) cubic units.</li>
                <li>Curved surface area = (πrL) sq. units.</li>
                <li>Total surface area = (πrL+ πr2) sq. units.</li>
            </ul><br/>

            <h2>Sphere</h2><br/>
            <p>Let the radius of the sphere be r. then,</p><br/>
            <ul className='lists'>
            <li>Volume = (4/3 πr3) cubic units.</li>
            <li>Surface area =( 4πr2) Sq. unit</li>
            <li>Sum of decimal places = 1 + 2 = 3</li>
            </ul><br/>

            <h2>Hemisphere</h2><br/>
            <p>Let the radius of the hemisphere be r. then,</p><br/>
            <ul className='lists'>
            <li>Volume = (2/3πr3) cubic units</li>
            <li>Curved surface area = (2πr2) Sq. unit</li>
            <li>Total surface area = 3πr2 sq. unit.</li>
            </ul><br/>
            <h2>Note</h2><br/>
            <p>1 litre = 1000cm3.</p><br/>
        </div>
    </div>
  )
}
