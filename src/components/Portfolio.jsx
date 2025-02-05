import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import timeCapsuleImage from '../assets/images/timecapsulereadme.png';
import employeePayrollImage from '../assets/images/employeepayrollimage.png';
import taskBoard from '../assets/images/taskboard.png';
import noteTaker from '../assets/images/expressnotetaker.png';
import ecommerceBackend from '../assets/images/ecommercebackend.png';
import svgLogoMaker from '../assets/images/svglogomaker.png';

const projects = [
  {
    title: 'Time Capsule Group Project',
    imageUrl: timeCapsuleImage,
    deployedUrl: 'https://beeceetee.github.io/TimeCapsule/',
    githubUrl: 'https://github.com/BeeCeeTee/TimeCapsule',
  },
  {
    title: 'Employee Payroll Tracker',
    imageUrl: employeePayrollImage,
    deployedUrl: 'https://github.com/deepblueseas/employee-payroll-tracker',
    githubUrl: 'https://github.com/user/repo2',
  },
  {
    title: 'Task Board',
    imageUrl: taskBoard,
    deployedUrl: 'https://deepblueseas.github.io/task-board/',
    githubUrl: 'https://github.com/deepblueseas/task-board',
  },
  {
    title: 'Note Taker',
    imageUrl: noteTaker,
    deployedUrl: 'https://express-note-taker-2nps.onrender.com/',
    githubUrl: 'https://github.com/deepblueseas/express-note-taker',
  },
  {
    title: 'E-commerce Backend',
    imageUrl: ecommerceBackend,
    githubUrl: 'https://github.com/deepblueseas/ecommerce-backend',
  },
  {
    title: 'SVG Logo Maker',
    imageUrl: svgLogoMaker,
    githubUrl: 'https://github.com/deepblueseas/svg-logo-generator',
  },
];

export default function Portfolio() {
  return (
    <Container className="portfolio-container">
      <div className='portfolio-name'>
        <h2 className='portfolio-title'>Portfolio</h2>
        <h3>Below are some examples of applications I worked on in the CWRU Bootcamp Spring 2024</h3>
      </div>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="project-card">
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} className="project-image" />
              </a>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark project-button">
                  View on GitHub
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}