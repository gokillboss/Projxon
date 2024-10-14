import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Carousel  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Custom CSS file
import 'aos/dist/aos.css'; // Animation library
import AOS from 'aos';
import { LuTrendingUp, LuUsers, LuLightbulb } from "react-icons/lu";
import { FaCogs, FaProjectDiagram, FaShoppingCart, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import client from '../assets/default-pic.jpg'


import InfoForm from '../components/InfoForm';

AOS.init();

const HomePage = () => {
    
    const services = [
        {
            icon: <FaCogs size={50} />,
            title: "Business Process Optimization",
            description: "Streamline your business processes to improve efficiency and reduce costs.",
            dataAOSDelay: "300"
        },
        {
            icon: <FaProjectDiagram size={50} />,
            title: "Project Management",
            description: "End-to-end project management services to ensure successful project outcomes.",
            dataAOSDelay: "400"
        },
        {
            icon: <FaShoppingCart size={50} />,
            title: "E-commerce Solutions",
            description: "Optimize your online sales with our comprehensive e-commerce solutions.",
            dataAOSDelay: "500"
        },
    ]

    const reasons = [
        {
            icon: <LuUsers size={50} />,
            title: "Expert Team",
            description: "Our team consists of industry experts with years of experience in their respective fields. With diverse backgrounds and deep knowledge, we bring unparalleled expertise to every project.",
            stat: "10",
            statSuffix: "+",
            statDescription: "years combined experience"
        },
        {
            icon: <LuTrendingUp size={50}  />,
            title: "Proven Results",
            description: "We have a track record of delivering successful projects and measurable improvements for our clients. Our results speak for themselves, with consistent client satisfaction and tangible outcomes.",
            stat: "95",
            statSuffix: "%",
            statDescription: "customer satisfaction rate"
        },
        {
            icon: <LuLightbulb size={50}  />,
            title: "Innovative Solutions",
            description: "We leverage the latest technologies and methodologies to provide innovative solutions to our clients. Our forward-thinking approach ensures that you stay ahead of the curve in your industry.",
            stat: "20",
            statSuffix: "+",
            statDescription: "innovative projects delivered"
        },
    ]

    const clients = [
        {
            image: client,
            quote: "PROJXON transformed our onboarding process, reducing it from 90 days to just 14 days. This efficiency gain translated to an additional 2.5 months of revenue annually. Their expertise in process optimization is unparalleled.",
            name: "Brandon D.",
            title: "CEO of XYZ Core"
        },
        {
            image: client,
            quote: "If it wasn't for PROJXON, my company wouldn't have been where it is today. They saved us time and showed us a clear path of where our company is heading.",
            name: "Jane Smith",
            title: "Operations Manager at ABC Inc"
        },
        {
            image: client,
            quote: "Thanks to PROJXON's innovative strategies, our operational costs decreased by 20% and our productivity improved dramatically. Their team is incredibly knowledgeable and dedicated.",
            name: "John Doe",
            title: "CEO of Tech Inc"
        },
    ]

    const AnimatedNumber = ({ value }) => {
        const [count, setCount] = useState(0);
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1, // Adjust the threshold as per your design needs
        });
      
        useEffect(() => {
          if (inView) {
            let start = 0;
            const end = value;
            const duration = 2000; // Duration for the animation (2 seconds)
            const increment = end / (duration / 16); // Increment per frame (60 FPS)
      
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                clearInterval(timer);
                setCount(end);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
      
            return () => clearInterval(timer);
          }
        }, [inView, value]);
      
        return <span ref={ref}>{count}</span>;
      };


    return (
        <>

            {/* Hero Section */}
            <div className="homepage-hero-section">
                <Container className="text-center text-white homepage-hero-content d-flex flex-column align-items-center">
                    <motion.h1 
                        className="homepage-hero-title"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Turning Chaos Into Opportunity
                    </motion.h1>
                    <motion.div 
                        className="w-25 bg-primary my-4 bg-warning" 
                        style={{ height: '4px' }}  
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    <motion.h2 
                        className="homepage-hero-subtitle mt-1"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Empowering medium-sized businesses to achieve their full potential
                    </motion.h2>
                    <motion.button 
                        className="mt-4 btn btn-primary fs-5 px-4 homepage-hero-button"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Get Started
                    </motion.button>
                </Container>
            </div>

            {/* Introductory Video Section */}
            <section className="text-center bg-black introduction">
                <Container>
                    <h2 data-aos="fade-up" className="mb-5 fw-bold fs-1 text-white mx-auto">Welcome to PROJXON</h2>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8}>
                            <div className="homepage-video-container rounded-3" data-aos="fade-up" data-aos-delay="500">
                                <iframe
                                    className="homepage-video-iframe"
                                    src="https://www.youtube.com/embed/ad79nYk2keg"
                                    allowFullScreen
                                    title="Introductory Video"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* Services Overview */}
            <section className="text-center mx-0 services">
                <h2 data-aos="fade-up" className="mb-5 fw-bold fs-1">Our Services</h2>
                <Row>
                    {services.map((service, index) => (
                        <Col key={index} md={4} className="homepage-service-card" data-aos="zoom-in" data-aos-delay={service.dataAOSDelay}>
                                <section className="mb-4">
                                    <div className="mb-3">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </section>    
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Choose Us Section */}
            <section className="bg-black choose-us">
                <Container className="text-center">
                    <h2 className="fw-bold fs-1 text-white">Why Choose Us?</h2>
                    <Row className="my-5">
                        {reasons.map((reason, index) => (
                            <Col key={index} md={12} lg={4} className='mb-4 choose-us-container' data-aos="fade-up" data-aos-delay="500">
                                <Card className="choose-us-card h-100">
                                    <Card.Body className='d-flex flex-column choose-us-body'>
                                        <div className='d-flex align-items-center mb-4'>
                                            {reason.icon}
                                            <Card.Title className='fs-4 ms-3 mb-0'>{reason.title}</Card.Title>
                                        </div>
                                        
                                        <Card.Text className='text-start text-muted mb-4 flex-grow-1'>{reason.description}</Card.Text>
                                        <div className='text-start border-top border-secondary-subtle pt-4'>
                                            <span className='fs-3 fw-bold'>
                                                <AnimatedNumber value={parseInt(reason.stat)} />
                                                {reason.statSuffix}
                                            </span>
                                            <span className='text-muted stat-desc d-block'>{reason.statDescription}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Client Testimonials */}
            <section className="testimonials">
                <Container className="text-center">
                    <h2 data-aos="fade-up" className="fw-bold fs-1 text-black">Testimonials</h2>
                    <Carousel>
                        {clients.map((client, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption>
                                    <img className="testimonial-img mb-5" src={client.image} alt="" />       
                                    <p className="mb-4 fs-5"><FaQuoteLeft className="quote-icon" size={25}/>{client.quote}</p>
                                    <h5>{client.name}</h5>
                                    <span>{client.title}</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>

            </section>
            

            {/* Call to Action Section */}
            <InfoForm />
        </>
    );
}

export default HomePage;