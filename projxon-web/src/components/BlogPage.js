import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Container } from 'react-bootstrap';

import { useParams } from 'react-router-dom'

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

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-US', options);
        return formattedDate
    }

    useEffect(() => {
        const fetchBlog = async () => {
            try{
                const response = await axios.get(`http://projxon.local/wp-json/wp/v2/posts/${blogId}?_embed`)
                setBlog(response.data)
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoading(false)
            }

        }
        fetchBlog()

    }, [blogId])

    if (loading) {
        return <div></div>;
    }

    const { sanitizedHtml, imgSrc } = cleanContent(blog.content.rendered)

    return (
        <>    
            <Container>
                      
                <div className='mt-5'>
                    <h2>{blog.title.rendered}</h2>
                    <h5>{blog._embedded.author[0].name}</h5>
                    <p>{formatDate(blog.date)}</p>

                    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

            
                </div> 
            </Container> 
                
        </>
    )
}

export default BlogPage