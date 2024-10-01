import React from 'react';
import { useState, useEffect } from "react"

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import InfoForm from '../components/InfoForm';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { getPosts } from '../services/api'
import { Link } from 'react-router-dom'


import './ResearchPage.css';

const ResearchPage = () => {

    const [blogs, setBlogs] = useState([])

    const cleanContent = (content) => {
        const sanitizedHtml = DOMPurify.sanitize(content)

        // Parse the content to extract the image src from <figure>
        const parser = new DOMParser();
        const doc = parser.parseFromString(sanitizedHtml, 'text/html');
        const figureImg = doc.querySelector('figure img');  // Selects the image inside <figure>

        let imgSrc = ''
        if (figureImg) {
            imgSrc = figureImg.getAttribute('src')
        }


        return { imgSrc }
    };

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
                <Row>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Blog</Card.Title>
                                <Card.Text>Discover insightful articles and updates from industry experts.</Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Events</Card.Title>
                                <Card.Text>Join our upcoming events and webinars to stay ahead in the industry.</Card.Text>
                                <Button variant="primary">View Events</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Articles</Card.Title>
                                <Card.Text>Read our detailed articles and case studies on various topics.</Card.Text>
                                <Button variant="primary">Explore Articles</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="research-card">
                            <Card.Body>
                                <Card.Title>Newsletter</Card.Title>
                                <Card.Text>Subscribe to our newsletter for the latest updates and exclusive content.</Card.Text>
                                <Button variant="primary">Subscribe</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            

            {/* Recent Blogs Section */}
            <Container className="my-5 container">
                <h2>Recent Posts</h2>
                <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3">

                    {blogs && blogs.map((blog) => {
                        
                        const { imgSrc } = cleanContent(blog.content.rendered)
                        const sanitizedExcerpt = cleanExcerpt(blog.excerpt.rendered)
                        const featuredMedia = blog._embedded['wp:featuredmedia'];
                        let sourceUrl = ''

                        if (featuredMedia && featuredMedia.length > 0) {
                            sourceUrl = featuredMedia[0].source_url
                        }

                        return (
                                <li key={blog.id} className="col mb-4 d-flex align-items-stretch">          
                                <Card className='overflow-hidden'>
                                    <Card.Img 
                                        variant="top" 
                                        className="blog-img w-100 object-fit-cover" 
                                        src={sourceUrl != null && imgSrc} 
                                        alt={blog.title.rendered} 
                                    />
                                    <Card.Body>
                                        <Card.Title className='mb-0'>{blog.title.rendered}</Card.Title>
                                        <div className='d-flex align-items-center gap-2 mt-1'>
                                            <span className='text-muted'>{blog._embedded.author[0].name}</span>
                                            <span className='text-muted dot-seperator fs-6'>•</span>
                                            <span className='text-muted'>{formatDate(blog.date)}</span>
                                        </div>
                                        <div className='clamped-container py-4'>
                                            <div dangerouslySetInnerHTML={{ __html: sanitizedExcerpt }}  className='card-excerpt text-muted'/>
                                        </div>
                                        <Link key={blog.id} to={`/research/${blog.id}`} className="mt-5">
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
