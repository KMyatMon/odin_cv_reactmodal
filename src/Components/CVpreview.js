import { Container, Row, Col } from 'react-grid-system';
import React,{useState} from 'react';
import Personal from "./Showcase/Personal";
import Experience from "./Showcase/Experience";
import Skills from './Showcase/Skills';
import Edu from './Showcase/Edu';
import Hobby from './Showcase/Hobby';
import Lang from './Showcase/Lang';

export default function CVpreview({information, experienceInfo, skillInfo, hobbyInfo, langInfo, eduInfo}) {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }  
  return(
        <Container className='cv-preview'>
          <Row>
            <Col lg={4} className='aside'>
              <div className='img-part'>
                <img src={file} alt='user' className='pic'/>
                <input type="file" onChange={handleChange} />
              </div>
              <br></br>
              <h3>SKILLS</h3>
              <br></br>
              <div className='container'>
                {skillInfo.map((skill, index) => (
                  <Skills
                    key={index}
                    name={skill.name}
                  />
                ))}
              </div>
              
              <br></br>
              <h3>HOBBIES</h3>
              <br></br>
              <div className='container'>
                {hobbyInfo.map((hobby, index) => (
                  <Hobby
                    key={index}
                    name={hobby.name}
                  />
                ))}  
              </div>
              <br></br>
              <h3>LANGUAGES</h3>
              <br></br>
              <div className='container'>
                {langInfo.map((lang, index) => (
                  <Lang 
                    key={index}
                    name={lang.name} />
                ))}
              </div>
            </Col>
            <Col lg={8} className=''>
              <div className='container'>
                <Personal className="p-section"
                    // photo={information.photo}
                    name={information.fullName}
                    position={information.position}
                    address={information.address}
                    bio ={information.bio}
                    phoneNumber={information.phoneNumber}
                    email={information.email}
                    portfolio={information.portfolio}
                  />
              </div>  
              <br></br>
              <h3>EXPERIENCE</h3>
              <div className='container'>
               {experienceInfo.map((experience, index) => (
                <Experience
                  key={index}
                  company={experience.company}
                  location={experience.location}
                  position={experience.position}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  description={experience.description}
                />
              ))} 
              </div>
              <br></br>
              <h3>EDUCATION</h3>
              <div className='container'>
               {eduInfo.map((edu, index) => (
                <Edu
                  key={index}
                  name={edu.name}
                  school={edu.school}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                />
              ))} 
              </div>
              <br></br>
            </Col>
          </Row>
            
        </Container>
    )
}