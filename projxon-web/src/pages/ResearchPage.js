import { useState, useEffect } from "react"

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LuBookOpen , LuCalendar, LuFileText, LuMail } from "react-icons/lu";

import AOS from 'aos';
import 'aos/dist/aos.css';

import InfoForm from '../components/InfoForm';
import BlogCard from '../components/BlogCard';

import { fetchBlogs } from '../services/blogService'

import './ResearchPage.css';


const ResearchPage = () => {

    const cards = [
        {
            icon: <LuBookOpen size={23} />,
            title: 'Blog',
            description: 'Stay Updated with the Latest News, Events, and Insights.',
            action: 'Read More'
        },
        {
            icon: <LuCalendar size={23} />,
            title: 'Events',
            description: 'Join our upcoming events and webinars to stay ahead in the industry.',
            action: 'View Events'
        },
        {
            icon: <LuFileText size={23} />,
            title: 'Articles',
            description: 'Read our detailed articles and case studies on various topics.',
            action: 'Explore Articles'
        },
        {
            icon: <LuMail size={23} />,
            title: 'Newsletter',
            description: 'Subscribe to our newsletter for the latest updates and exclusive content.',
            action: 'Subscribe'
        },
    ]

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        AOS.init({ duration: 1200 })
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


    return (
        <>
            {/* Hero Section */}
            <div className="research-hero-section text-center">
                <Container className="services-hero-content text-center">
                    <h1 className="research-title text-uppercase">Blog & Research</h1>
                    <p className="hero-subtitle">Stay Updated with the Latest News, Events, and Insights</p>
                </Container>
            </div>

            {/* Research Content Section */}
            <Container className="my-5">
                <Row className="g-4">
                    {cards.map((card, index) => (
                        <Col key={index} lg={3} md={6} sm={12}>
                            <Card className="research-card h-100">
                                <Card.Body className='d-flex flex-column'>
                                    <div className='d-flex align-items-center'>
                                        {card.icon}
                                        <Card.Title className='fs-4 ms-2 mb-0'>{card.title}</Card.Title>
                                    </div>
                                    
                                    <Card.Text className='flex-grow-1'>{card.description}</Card.Text>
                                    <Button variant="primary" className='research-button'>
                                        {card.action}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            

            {/* Recent Blogs Section */}
            <Container className="my-5 container">
                <h2 className='mb-3'>Recent Posts</h2>
                <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {blogs && blogs.map((blog, index) => (    
                         <BlogCard blog={blog} key={index}/>                    
                    ))}
                </ul> 
            </Container>


            {/* Footer CTA Section */}
            <div className="research-footer-cta text-center py-5">

                <InfoForm />
            </div>
        </>
    );
};

export default ResearchPage;
