import React, {useState} from 'react';
import { Container, Row, Col } from 'react-grid-system';
// import { PDFDownloadLink } from "react-pdf/renderer";

import Forms from './Forms'
import CVpreview from './CVpreview'
import '../App.css'

const defaultPersonalInfo = {
  // photo: "C:/Users/kmyat/OneDrive/Pictures/Screenshots/orebi.png",
  // photo:"",
  fullName: "[Name]",
  position: "[Career]",
  address: "[Address]",
  bio: "[I'm a passionate and driven web developer with experience in front-end development, back-end development, and database design. I'm always looking for new challenges and opportunities to grow my skills and expand my knowledge of the latest web technologies. ]",
  phoneNumber: "09123456789",
  email: "[Email Address]",
  portfolio: "[https://github.com/DarkWool/]",
};
const defaultEduInfo = [
  {
   name: "BcSc.CS",
   school: "KMT University",
   startDate: "2/3/2018",
   endDate: "1/12/2023",
  }
  // {
  //   academicLevel: "Senior High School",
  //   universityName: "[University Name]",
  //   city: "[City]",
  //   country: "[Country]",
  //   course: "[Course]",
  //   graduationDate: "[Graduation Date]",
  // },
];
const defaultExperienceInfo = [
  {
    company: "[Company Name]",
    location: "[Location]",
    position: "[Position]",
    startDate: "[Start Date]",
    endDate: "[End Date]",
    description: "[Description]",
  },
];
const defaultSkillInfo = [
  {
    name: "[Skill Name]"
  },
];
const defaultHobbyInfo = [
  {
    name: "[Hobby Name]"
  },
];
const defaultLangInfo = [
  {
    name: "[Language Name]"
  },
];


export default function Main() {
  const [information, setInformation] = useState(defaultPersonalInfo);
  const [eduInfo, setEduInfo] = useState(defaultEduInfo);
  const [experienceInfo, setExperienceInfo] = useState(defaultExperienceInfo);
  const [skillInfo, setSkillInfo] = useState(defaultSkillInfo);
  const [hobbyInfo, setHobbyInfo] = useState(defaultHobbyInfo);
  const [langInfo, setLangInfo] = useState(defaultLangInfo);
  
    return(
        <>
      <Container className='main'>
        <Row>
          <Col sm={12} md={4} lg={3} className='frame-fr'>
            <Forms 
              personalInfo={information}
              setPersonalInfo={setInformation}
              eduInfo={eduInfo}
              setEduInfo={setEduInfo}
              experienceInfo={experienceInfo}
              setExperienceInfo={setExperienceInfo}
              skillInfo = {skillInfo}
              setSkillInfo = {setSkillInfo}
              langInfo={langInfo}
              setLangInfo={setLangInfo}
              hobbyInfo={hobbyInfo}
              setHobbyInfo={setHobbyInfo}
            />
            <div className="preview_download">
            {/* <PDFDownloadLink
              document={
                <CVPdf
                  profilePicture={profilePicture}
                  personalData={personalData}
                  educationData={educationData}
                  workData={workData}
                  skills={skills}
                  languages={formattedLanguages}
                  interests={interests}
                />
              }
              fileName={personalData.firstName ? `cv-${personalData.firstName}.pdf` : "cv.pdf"}
              className="btn-primary border-radius-4"
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  "Loading document..."
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" width="22" height="22">
                      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                    </svg>
                    Download as PDF
                  </>
                )
              }
            </PDFDownloadLink> */}
          </div>
          </Col>
          <Col sm={12} md={8} lg={9} className='frame-sec'>
            <CVpreview 
              information={information}
              experienceInfo={experienceInfo}
              skillInfo={skillInfo}
              langInfo = {langInfo}
              eduInfo={eduInfo}
              hobbyInfo={hobbyInfo}
            />
          </Col>
        </Row>
      </Container>
        </>
    );
}