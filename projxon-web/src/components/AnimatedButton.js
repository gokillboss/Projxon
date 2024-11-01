import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

const AnimatedButton = ({buttonText, link, buttonStyle, delayTime}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,  
        threshold: 0.1,     
    });

    return (
        <Link to={link} ref={ref}>
            <motion.button 
                    className={`about-us-button btn btn-primary fs-5 px-4 ${buttonStyle}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: delayTime }}    
            >
                {buttonText}
            </motion.button>
        </Link>
    )
}

export default AnimatedButton