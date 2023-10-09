import React from 'react'
import Sidenav from './Sidenav'

export default function NumberSystem() {
  return (
    
    <div className='numbersystem'>
        <div className='topicbar'>
            <Sidenav/>
        </div>    
        <div className='bodyofns'>
          <h1>Aptitude - NumberSystem</h1><br/>
          <hr/><br/>
          <h2>Numbers</h2><br/>
          <p>In Decimal number system, there are ten symbols namely 0,1,2,3,4,5,6,7,8 and 9 called digits. A number is denoted by group of these digits called as numerals.</p><br/><br/>
          <h2>Face Value</h2><br/>
          <p>Face value of a digit in a numeral is value of the digit itself. For example in 321, face value of 1 is 1, face value of 2 is 2 and face value of 3 is 3.</p><br/><br/>
          <h2>Place Value</h2><br/>
          <p>Place value of a digit in a numeral is value of the digit multiplied by 10n where n starts from 0. For example in 321:</p><br/><br/>
          <ul type='disc'>
            <li>Place value of 1 = 1 x 100 = 1 x 1 = 1</li>
            <li>Place value of 2 = 2 x 101 = 2 x 10 = 20</li>
            <li>Place value of 3 = 3 x 102 = 3 x 100 = 300</li>
          </ul>
          <br/><br/>
          <p className='mainpoints'>0th position digit is called unit digit and is the most commonly used topic in aptitude tests.</p>
          <br/><br/>
          <h2>Types Of Numbers</h2><br/>
          <p>1. <b>Natural Numbers</b> - n &gt; 0 where n is counting number; [1,2,3...]</p><br/>
          <p>2. <b>Whole Numbers</b> - n ≥ 0 where n is counting number; [0,1,2,3...].</p><br/>
          <p className='mainpoints'>0 is the only whole number which is not a natural number.Every natural number is a whole number.</p><br/>
          <p>3. <b>Integers</b> - n ≥ 0 or n ≤ 0 where n is counting number;...,-3,-2,-1,0,1,2,3... are integers.</p><br/>
          <ul>
            <li>Positive Integers - n &gt; 0; [1,2,3...]</li>
            <li>Negative Integers - n &lt; 0; [-1,-2,-3...]</li>
            <li>Non-Positive Integers - n ≤ 0; [0,-1,-2,-3...]</li>
            <li>Non-Negative Integers - n ≥ 0; [0,1,2,3...]</li>
          </ul><br/><br/>
          <p className='mainpoints'>0 is neither positive nor negative integer.</p><br/>
          <p>4. <b>Even Numbers</b> - n / 2 = 0 where n is counting number; [0,2,4,...]</p><br/>
          <p>5. <b>Odd Numbers</b> - n / 2 ≠ 0 where n is counting number; [1,3,5,...]</p><br/>
          <p>6. <b>Prime Numbers</b> - Numbers which is divisible by themselves only apart from 1.</p><br/>
          <p className='mainpoints'>1 is not a prime number.To test a number p to be prime, find a whole number k such that k &gt; √p. Get all prime numbers less than or equal to k and divide p with each of these prime numbers. If no number divides p exactly then p is a prime number otherwise it is not a prime number.</p><br/>
          <p>
            <b>Example:</b> 191 is prime number or not?<br/>
            <b>Solution:</b><br/>
            Step 1 - 14 &gt; √191<br/>
            Step 2 - Prime numbers less than 14 are 2,3,5,7,11 and 13.<br/>
            Step 3 - 191 is not divisible by any above prime number.<br/>
            Result - 191 is a prime number.<br/><br/>

            <b>Example:</b> 187 is prime number or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - 14 &gt; √187<br/>
            Step 2 - Prime numbers less than 14 are 2,3,5,7,11 and 13.<br/>
            Step 3 - 187 is divisible by 11.<br/>
            Result - 187 is not a prime number.<br/>
          </p><br/>
          <p>7. <b>Composite Numbers</b> - Non-prime numbers &gt; 1. For example, 4,6,8,9 etc.</p><br/>
          <p className='mainpoints'>1 is neither a prime number nor a composite number.<br/>2 is the only even prime number.</p><br/>
          <p>8. <b>Co-Primes Numbers</b> - Two natural numbers are co-primes if their H.C.F. is 1. For example, (2,3), (4,5) are co-primes.</p><br/><br/>
          <h2>Divisibility</h2><br/>
          <h4>Following are tips to check divisibility of numbers.</h4><br/>
          <p>1. <b>Divisibility by 2</b> - A number is divisible by 2 if its unit digit is 0,2,4,6 or 8.</p><br/>
          <p>
            <b>Example:</b> 64578 is divisible by 2 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 8.<br/>
            Result - 64578 is divisible by 2.<br/><br/>

            <b>Example:</b> 64575 is divisible by 2 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 5.<br/>
            Result - 64575 is not divisible by 2.</p><br/>
            <p>2. <b>Divisibility by 3</b> - A number is divisible by 3 if sum of its digits is completely divisible by 3.</p><br/>
            <p>
            <b>Example:</b> 64578 is divisible by 3 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Sum of its digits is 6 + 4 + 5 + 7 + 8 = 30 <br/>
            which is divisible by 3.<br/>
            Result - 64578 is divisible by 3.<br/><br/>

            <b>Example:</b> 64576 is divisible by 3 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Sum of its digits is 6 + 4 + 5 + 7 + 6 = 28 <br/>
            which is not divisible by 3.<br/>
            Result - 64576 is not divisible by 3.<br/>
            </p><br/>
            <p>3. <b>Divisibility by 4</b> - A number is divisible by 4 if number formed using its last two digits is completely divisible by 4.</p><br/>
            <p>
            <b>Example:</b> 64578 is divisible by 4 or not?<br/>
            <b>Solution: </b><br/>
            Step 1 - number formed using its last two digits is 78 <br/>
            which is not divisible by 4.<br/>
            Result - 64578 is not divisible by 4.<br/><br/>

            <b>Example:</b> 64580 is divisible by 4 or not?<br/>
            <b>Solution: </b><br/>
            Step 1 - number formed using its last two digits is 80 <br/>
            which is divisible by 4.<br/>
            Result - 64580 is divisible by 4.<br/>
            </p><br/>
            <p>4. <b>Divisibility by 5</b> - A number is divisible by 5 if its unit digit is 0 or 5.</p><br/>
            <p>
            <b>Example:</b> 64578 is divisible by 5 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 8.<br/>
            Result - 64578 is not divisible by 5.<br/><br/>

            <b>Example:</b> 64575 is divisible by 5 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 5.<br/>
            Result - 64575 is divisible by 5.<br/>
            </p><br/>
            <p>5.<b>Divisibility by 6</b> - A number is divisible by 6 if the number is divisible by both 2 and 3.</p><br/>
            <p>
            <b>Example:</b> 64578 is divisible by 6 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 8. Number is divisible by 2.<br/>
            Step 2 - Sum of its digits is 6 + 4 + 5 + 7 + 8 = 30 <br/>
            which is divisible by 3.<br/>
            Result - 64578 is divisible by 6.<br/><br/>

            <b>Example:</b> 64576 is divisible by 6 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 8. Number is divisible by 2.<br/>
            Step 2 - Sum of its digits is 6 + 4 + 5 + 7 + 6 = 28 <br/>
            which is not divisible by 3.<br/>
            Result - 64576 is not divisible by 6.<br/>
            </p><br/>
            <p>6. <b>Divisibility by 8</b> - A number is divisible by 8 if number formed using its last three digits is completely divisible by 8.</p><br/>
            <p>
            <b>Example:</b> 64578 is divisible by 8 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - number formed using its last three digits is 578 <br/>
            which is not divisible by 8.<br/>
            Result - 64578 is not divisible by 8.<br/><br/>

            <b>Example:</b> 64576 is divisible by 8 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - number formed using its last three digits is 576 <br/>
            which is divisible by 8.<br/>
            Result - 64576 is divisible by 8.<br/>
            </p><br/>
            <p>7. <b>Divisibility by 9</b> - A number is divisible by 9 if sum of its digits is completely divisible by 9.</p><br/>
            <p>
            <b>Example:</b> 64579 is divisible by 9 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Sum of its digits is 6 + 4 + 5 + 7 + 9 = 31 <br/>
            which is not divisible by 9.<br/>
            Result - 64579 is not divisible by 9.<br/><br/>

            <b>Example:</b> 64575 is divisible by 9 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Sum of its digits is 6 + 4 + 5 + 7 + 5 = 27 <br/>
            which is divisible by 9.<br/>
            Result - 64575 is divisible by 9.<br/>
            </p><br/>
            <p>8. <b>Divisibility by 10</b> - A number is divisible by 10 if its unit digit is 0.</p><br/>
            <p>
            <b>Example:</b> 64575 is divisible by 10 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 5.<br/>
            Result - 64578 is not divisible by 10.<br/><br/>

            <b>Example:</b> 64570 is divisible by 10 or not?<br/>
            <b>Solution:</b> <br/>
            Step 1 - Unit digit is 0.<br/>
            Result - 64570 is divisible by 10.<br/>
            </p><br/>
            <p>9.<b> Divisibility by 11</b> - A number is divisible by 11 if difference between sum of digits at odd places and sum of digits at even places is either 0 or is divisible by 11.</p><br/>
            <p>
              <b>Example:</b> 64575 is divisible by 11 or not?<br/>
              <b>Solution:</b> <br/>
              Step 1 - difference between sum of digits at odd places <br/>
              and sum of digits at even places = (6+5+5) - (4+7) = 5 <br/>
              which is not divisible by 11.<br/>
              Result - 64575 is not divisible by 11.<br/><br/>

              <b>Example:</b> 64075 is divisible by 11 or not?<br/>
              <b>Solution:</b> <br/>
              Step 1 - difference between sum of digits at odd places <br/>
              and sum of digits at even places = (6+0+5) - (4+7) = 0.<br/>
              Result - 64075 is divisible by 11.<br/>
            </p><br/><br/>
            <h2>Tips On Division</h2><br/>
            <ol>
              <li>If a number n is divisible by two co-primes numbers a, b then n is divisible by ab.</li><br/>
              <li>(a-b) always divides (an - bn) if n is a natural number.</li><br/>
              <li>(a+b) always divides (an - bn) if n is an even number.</li><br/>
              <li>(a+b) always divides (an + bn) if n is an odd number.</li><br/>
            </ol><br/>
            <h2>Division Algorithm</h2><br/>
            <p>When a number is divided by another number then</p><br/>
            <p className='mainpoints'>Dividend = (Divisor x Quotient) + Reminder</p><br/><br/>
            <h2>Series</h2><br/>
            <h4>Following are formulaes for basic number series:</h4><br/>
            <ol>
              <li>(1+2+3+...+n) = (1/2)n(n+1)</li><br/>
              <li>(1<sup>2</sup>+2<sup>2</sup>+3<sup>2</sup>+...+n<sup>2</sup>) = (1/6)n(n+1)(2n+1)</li><br/>
              <li>(1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>+...+n<sup>3</sup>) = (1/4)n<sup>2</sup>(n+1)<sup>2</sup></li><br/>
            </ol><br/><br/>
            <h2>Basic Formulae</h2><br/>
            <h4>These are the basic formulae :</h4><br/>
            <ul>
              <li>(a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2ab</li><br/>
              <li>(a - b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab</li><br/>
              <li>(a + b)<sup>2</sup> - (a - b)<sup>2</sup> = 4ab</li><br/>
              <li>(a + b)<sup>2</sup> + (a - b)<sup>2</sup> = 2(a<sup>2</sup> + b<sup>2</sup>)</li><br/>
              <li>(a<sup>2</sup> - b<sup>2</sup>) = (a + b)(a - b)</li><br/>
              <li>(a + b + c)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2(ab + bc + ca)</li><br/>
              <li>(a<sup>3</sup> + b<sup>3</sup>) = (a + b)(a<sup>2</sup> -  ab + b<sup>2</sup>)</li><br/>
              <li>(a<sup>3</sup> - b<sup>3</sup>) = (a - b)(a<sup>2</sup> + ab + b<sup>2</sup>)</li><br/>
              <li>(a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> - 3abc) = (a + b + c)(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> - ab - bc - ca)</li><br/>
            </ul><br/>
        </div>
    </div>
  )
}
