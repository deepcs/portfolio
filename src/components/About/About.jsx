import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Technical enthusiast skilled in Web development and Data analysis having strong knowledge of Teradata, Tableau, MERN Stack, Python, Photoshop, Software Requirements, Software Testing.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '7+ years of extensive experience in providing strategic IT Solutions in Banking/Financial Services/Healthcare. Experience in diverse areas of SDLC, which includes Requirement Analysis, Architect/Design, Development, Testing, Implementation, Maintenance and leading of Enterprise scale multi-tier server/client side applications. .'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Strong SQL knowledge, UML Design experience in designing/database using VISIO and development in ,  Git, React, Redux, Ionic, Adobe XD (for prototype), C#, ASP.NET Core, ASP.NET MVC, UML, TypeScript, MS TEST, REST Services, JQuery, Bootstrap, AJAX, JSON, Agile, TDD, Entity Framework,  Design Pattern and architecture, XML, WSDL, HTML, Oracle 10, SQL Server 8/12/14, MongoDB, Visual Studio, ATOM.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
