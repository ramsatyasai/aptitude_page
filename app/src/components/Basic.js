import React from 'react'
import Sidenav from './Sidenav'

export default function Basic() {
  return (
    <div className='topics'>
        <div className='topicbar'>
            <Sidenav/>
        </div>
        <div className='bodyofns'>
            <h1>Aptitude - Basic Arithmetic</h1><br/>
            <hr/><br/><br/><br/>
            <h2>Sequence</h2><br/>
            <p>A sequence represents numbers formed in succession and arranged in a fixed order defined by a certain rule.</p><br/>
            <h2>Airthmetic Progression ( A.P.)</h2><br/>
            <p>It is a type of sequence where each number/term(except first term) differs from its preceding number by a constant. This constant is termed as common difference.</p><br/>
            <h2>A.P. Terminologies</h2><br/>
            <ul className='mainpoints'>
            <li>First number is denoted as 'a'.</li>
            <li>Common difference is denoted as 'd'.</li>
            <li>nth number is denoted as 'Tn'.</li>
            <li>Sum of n number is denoted as 'Sn'.</li>
            </ul><br/>
            <h2>A.P. Examples</h2><br/>
            <ul className='mainpoints'>
            <li>1, 3, 5, 7, ... is an A.P. where a = 1 and d = 3 - 1 = 2.</li>
            <li>7, 5, 3, 1, - 1 ... is an A.P. where a = 7 and d = 5 - 7 = -2.</li>
            </ul><br/>
            <h2>General term of A.P.</h2><br/>
            <h3>Tn = a + (n - 1)d</h3><br/>
            <p>Where a is first term, n is count of terms and d is the difference between two terms.</p><br/>
            <h2>Sum of n terms of A.P.</h2><br/>
            <h3>Sn = (n/2)[2a + (n - 1)d]</h3><br/>
            <p>Where a is first term, n is count of terms and d is the difference between two terms. There is another variation of the same formula:</p><br/>
            <h3>Sn = (n/2)(a + l)</h3><br/>
            <p>Where a is first term, n is count of terms, l is the last term.</p><br/>
            <h2>Geometrical Progression, G.P.</h2><br/>
            <p>It is a type of sequence where each number/term(except first term) bears a constant ratio from its preceding number. This constant is termed as common ratio.</p><br/>
            <h2>G.P. Terminogies</h2><br/>
            <ul className='mainpoints'>
            <li>First number is denoted as 'a'.</li>
            <li>Common ratio is denoted as 'r'.</li>
            <li>nth number is denoted as 'Tn'.</li>
            <li>Sum of n number is denoted as 'Sn'.</li>
            </ul><br/>
            <h2>G.P. Examples</h2><br/>
            <ul className='mainpoints'>
            <li>3, 9, 27, 81, ... is a G.P. where a = 3 and r = 9 / 3 = 3.</li>
            <li>81, 27, 9, 3, 1 ... is a G.P. where a = 81 and r = 27 / 81 = (1/3).</li>
            </ul><br/>
            <h2>General term of G.P.</h2><br/>
            <h3>Tn = ar(n-1)</h3><br/>
            <p>Where a is first term, n is count of terms, r is the common ratio</p><br/>
            <h2>Sum of n terms of G.P.</h2><br/>
            <h3>Sn = a(1 - rn)/(1 - r)</h3><br/>
            <p>Where a is first term, n is count of terms, r is the common ratio and r &lt; 1. There is another variation of the same formula:</p><br/>
            <h3>Sn = a(rn - 1)/(r - 1)</h3><br/>
            <p>Where a is first term, n is count of terms, r is the common ratio and r &gt; 1.</p><br/>
            <h2>Arithmetic Mean</h2><br/>
            <h4>Airthmetic mean of two numbers a and b is:</h4><br/>
            <h3>Arithmetic Mean = (1/2)(a + b)</h3><br/>
            <h2>Geometric Mean</h2><br/>
            <h4>Geometric mean of two numbers a and b is</h4><br/>
            <h3>Geometric Mean = √ab</h3><br/>
            <h2>General Formulaes</h2><br/>
            <ul>
            <li>1 + 2 + 3 + ... + n = (1/2)n(n+1)</li><br/>
            <li>1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup> = n(n+1)(2n+1)/6</li><br/>
            <li>1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> + ... + n<sup>3</sup> = [(1/2)n(n+1)]<sup>2</sup></li><br/>
            </ul><br/>
        </div>
    </div>
  )
}
