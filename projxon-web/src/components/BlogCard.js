import DOMPurify from 'dompurify';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './BlogCard.css';
import blogDefaultImg from '../assets/research/default-blog-img.webp'



const BlogCard = ({ blog, blogStyle }) => {
    const cleanExcerpt = (excerpt) => {
        return DOMPurify.sanitize(excerpt);
    };
    
    const formatDate = (date) => {
        const dateObj = new Date(date);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate
    }

    const sanitizedExcerpt = cleanExcerpt(blog.excerpt.rendered)
    const featuredMedia = blog._embedded['wp:featuredmedia'];

    let sourceUrl = ''

    if (featuredMedia && featuredMedia.length > 0) {
        sourceUrl = featuredMedia[0].source_url
    }   

    return (
        <li key={blog.id} className="col mb-4" data-aos="fade-up">                                  
            <Card className={`overflow-hidden blog-card h-100 ${blogStyle === 'dark' ? "bg-black" : "bg-light"}`}>
                <Link to={`/research/${blog.slug}`}>
                    <Card.Img 
                        variant="top" 
                        className="blog-img w-100 object-fit-cover" 
                        src={sourceUrl ? sourceUrl : blogDefaultImg} 
                        alt={blog.title.rendered} 
                    />
                </Link>

                <Card.Body className={`d-flex flex-column ${blogStyle === 'dark' && "px-0"}`}>
                    <Link to={`/research/${blog.slug}`} className={`blog-card-title ${blogStyle === 'dark' ? "text-white" : "text-black"}`}>
                        <Card.Title className='mb-0'>{blog.title.rendered}</Card.Title>
                    </Link>

                    <div className='d-flex align-items-center gap-2 mt-1'>
                        <span className={`${blogStyle === 'dark' ? "text-gray" : "text-muted"}`}>{blog._embedded.author[0].name}</span>
                        <span className={`${blogStyle === 'dark' ? "text-gray" : "text-muted"} dot-seperator fs-6`}>•</span>
                        <span className={`${blogStyle === 'dark' ? "text-gray" : "text-muted"}`}>{formatDate(blog.date)}</span>
                    </div>
                    <div className='clamped-container py-4 flex-grow-1'>
                        <div dangerouslySetInnerHTML={{ __html: sanitizedExcerpt }}  className={`card-excerpt ${blogStyle === 'dark' ? "text-gray" : "text-muted"}`}/>
                    </div>
                    <Link key={blog.id} to={`/research/${blog.slug}`} className="mt-auto">
                        <Button variant="primary blog-button">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </li>
    )
}

export default BlogCard


