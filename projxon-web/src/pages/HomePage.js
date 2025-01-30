import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Custom CSS file
import 'aos/dist/aos.css'; // Animation library
import AOS from 'aos';
import { motion } from 'framer-motion'
import { useState, useEffect } from "react"

import { Container, Row, Col, Carousel, Card  } from 'react-bootstrap';
import { LuTrendingUp, LuUsers, LuLightbulb } from "react-icons/lu";
import { FaQuoteLeft, FaMobile, FaCogs, FaProjectDiagram, FaShoppingCart, FaLaptopCode } from 'react-icons/fa';

import client from '../assets/homepage/default-pic.jpg'
import market from '../assets/homepage/services-img/market.webp'
import eccom from '../assets/homepage/services-img/ecom.webp'
import business from '../assets/homepage/services-img/business.webp'
import manage from '../assets/homepage/services-img/manage.webp'
import it from '../assets/homepage/services-img/it.webp'

import BlogCard from '../components/BlogCard';
import BlackCard from '../components/BlackCard';
import CustomButton from '../components/CustomButton';
import CallToAction from '../components/CallToAction';
import { fetchBlogs } from '../services/blogService'
import { fetchClients } from '../services/clientService';


AOS.init();

const HomePage = () => {
    
    const services = [
        {
            image: market,
            icon: <FaMobile size={40} />,
            title: "Marketing + Social Media",
            description: "Amplify your brand's impact with expert marketing and social media strategies. Engage your audience, accelerate growth, and redefine your digital presence.",
            dataAOSDelay: "150"
        },
        {
            image: eccom,
            icon: <FaShoppingCart size={40} />,
            title: "E-commerce Solutions",
            description: "Transform your online business with tailored e-commerce solutions. Optimize performance, boost sales, and enhance customer satisfaction.",
            dataAOSDelay: "350"
        },
        {
            image: business,
            icon: <FaCogs size={40} />,
            title: "Business Process Optimization",
            description: "Streamline your operations and enhance efficiency with our business optimization services. Achieve greater productivity and profitability.",
            dataAOSDelay: "550"
        },
        {
            image: manage,
            icon: <FaProjectDiagram size={40} />,
            title: "Project Management",
            description: "Ensure timely, budget-friendly project delivery with our expert management services. We focus on seamless project process management with an emphasis on continuity to improve efficiency and achieve your goals.",
            dataAOSDelay: "250"
        },
        {
            image: it,
            icon: <FaLaptopCode size={40} />,
            title: "IT + Tech Integrations",
            description: "Boost your business with our innovative IT solutions. We design custom IT and tech packages to increase efficiencies and maximize output.",
            dataAOSDelay: "450"
        },
    ]

    const reasons = [
        {
            icon: <LuUsers size={64} className="text-yellow"/>,
            title: "Expert Team",
            description: "Our team consists of industry experts with years of experience in their respective fields. With diverse backgrounds and deep knowledge, we bring unparalleled expertise to every project.",
            stat: "10",
            statSuffix: "+",
            statDescription: "years combined experience"
        },
        {
            icon: <LuTrendingUp size={64} className="text-yellow"/>,
            title: "Proven Results",
            description: "We have a track record of delivering successful projects and measurable improvements for our clients. Our results speak for themselves, with consistent client satisfaction and tangible outcomes.",
            stat: "95",
            statSuffix: "%",
            statDescription: "customer satisfaction rate"
        },
        {
            icon: <LuLightbulb size={64} className="text-yellow" />,
            title: "Innovative Solutions",
            description: "We leverage the latest technologies and methodologies to provide innovative solutions to our clients. Our forward-thinking approach ensures that you stay ahead of the curve in your industry.",
            stat: "20",
            statSuffix: "+",
            statDescription: "innovative projects delivered"
        },
    ]

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        AOS.init({ duration: 800 })
        const loadBlogs = async () => {
            try{
                const response = await fetchBlogs()
                setBlogs(response)
            }
            catch(error){
                console.log(error)
            }
        }
        loadBlogs()
    }, [])

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const loadClients = async () => {
            const response = await fetchClients();
            setClients(response);
        };
        loadClients();
    }, []);


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
                        className="w-25 my-4 homepage-hero-divider" 
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
                    <CustomButton buttonText="Get Started" link="/contact" buttonStyle="mt-4 yellow-button" delayTime={0.7} isAnimated={true}/>
                </Container>
            </div>

            {/* About Us Section */}
            <section className="text-center introduction bg-yellow">
                <Container>
                    <h2 className="mb-5 fw-bold fs-3 text-black mx-auto text-uppercase">About</h2>
                    <p data-aos="fade-up" data-aos-once="true" className="fs-4 text-black">
                        PROJXON is a leading Holistic Business Optimization Consulting Agency, partnering with high-impact
                        organizations across the Health & Wellness, Tech, and Nonprofit sectors. Our customized business strategies are
                        designed to tackle chaos, transforming potential failures into opportunities for growth and scalable success.
                        Through strategic and tailored consulting, we drive growth, enhance productivity, and increase market value for
                        our clients.
                    </p>
                    <hr className="divider"/>
                    <CustomButton buttonText="Learn About Us" link="/about" buttonStyle="black-button" delayTime={0.3} isAnimated={true}/>
                </Container>

            </section>

            {/* Introductory Video Section */}
            <section className="text-center bg-black introduction">
                <Container>
                    <h2 data-aos="fade-up" data-aos-once="true" className="mb-5 fw-bold text-yellow mx-auto sections-heading">Welcome to PROJXON</h2>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8}>
                            <div className="homepage-video-container rounded-3" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
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
            <section className="bg-yellow services">
                <Container className="overflow-hidden">
                    <Row className="gy-4 gy-md-5 gy-lg-0 align-items-center">
                        <Col md={12} lg={5}>
                            <Row>
                                <Col xs={12} xl={11} data-aos="fade-up"data-aos-once="true">
                                    <h3 className="fs-6 mb-3 mb-xl-4 text-uppercase text-black">Our Services</h3>
                                    <h2 className="display-5 mb-3 mb-xl-4 text-black">We are giving you perfect solutions with our proficient services.</h2>
                                    <p className="mb-3 mb-xl-4 text-black">
                                    Our commitment in helping brands reach their full potential is dynamic and unconventional providing strategic and customized consulting plans that drive growth, enhance productivity, and increase market value.
                                    </p>
                                    <CustomButton buttonText="See Services" link="/services" buttonStyle="black-button"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} lg={7}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div>
                                        {services.slice(0, 3).map((service, index) => (
                                            <Card
                                                className="p-3 border-0 mt-4 homepage-service-card"
                                                key={index}
                                                style={{
                                                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                                >                                                     
                                                <Card.Body className='text-white'>
                                                    <div className="text-yellow">{service.icon}</div>
                                                    <h3 className="my-4 fs-5 text-yellow">{service.title}</h3>
                                                    <p className="text-gray mt-3">{service.description}</p>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="mt-md-5 pt-md-5">
                                        {services.slice(3, 5).map((service, index) => (
                                            <Card
                                                className={`p-3 border-0 homepage-service-card ${service.title === 'Project Management' ? 'mt-0' : 'mt-4'}`}
                                                key={index}
                                                style={{
                                                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            >                                               
                                                <Card.Body className='text-white'>
                                                    <div className="text-yellow">{service.icon}</div>
                                                    <h4 className="my-4 fs-5 text-yellow">{service.title}</h4>
                                                    <p className="text-gray mt-3">{service.description}</p>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Choose Us Section */}
            <section className="bg-black choose-us">
                <Container className="text-center">
                    <h2 className="fw-bold sections-heading text-yellow" data-aos="fade-up" data-aos-once="true">Why Choose Us?</h2>
                    <Row className="my-5 g-5">
                        {reasons.map((reason, index) => (
                            <BlackCard key={index} item={reason} isStat={true}/>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Client Testimonials */}
            <section className="testimonials bg-yellow carousel-dark slide">
                <Container className="text-center" data-aos="fade-up" data-aos-once="true">
                    <h2 className="fw-bold text-black sections-heading">Testimonials</h2>
                    <Carousel>
                        {clients.map((client, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption>
                                    <img className="testimonial-img mb-5" src={client.image} alt={`${client.name}`} loading='lazy' />       
                                    <p className="mb-4 fs-5"><FaQuoteLeft className="quote-icon" size={25}/>{client.quote}</p>
                                    <h3 className='fs-5'>{client.name}</h3>
                                    <span>{client.title}</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </section>
                        

            {/* Blogs Section */}
            {blogs && blogs.length > 0 && (
                <section className='bg-black'>
                    <Container className="blogs">
                        <h2 className='mb-5 sections-heading text-white'>
                            Our Latest Blogs
                            <span className="blog-heading-border mt-2"></span>
                        </h2>
                        <ul className={`list-unstyled row row-cols-1 row-cols-md-2 ${blogs.length === 2 ? "row-cols-lg-2" : "row-cols-lg-3"}`}>
                            {blogs && blogs.slice(0,3).map((blog, index) => (    
                                <BlogCard blog={blog} key={index} blogStyle="dark"/>                    
                            ))}
                        </ul> 
                        <div className='d-flex justify-content-center mt-5'>
                            <CustomButton buttonText="See All Blogs" link="/research" buttonStyle="yellow-button"/>
                        </div>
                    </Container>
                </section>
            )}
            
            
            {/* Call to Action Section */}
            <CallToAction />
            
        </>
    );
}

export default HomePage;