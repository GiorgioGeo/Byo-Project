'use client'
import Link from 'next/link';
import React from 'react';
import './App.css';
import logo from './components/logo.png';
import Image from 'next/image';
import instagramLogo from './components/instagram-logo.png';
import facebookLogo from './components/facebook-logo.png';
import linkedinLogo from './components/linkedin-logo.png';
import whatsappLogo from './components/whatsapp-logo.png';
import photo from './components/image1_0.jpg';
const App: React.FC = () => {
  return (
    
    <div className="App">
      <header className="App-header">
      <Image className="logo" src={logo} alt='logo' />
      <div className="button-group">
        <Link href='./Login'>
        <button className='loginbutton'>Login</button>
        </Link>
        <Link href='/Register'>
        <button className='loginbutton'>Register</button>
        </Link>
       </div>
        <nav>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className='App-body'>
         <div className='content'>
          <div className='text-section'>
        <h1>Build Your Own</h1> 
      <p>A web app to help you on your entrepreneurial journey</p>
      <p>Are you tierd of feeling overwhelmed by the business startup process?Do you wish there was a roadmap to guide you through all the different steps?</p>
      <p>Build Your Own is here to help.Our app will walk you trough evrey step of startup process,from initial idea generation to launch and beyond.</p>
      
      </div>
      <div className='image-section'>
         <Image src={photo} alt="mainimg" />
        </div> 
        </div>
        </main>
      
      
      <div className="section-container">
  <h2 className="section-title">MORE THAN JUST A TOOL</h2>
  <p className="section-subtitle">Explore what else we can do for you</p>

  <div className="card-container">
    <div className="card">
      <div className="card-icon"></div>
      <h3 className="card-title">Customizable Roadmaps</h3>
      <p className="card-description">Choose your business type, and get a roadmap with step-by-step guidance.</p>
    </div>
    <div className="card">
      <div className="card-icon"></div>
      <h3 className="card-title">Milestone Rewards</h3>
      <p className="card-description">Track your progress, unlock badges for completed steps, and stay motivated.</p>
    </div>
    <div className="card">
      <div className="card-icon"></div>
      <h3 className="card-title">Guides & Resources</h3>
      <p className="card-description">Access practical tips, tutorials, and case studies at each stage.</p>
    </div>
    <div className="card">
      <div className="card-icon"></div>
      <h3 className="card-title">Community & Leaderboards</h3>
      <p className="card-description">Connect with other entrepreneurs and track your rank for added motivation.</p>
    </div>
    </div>
    </div>
      
    <div className="newsletter-container">
  <h2 className='join'>JOIN BYO</h2>
  <p className='ready'>Join Our Entrepreneurial Community!</p>

  <form className="newsletter-form">
    <div className="form-row">
      <input type="text" placeholder="First name" required/>
      <input type="text" placeholder="Last name" required/>
    </div>
    <div className="form-row">
      <input type="email" placeholder="Email" required/>
      <input type="tel" placeholder="Phone number" required/>
    </div>
    <input type="text" placeholder="Subject" required/>
    <textarea placeholder="Tell us something..." required></textarea>
    <button className='buton' type="submit">Send to BYO</button>
  </form>
</div>
     
     
     
      <footer>
        <div className="footer-section">
          <h3>Socialize with BYO</h3>
          <div className="social-icons">
            <a href="https://instagram.com">
             <Image src={instagramLogo} alt="Instagram" width={30} height={30}/>
            </a>
            <a href="https://facebook.com">
            <Image src={facebookLogo} alt="facebook" width={30} height={30}/>
            </a>
            <a href="https://linkedin.com">
            <Image src={linkedinLogo} alt="linkedin" width={30} height={30}/>
            </a>
            <a href="https://whatsapp.com">
            <Image src={whatsappLogo} alt="whatsapp" width={33} height={30}/>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact us</h3>
          <p>Address: Strada Palas 7A, Iasi 700259</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: buildyourown@ecommererce.com</p>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <p><a href="#create-account">Create account</a></p>
          <p><a href="#sign-in">Sign in</a></p>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <p><a href="#help-center">Help center</a></p>
          <p><a href="#privacy-terms">Privacy & terms</a></p>
          <p><a href="#blog">Blog</a></p>
          <p><a href="#faq">FAQ</a></p>
        </div>
      </footer>
    </div>
     
  );
}

export default App;