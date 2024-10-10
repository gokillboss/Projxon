import React from 'react';
import { useState, useEffect } from "react"

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import InfoForm from '../components/InfoForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DOMPurify from 'dompurify';
import { LuBookOpen , LuCalendar, LuFileText, LuMail } from "react-icons/lu";
import { getPosts } from '../services/api'
import { Link } from 'react-router-dom'


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

    const cleanExcerpt = (excerpt) => {
        return DOMPurify.sanitize(excerpt);
    };
    
    const formatDate = (date) => {
        const dateObj = new Date(date);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate
    }

    useEffect(() => {
        AOS.init({ duration: 1200 })
        const fetchBlogs = async () => {
            try{
                const response = await getPosts()
                setBlogs(response)
            }
            catch(error){
                console.log(error)
            }

        }
        fetchBlogs()

    }, [])


    return (
        <>
            {/* Hero Section */}
            <div className="research-hero-section text-center">
                <Container className="services-hero-content text-center">
                    <h1 className="research-title">Blog & Research</h1>
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

                    {blogs && blogs.map((blog) => {
                        
                        const sanitizedExcerpt = cleanExcerpt(blog.excerpt.rendered)
                        const featuredMedia = blog._embedded['wp:featuredmedia'];
                        let sourceUrl = ''

                        if (featuredMedia && featuredMedia.length > 0) {
                            sourceUrl = featuredMedia[0].source_url
                        }

                        return (
                            <li key={blog.id} className="col mb-4 d-flex align-items-stretch" data-aos="fade-up">  
                                    
                                <Card className='overflow-hidden blog-card h-100'>
                                    <Link to={`/research/${blog.id}`}>
                                        <Card.Img 
                                            variant="top" 
                                            className="blog-img w-100 object-fit-cover" 
                                            src={sourceUrl} 
                                            alt={blog.title.rendered} 
                                        />
                                    </Link>

                                    <Card.Body className='d-flex flex-column'>
                                        <Link to={`/research/${blog.id}`} className='blog-card-title'>
                                            <Card.Title className='mb-0'>{blog.title.rendered}</Card.Title>
                                        </Link>

                                        <div className='d-flex align-items-center gap-2 mt-1'>
                                            <span className='text-muted'>{blog._embedded.author[0].name}</span>
                                            <span className='text-muted dot-seperator fs-6'>•</span>
                                            <span className='text-muted'>{formatDate(blog.date)}</span>
                                        </div>
                                        <div className='clamped-container py-4 flex-grow-1'>
                                            <div dangerouslySetInnerHTML={{ __html: sanitizedExcerpt }}  className='card-excerpt text-muted'/>
                                        </div>
                                        <Link key={blog.id} to={`/research/${blog.id}`} className="mt-auto">
                                            <Button variant="primary blog-button">Read More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </li>
                        )
                    })}
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
