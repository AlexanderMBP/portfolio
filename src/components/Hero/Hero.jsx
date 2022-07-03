import './Hero.css';
import keyboard from  '../../assets/images/keyboard.svg'
import Button from '../Button/Button.jsx';
import arrow from '../../assets/icons/arrow.svg'

function Hero() {
  return (
    <div className="hero">
        <div className="hero__body">
            <div className="hero__text">
                <h3 className='hero__text-secondary'>Hello, i’m Alexander</h3>
                <h1 className='hero__text-primary'>Full Stack Web Developer</h1>
                <h4 className='hero__text-muted'>Pro-active and creative MERN Stack developer.</h4>
            </div>
            <img className='hero__img' src={keyboard} alt="Keyboard" />
        </div>
        <Button content='See my work' icon={arrow} iconAlt='Arrow icon' href='#mywork'/>
    </div>
  );
}

export default Hero;
