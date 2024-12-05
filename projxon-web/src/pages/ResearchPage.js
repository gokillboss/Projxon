import { useState, useEffect } from "react"

import { Container, Button } from 'react-bootstrap';
// import { LuBookOpen , LuCalendar, LuFileText, LuMail } from "react-icons/lu";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';


import { fetchBlogs } from '../services/blogService'

import './ResearchPage.css';


const ResearchPage = () => {

    // const cards = [
    //     {
    //         icon: <LuBookOpen size={23} />,
    //         title: 'Blog',
    //         description: 'Stay Updated with the Latest News, Events, and Insights.',
    //         action: 'Read More'
    //     },
    //     {
    //         icon: <LuCalendar size={23} />,
    //         title: 'Events',
    //         description: 'Join our upcoming events and webinars to stay ahead in the industry.',
    //         action: 'View Events'
    //     },
    //     {
    //         icon: <LuFileText size={23} />,
    //         title: 'Articles',
    //         description: 'Read our detailed articles and case studies on various topics.',
    //         action: 'Explore Articles'
    //     },
    //     {
    //         icon: <LuMail size={23} />,
    //         title: 'Newsletter',
    //         description: 'Subscribe to our newsletter for the latest updates and exclusive content.',
    //         action: 'Subscribe'
    //     },
    // ]

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [visibleBlogs, setVisibleBlogs] = useState(6)

    const handleLoadMore = () => {
        setVisibleBlogs((prev) => prev + 6)
    }

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
        const loadBlogs = async () => {
            try{
                const response = await fetchBlogs()
                setBlogs(response)
                console.log(response)
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }
        loadBlogs()
    }, [])

    


    return (
        <>
            {/* Hero Section */}
            <Hero title="Blog & Research" subtitle="Stay Updated with the Latest News, Events, and Insight"/>


            {/* Research Content Section */}
            {/* <Container className="my-5">
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
            </Container> */}
            

            {/* Recent Blogs Section */}

                <section className="sections-container blog-section">
                    <Container className="container">
                        <h2 className='mb-5'>
                            Recent Posts                         
                            <span className="blog-heading-border mt-2"></span>
                        </h2>

                        { loading ? (
                            <div className="text-center my-5">
                                <LoadingSpinner />
                            </div>
                        ) : blogs.length > 0 ? (
                            <>
                                <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                    {blogs && blogs.slice(0, visibleBlogs).map((blog, index) => (    
                                        <BlogCard blog={blog} key={index}/>                    
                                    ))}
                                </ul> 
                                {visibleBlogs < blogs.length && (
                                    <div className="text-center mt-4">
                                        <Button onClick={handleLoadMore} className="fs-5 px-4 black-button">
                                            Load More
                                        </Button>
                                    </div>
                                )}
                            </>
                            ) : (
                                <div className="text-center my-5">
                                    <p>No blog posts at the moment.</p>
                                </div>
                            )}
                    </Container>
                </section>
            {/* Call to Action Section */}
            <CallToAction />
        </>
    );
};

export default ResearchPage;
