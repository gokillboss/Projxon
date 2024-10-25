// ServiceCarousel.js
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { FaCogs, FaProjectDiagram, FaShoppingCart, FaLaptopCode, FaChartLine, FaChalkboardTeacher, FaLightbulb, FaLeaf, FaSmile, FaGlobe, FaMoneyCheckAlt, FaDigitalTachograph } from 'react-icons/fa';
import ITConsulting from '../assets/ITConsulting.png';
import businessIMG from '../assets/business.png';

const ServiceCarousel = () => {
    return (
        <Carousel interval={3000} controls={true} indicators={true} pause={false}>
            {/* Business Process Optimization */}
            <Carousel.Item>
                <img className="d-block w-100" src={businessIMG} alt="Business Process Optimization" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="card-icon">
                            <FaCogs />
                        </div>
                        <div className="card-content">
                            <h3>Business Process Optimization</h3>
                            <p><strong>Workflow Analysis:</strong> Conduct a thorough analysis of current workflows to identify bottlenecks, redundancies, and inefficiencies.</p>
                            <p><strong>Process Re-engineering:</strong> Re-engineer core business processes with a focus on optimizing resources and minimizing waste.</p>
                            <p><strong>Performance Metrics and KPIs:</strong> Develop customized performance metrics that align with business goals and objectives, supported by real-time dashboards.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Project Management */}
            <Carousel.Item>
                <img className="d-block w-100" src={ITConsulting} alt="Project Management" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="card-icon">
                            <FaProjectDiagram />
                        </div>
                        <div className="card-content">
                            <h3>Project Management</h3>
                            <p><strong>Project Planning and Execution:</strong> Develop detailed project plans outlining scope, timelines, resources, and budgets, ensuring efficient execution.</p>
                            <p><strong>Agile Transformation:</strong> Assist businesses in adopting Agile methodologies for improved project delivery and adaptability.</p>
                            <p><strong>Risk Management:</strong> Identify, assess, and mitigate project risks to ensure successful outcomes.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* E-commerce Solutions */}
            <Carousel.Item>
                <img className="d-block w-100" src={businessIMG} alt="E-commerce Solutions" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-icon">
                            <FaShoppingCart />
                        </div>
                        <div className="card-content">
                            <h3>E-commerce Solutions</h3>
                            <p><strong>Platform Selection and Implementation:</strong> Help clients choose the right e-commerce platform and oversee its implementation.</p>
                            <p><strong>Digital Marketing Strategies:</strong> Develop and execute digital marketing campaigns to drive online sales and improve brand visibility.</p>
                            <p><strong>User Experience Optimization:</strong> Enhance the online shopping experience through UI/UX design improvements and personalized customer journeys.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* IT Consulting */}
            <Carousel.Item>
                <img className="d-block w-100" src={ITConsulting} alt="IT Consulting" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="card-icon">
                            <FaLaptopCode />
                        </div>
                        <div className="card-content">
                            <h3>IT Consulting</h3>
                            <p><strong>IT Strategy and Planning:</strong> Develop IT strategies aligned with business goals to drive digital transformation.</p>
                            <p><strong>System Integration:</strong> Integrate various IT systems to ensure seamless data flow and process automation.</p>
                            <p><strong>Cybersecurity:</strong> Implement robust cybersecurity measures to protect client data and IT infrastructure.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>


            {/* Data-Driven Decision Making */}
            <Carousel.Item>
                <img className="d-block w-100" src={ITConsulting} alt="Data-Driven Decision Making" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="card-icon">
                            <FaChartLine />
                        </div>
                        <div className="card-content">
                            <h3>Data-Driven Decision Making</h3>
                            <p><strong>Advanced Analytics:</strong> Use data analytics to provide actionable insights for decision-making.</p>
                            <p><strong>AI and Machine Learning Solutions:</strong> Implement AI and ML solutions to automate processes and predict business trends.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Customized Training Programs */}
            <Carousel.Item>
                <img className="d-block w-100" src={businessIMG} alt="Customized Training Programs" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="card-icon">
                            <FaChalkboardTeacher />
                        </div>
                        <div className="card-content">
                            <h3>Customized Training Programs</h3>
                            <p><strong>Employee Training:</strong> Develop and deliver training programs tailored to client needs, including process improvement, project management, and technology adoption.</p>
                            <p><strong>Leadership Development:</strong> Offer leadership training to help executives and managers lead change effectively within their organizations.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Innovation and R&D Consulting */}
            <Carousel.Item>
                <img className="d-block w-100" src={ITConsulting} alt="Innovation and R&D Consulting" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="700">
                        <div className="card-icon">
                            <FaLightbulb />
                        </div>
                        <div className="card-content">
                            <h3>Innovation and R&D Consulting</h3>
                            <p><strong>Innovation Workshops:</strong> Conduct workshops to foster a culture of innovation and generate new ideas.</p>
                            <p><strong>R&D Strategy:</strong> Assist clients in developing and executing R&D strategies to stay ahead of market trends.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Sustainability and CSR */}
            <Carousel.Item>
                <img className="d-block w-100" src={businessIMG} alt="Sustainability and CSR" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="800">
                        <div className="card-icon">
                            <FaLeaf />
                        </div>
                        <div className="card-content">
                            <h3>Sustainability and CSR</h3>
                            <p><strong>Sustainability Audits:</strong> Evaluate and improve the sustainability of client operations.</p>
                            <p><strong>CSR Initiatives:</strong> Develop and implement CSR programs that align with client values and enhance brand reputation.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Customer Experience Enhancement */}
            <Carousel.Item>
                <img className="d-block w-100" src={ITConsulting} alt="Customer Experience Enhancement" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="900">
                        <div className="card-icon">
                            <FaSmile />
                        </div>
                        <div className="card-content">
                            <h3>Customer Experience Enhancement</h3>
                            <p><strong>CX Strategy:</strong> Develop strategies to improve overall customer experience across all touchpoints.</p>
                            <p><strong>Customer Feedback Systems:</strong> Implement systems to capture and analyze customer feedback for continuous improvement.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Global Expansion Support */}
            <Carousel.Item>
                <img className="d-block w-100" src={businessIMG} alt="Global Expansion Support" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="1000">
                        <div className="card-icon">
                            <FaGlobe />
                        </div>
                        <div className="card-content">
                            <h3>Global Expansion Support</h3>
                            <p><strong>Market Entry Strategies:</strong> Assist clients in entering new markets with comprehensive market research and entry strategies.</p>
                            <p><strong>Localization Services:</strong> Provide localization services to adapt products and marketing materials for different regions.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Digital Transformation Consulting */}
            <Carousel.Item>
                <img className="d-block w-100" src={ITConsulting} alt="Digital Transformation Consulting" />
                <Carousel.Caption>
                    <Card className="service-card" data-aos="fade-up" data-aos-delay="1200">
                        <div className="card-icon">
                            <FaDigitalTachograph />
                        </div>
                        <div className="card-content">
                            <h3>Digital Transformation Consulting</h3>
                            <p><strong>Digital Strategy Development:</strong> Create digital transformation roadmaps to modernize business operations.</p>
                            <p><strong>Technology Adoption:</strong> Guide clients in adopting emerging technologies such as blockchain, IoT, and cloud computing.</p>
                        </div>
                    </Card>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ServiceCarousel;
