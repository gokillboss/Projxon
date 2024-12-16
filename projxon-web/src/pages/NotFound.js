
import Hero from '../components/Hero';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        {/* Hero Section */}
        <Hero title="404 - Page Not Found"/>
        <section className='sections-container'>
            <h1 className="mt-5 text-center">Return back to <Link to="/" className='link-secondary'>home</Link></h1>
        </section>
    </div>
  )
}

export default NotFound