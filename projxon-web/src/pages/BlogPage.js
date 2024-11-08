import React from 'react'
import { useState, useEffect } from "react"
import DOMPurify from 'dompurify';
import { Container } from 'react-bootstrap';
import { CiCalendar } from "react-icons/ci";

import { useParams } from 'react-router-dom'
import { fetchBlog } from '../services/blogService'
import './BlogPage.css';

const BlogPage = () => {

    const [blog, setBlog] = useState([])
    const { blogId } = useParams()
    const [loading, setLoading] = useState(true)

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


        return { sanitizedHtml, imgSrc }
    };

    const formatDate = (date) => {
        const dateObj = new Date(date);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate
    }

    useEffect(() => {
        const loadBlog = async () => {
            try{
                const response = await fetchBlog(blogId)
                setBlog(response)
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoading(false)
            }

        }
        loadBlog()

    }, [blogId])

    if (loading) {
        return <div></div>;
    }

    const { sanitizedHtml } = cleanContent(blog.content.rendered)
    const featuredMedia = blog._embedded['wp:featuredmedia'];
    let sourceUrl = ''

    if (featuredMedia && featuredMedia.length > 0) {
        sourceUrl = featuredMedia[0].source_url
    }

    return (
        <>    
        
            <Container className='w-50 blog-container px-3'>
                      
                <article className='my-5 py-2'>
                    <header>
                        <h1 className='fw-bold'>{blog.title.rendered}</h1>


                        <div className="d-flex items-center justify-content-between mb-3 blogpage-date mt-3">

                            <p className="fw-semibold fs-6">{blog._embedded.author[0].name}</p>
                            <div className="d-flex items-center text-muted gap-1">
                                <CiCalendar size={20} />
                                <time dateTime={blog.date} className='text-muted'>{formatDate(blog.date)}</time>
                            </div>
                        
                        </div>
                    </header>
                    
                    <img 
                        className="w-100 blogpage-img" 
                        src={sourceUrl} 
                        alt={blog.title.rendered} 
                    />

                    <div className='mt-5' dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

            
                </article> 
            </Container> 
                
        </>
    )
}

export default BlogPage