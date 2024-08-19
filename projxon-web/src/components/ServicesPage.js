import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesPage.css';
import { FaCogs, FaProjectDiagram, FaShoppingCart, FaLaptopCode, FaChartLine, FaChalkboardTeacher, FaLightbulb, FaLeaf, FaSmile, FaGlobe, FaMoneyCheckAlt, FaDigitalTachograph } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoForm from './InfoForm';


const ServicesPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="services-hero-section justify-content-md-center" data-aos="fade-in">
                <Container className="text-center hero-content ">
                    <h1 className="hero-title">Our Premium Services</h1>
                    <p className="hero-subtitle">Crafted with Excellence, Delivered with Precision</p>
                </Container>
            </div>

            {/* Services Grid */}
            <Container className="my-5 services-container">
                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Card className="service-card" data-aos="fade-up" data-aos-delay="1100">
                            <div className="card-icon">
                                <FaMoneyCheckAlt />
                            </div>
                            <div className="card-content">
                                <h3>Financial Consulting</h3>
                                <p><strong>Financial Planning and Analysis:</strong> Offer financial planning, budgeting, and analysis services to help clients manage their finances effectively.</p>
                                <p><strong>Funding and Investment Advisory:</strong> Assist clients in securing funding and making sound investment decisions.</p>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>


            </Container>
            <InfoForm />
            
        </div>
    );
}

export default ServicesPage;
