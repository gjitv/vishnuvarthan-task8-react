import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='leftFoo'>
            <p>Accelerate your business with next-gen Technology</p>
            <div className='stats'>
                <div className='subStats'>
                    <h4>GJ Global</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Technology</p>
                    <p>Career</p>
                </div>
                <div className='subStats'>
                    <h4>Services</h4>
                    <p>Fintech</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Technology</p>
                    <p>Career</p>
                    <p>E Commerce</p>
                    <p>Gaming</p>
                </div>
                <div className='subStats'>
                    <h4>More Info</h4>
                    <p>Faq</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Technology</p>
                    <p>Career</p>
                </div>
                <div className='subStats'>
                    <h4>FAQ Asked</h4>
                    <p>About</p>
                    <p>Services</p>
                    <p>Technology</p>
                    
                </div>
            </div>
        </div>
        <div className='rightFoo'>
            {/* <img src='../../../../public/images/footer.png' alt="1"/> */}
        </div>
    </div>
  )
}

export default Footer