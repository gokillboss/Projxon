import { useEffect } from 'react';

import './AboutPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLightbulb , FaBalanceScale , FaUsers, FaLinkedinIn  } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/Hero';
import InfoForm from '../components/InfoForm';
import BlackCard from '../components/BlackCard';

import whoWeAre from '../assets/who-we-are.webp'
import phelan from '../assets/team/phelan.webp'
import kathy from '../assets/team/kathy.webp'
import donavon from '../assets/team/donavon.webp'
import melissa from '../assets/team/melissa.webp'

import bast from '../assets/team/bast.webp'
import dania from '../assets/team/dania.webp'
import megha from '../assets/team/megha.webp'
import alexandria from '../assets/team/alexandria.webp'


const AboutPage = () => {

    const values = [
        {
            icon: <FaLightbulb size={45} className="text-yellow" />,
            title: "Innovation",
            description: "We constantly seek out new ideas and approaches to stay ahead of industry trends and provide our clients with cutting-edge solutions.",
        },
        {
            icon: <FaBalanceScale size={45} className="text-yellow" />,
            title: "Integrity",
            description: "We believe in doing business with honesty and transparency, building trust with our clients and partners through ethical practices.",
        },
        {
            icon: <FaUsers size={45} className="text-yellow" />,
            title: "Collaboration",
            description: "We work closely with our clients and partners, fostering a collaborative environment that drives success for everyone involved."
        },
    ]

    const consultingLeads = [
        {
            image: phelan,
            name: "Mark Phelan",
            title: "Senior Consultant,",
            specialty: "E-Commerce Solutions",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/phelanmarkw' }
            ]
        },
        {
            image: kathy,
            name: "Kathy Seaton",
            title: "Senior Consultant,",
            specialty: "Non Profit Development",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/klseaton' }
            ]
        },
        {
            image: donavon,
            name: "Donavon Roberson",
            title: "Senior Consultant,",
            specialty: "Tech + Software Solutions",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/donavonroberson' }
            ]
        },
        {
            image: melissa,
            name: "Melissa Eboli",
            title: "Senior Consultant,",
            specialty: "Health + Wellness Solutions",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/viamelissa' }
            ]
        },
    ]

    const teamLeads = [
        {
            image: bast,
            name: "Bast Herrera",
            title: "Team Lead,",
            specialty: "Program Development",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/vincentcherrera' }
            ]
        },
        {
            image: dania,
            name: "Dania Ali",
            title: "Team Lead,",
            specialty: "Operations + Strategy",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: '#'}
            ]
        },
        {
            image: megha,
            name: "Megha Vinjamuru",
            title: "Team Lead,",
            specialty: "Project Management",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/meghanethra'}
            ]
        },
        {
            image: alexandria,
            name: "Alexandria Boreman",
            title: "Team Lead,",
            specialty: "Marketing + Creative",
            socials : [
                { icon : <FaLinkedinIn size={20} />, href: '#'}
            ]
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <Hero title="About PROJXON" subtitle="Empowering Businesses to Reach Their Full Potential" backgroundClass="about-us-hero"/>

            {/* Who We Are Section */}
            <section className='who-we-are'>
                <Container className="my-5 overflow-hidden">
                    <Row className='align-items-center g-5'>
                        <Col md={12} lg={6} data-aos="fade-up" data-aos-once="true">
                            <img className='overflow-hidden rounded object-fit-cover w-100' src={whoWeAre} alt="who we are"/>
                        </Col>

                        <Col  md={12} lg={6} data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
                            <h1 className="text-uppercase fw-bolder mb-3">Who Are We?</h1>
                            <h2 className='fw-bolder fs-4'> PROJXON is a leading business consulting firm helping medium-sized businesses achieve their full potential.</h2>
                            <p className='fs-5 mt-3'>
                                PROJXON offers a wide range of services, including business process optimization, project management, and strategic planning, to help our clients navigate challenges, optimize operations, and drive sustainable growth. 
                            </p>
                            <p className='fs-5'>
                                Our team of experts is dedicated to providing tailored solutions, innovative strategies, and expert guidance to help businesses innovate, grow, and succeed.
                            </p>
                            <Button className='yellow-button mt-3'>Get Started</Button>
                        </Col> 
                    </Row>   
                </Container>
            </section>
            
            {/* Our Mission & Vision Section */}
            <section className='mission-vision bg-yellow overflow-hidden'>
                <Container>
                    <Row className='g-5'>
                        <Col sm={12} md={6} className="mb-4 p-lg-5" data-aos="fade-up">
                            <section className='w-100'>
                                <h2 className='fs-1 mb-4 text-uppercase fw-bold'>Our Mission</h2>
                                <p className='fs-5'>
                                    At PROJXON, our mission is to empower medium-sized businesses to achieve their full potential through tailored solutions, innovative strategies, and expert guidance. We strive to help our clients navigate challenges, optimize operations, and drive sustainable growth.
                                </p>
                            </section>       
                        </Col>
                        <Col sm={12} md={6} className="mb-4 p-lg-5" data-aos="fade-up">
                            <section className='w-100'>
                                <h2 className='fs-1 mb-4 text-uppercase fw-bold'>Our Vision</h2>
                                <p className='fs-5'>
                                    We envision a world where businesses can easily access the expertise and tools they need to thrive in a rapidly changing environment. By offering cutting-edge solutions and unparalleled support, we aim to be the go-to partner for businesses looking to innovate, grow, and succeed.
                                </p>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Our Values Section */}
            <section className="bg-black our-values">
                <Container className="text-center">
                    <h2 className="fw-bold sections-heading text-yellow" data-aos="fade-up" data-aos-once="true">Our Core Values</h2>
                    <Row className="my-5 g-5">
                        {values.map((value, index) => (
                            <BlackCard key={index} item={value} isStat={false}/>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Our Team Section */}
            <section className='bg-yellow-team our-team'>
                <Container>
                    <Row className="justify-content-center mb-4 mb-md-5">
                        <Col lg={6} xl={5} className="text-center">
                            <h2 className="sections-heading fw-bold mb-3">Meet Our Team</h2>
                            <p className="our-team-sub-heading mb-3">
                                Our talented team combines vision, skill, and innovation to create exceptional results for our clients.
                            </p>
                        </Col>
                    </Row>

                    <h2 className='fw-bold sections-heading'>Consulting Leads</h2>
                    <Row className="text-center">
                        {consultingLeads.map((member, i) => (
                            <Col md={6} lg={3} key={i} className='mb-5 our-team-card-body'>
                                <div className="our-team-card mt-4 d-flex flex-column h-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="img-fluid w-100"
                                    />
                                    <div className="px-3 py-4 px-xl-4 text-white d-flex flex-column flex-grow-1">
                                        <h4 className="mb-2">{member.name}</h4>
                                        <h6>{member.title}</h6>
                                        <h6>{member.specialty}</h6>
                                        <div className="mt-auto">
                                            {member.socials.map((link, index) => (
                                                <a href={link.href} className='text-yellow social-icons' key={index} target='_blank' rel="noopener noreferrer">
                                                    {link.icon}
                                                </a>
                                            ))}
                                        </div>                                    
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>


                    <h2 className='fw-bold sections-heading mt-5'>Delivery Team Leads</h2>
                    <Row className="text-center">
                        {teamLeads.map((member, i) => (
                            <Col md={6} lg={3} key={i} className='mb-5 our-team-card-body'>
                                <div className="our-team-card mt-4 d-flex flex-column h-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="img-fluid w-100"
                                    />
                                    <div className="px-3 py-4 px-xl-4 text-white d-flex flex-column flex-grow-1">
                                        <h4 className="mb-2">{member.name}</h4>
                                        <h6>{member.title}</h6>
                                        <h6>{member.specialty}</h6>
                                        <div className="mt-auto">
                                            {member.socials.map((link, index) => (
                                                <a href={link.href} className='text-yellow social-icons' key={index} target='_blank' rel="noopener noreferrer">
                                                    {link.icon}
                                                </a>
                                            ))}
                                        </div>                                     
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            

            {/* Company History Section */}
            {/* <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-down">Our Journey</h2>
                <Row className="justify-content-center">
                    <Col md={6} data-aos="fade-up">
                        <h3>Milestones and Achievements</h3>
                        <p>
                            From our humble beginnings, we have achieved numerous milestones, including expanding our client base internationally, developing proprietary solutions, and being recognized as industry leaders in business consulting. Our journey is a testament to our commitment to excellence and continuous improvement.
                        </p>
                    </Col>
                </Row>
            </Container> */}

            {/* Call to Action Section */}
            <InfoForm data-aos="fade-up" data-aos-delay="900" />
        </div>
    );
}

export default AboutPage;
