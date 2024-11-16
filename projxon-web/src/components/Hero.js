import './Hero.css';
import { Container } from 'react-bootstrap';

const Hero = ({ title, subtitle, backgroundClass }) => {
  return (
    <div className={`hero-section ${backgroundClass}`}>
        <Container className="text-center hero-content">
            <h1 className="hero-title text-uppercase">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
        </Container>
    </div>
  )
}

export default Hero