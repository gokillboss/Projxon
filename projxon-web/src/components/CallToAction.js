import './CallToAction.css';

import { Container } from 'react-bootstrap';
import AnimatedButton from '../components/AnimatedButton';


const CallToAction = () => {
  return (
    <section className='call-to-action' loading='lazy'>
        <Container className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <div>
                <h2 className="fw-bold text-white sections-heading">Ready to <span className='text-yellow'>Transform Your Business</span></h2>
                <p className='mt-3 mb-5 text-gray fs-5'>Contact us today to discuss how we can help you achieve your business goals.</p>
                <AnimatedButton 
                    buttonText="Contact Us" 
                    link="https://share.hsforms.com/1bKYf6vDKT9WleJf4zPxwUgrx61e"
                    buttonStyle="yellow-button" 
                    delayTime={0}
                    isExternal={true}
                />
            </div>
        </Container>
    </section>
  )
}

export default CallToAction