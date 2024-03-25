import React, { useState, useEffect } from 'react';
import './Login.css'; 
import logo from './images/verticurllogo1.png';
import googlelogo from './images/google.png';
import microsoftlogo from './images/microsoft.png';
import eyeClosedIcon from './images/passwordhide.png';
import eyeOpenIcon from './images/passwordshow.png';
import leftimg from './images/loginimg.png';
import carouselImage from './images/carousel.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const [currentCarousel, setCurrentCarousel] = useState(0);
  const carouselContent = {
    image: carouselImage,
    heading: ["Knowledge Base",
    "Reminders" ,
    "L & D Recommandations"],
    text: [
      "Instant access to company policies, FAQs, and procedures within chat.",
      "Automated reminders keep you on track with deadlines and important HR announcements.",
      "Unlock your potential with personalized training  based on your service line."
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarousel((prevIndex) => (prevIndex + 1) % 3); // There are three carousels
    }, 5000); // Switch carousels every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div className="login-container">
        <div className='left-container__img'>
        <div className='left-content'>
          <img className='left-img' src={leftimg} alt="login-img" />
          <div className="carousel-overlay">
              <div className="carousel-text">
          
                   <img src={carouselContent.image} alt="carousel-img" />
    
              
              <div className="paragraph-container">
              <h2>{carouselContent.heading[currentCarousel]}</h2>
      <p>{carouselContent.text[currentCarousel]}</p>
    </div>
              </div>
            </div>
            <div className="carousel-dots">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`dot ${index === currentCarousel ? 'active' : ''}`}
                  onClick={() => setCurrentCarousel(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className='right-content'>
        <div className="logo">
          <img src={logo} alt='verticurl-logo'/>
          <p className='logo-text'>VERTICURL BOT</p>
        </div>
       
        <h2 className='signInText'>Sign In</h2>
        <p className='signInText__Content'> Kindly enter your Verticurl or Ogilvy mail id credentials</p>
        <div className="input-field">
          <input type="email" placeholder="Enter Email"  required />
        </div>
        <div className="input-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"  required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? <img src={eyeOpenIcon} alt="Show" /> : <img src={eyeClosedIcon} alt="Hide" />}
          </span>
        </div>
        <div className="remember-me">
            <div className="remember-me__toogle">
          <button className={`toggle-button ${rememberMe ? 'active' : ''}`} onClick={toggleRememberMe}>
            <span className={`handle ${rememberMe ? 'active' : ''}`}></span>
            
          </button>
          <span className="remember-text">Remember me</span>
          </div>
         
          <a href="#" className="recover-password">Recover Password</a>
        </div>
        <button className="sign-in-btn">SIGN IN</button>
       
        <div className="middle-text">
            <hr className="hr-left" />
            <p>Or continue with</p>
            <hr className="hr-right" />
        </div>
        <div className="social-icons">
            <img src={googlelogo} alt="Google-logo" />
            <img src={microsoftlogo} alt="Microsoft-logo" />
        </div>
      </div>
    </div>
    </div>
    </div>
  
  );
};

export default Login;
