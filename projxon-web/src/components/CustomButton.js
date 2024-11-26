import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

const AnimatedButton = ({ buttonText, link, buttonStyle, delayTime, isExternal, isAnimated }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,  
        threshold: 0.1,     
    });

    return (
        isAnimated ? (
            isExternal ? (
                <a href={link} target='_blank' rel="noopener noreferrer" ref={ref}>
                    <motion.button 
                            className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: delayTime }}    
                    >
                        {buttonText}
                    </motion.button>
                </a>
            ) : (
                <Link to={link} ref={ref}>
                    <motion.button 
                            className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: delayTime }}      
                    >
                        {buttonText}
                    </motion.button>
                </Link>
            )
        ) : (
            isExternal ? (
                <a href={link} target='_blank' rel="noopener noreferrer" ref={ref}>
                    <button className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}>
                        {buttonText}
                    </button>
                </a>
            ) : (
                <Link to={link} ref={ref}>
                    <button className={`btn btn-primary fs-5 px-4 ${buttonStyle}`}>
                        {buttonText}
                    </button>
                </Link>
            )

        )
    )
}

export default AnimatedButton