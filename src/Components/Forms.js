import Buton from "./Buton";
import React,{useState} from "react";

import PModal from "./Modals/PModal";
import ExModal from "./Modals/ExModal";
import SkillsModal from "./Modals/SkillsModal";
import EduModal from "./Modals/EduModal";
import HobbyModal from "./Modals/HobbyModal";
import LangModal from "./Modals/LangModal";

export default function Forms({
  personalInfo,
  setPersonalInfo,
  eduInfo,
  setEduInfo,
  experienceInfo,
  setExperienceInfo,
  skillInfo,
  setSkillInfo,
  langInfo,
  setLangInfo,
  hobbyInfo,
  setHobbyInfo,
  }
) {
    const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(false);
    const [showEduInfoForm, setShowEduInfoForm] = useState(false);
    const [showWorkInfoForm, setShowWorkInfoForm] = useState(false);
    const [showSkillInfoForm, setShowSkillInfoForm] = useState(false);
    const [showHobbyInfoForm, setShowHobbyInfoForm] = useState(false);
    const [showLangInfoForm, setShowLangInfoForm] = useState(false);

    const handlePersonalInfoClicK = () => {
        if (showPersonalInfoForm) {
        setShowPersonalInfoForm(false);
        } else {
        setShowPersonalInfoForm(true);
        setShowWorkInfoForm(false);
        setShowSkillInfoForm(false);
        setShowHobbyInfoForm(false);
        setShowLangInfoForm(false);
        setShowEduInfoForm(false);
        }
    };
    const handleWorkInfoClick = () => {
        if (showWorkInfoForm) {
        setShowWorkInfoForm(false);
        } else {
          setShowPersonalInfoForm(false);
          setShowWorkInfoForm(true);
          setShowSkillInfoForm(false);
          setShowHobbyInfoForm(false);
          setShowLangInfoForm(false);
          setShowEduInfoForm(false);
        }
    };
    const handleSkillInfoClick = () => {
      if (showSkillInfoForm) {
      setShowSkillInfoForm(false);
      } else {
        setShowPersonalInfoForm(false);
        setShowWorkInfoForm(false);
        setShowSkillInfoForm(true);
        setShowHobbyInfoForm(false);
        setShowLangInfoForm(false);
        setShowEduInfoForm(false);
      }
  };
    const handleHobbyInfoClick = () => {
      if (showHobbyInfoForm) {
      setShowHobbyInfoForm(false);
      } else {
        setShowPersonalInfoForm(false);
        setShowWorkInfoForm(false);
        setShowSkillInfoForm(false);
        setShowHobbyInfoForm(true);
        setShowLangInfoForm(false);
        setShowEduInfoForm(false);
      }
  };
    const handleLangInfoClick = () => {
      if (showLangInfoForm) {
      setShowLangInfoForm(false);
      } else {
        setShowPersonalInfoForm(false);
        setShowWorkInfoForm(false);
        setShowSkillInfoForm(false);
        setShowHobbyInfoForm(false);
        setShowLangInfoForm(true);
        setShowEduInfoForm(false);
      }
  };
    const handleEduInfoClick = () => {
      if (showEduInfoForm) {
      setShowEduInfoForm(false);
      } else {
        setShowPersonalInfoForm(false);
        setShowWorkInfoForm(false);
        setShowSkillInfoForm(false);
        setShowHobbyInfoForm(false);
        setShowLangInfoForm(false);
        setShowEduInfoForm(true);
      }
  };

    return(
        <div>
          <ul> 
              <li>
                  {!showPersonalInfoForm ? (
                    <Buton onButtonClick={handlePersonalInfoClicK} ButtonText="Persoanal Information"/>
                  ) : (
                    <PModal
                      info={personalInfo}
                      setInfo={setPersonalInfo}
                      onClick={handlePersonalInfoClicK}
                    />
                  )}
              </li>       
              <li>
                  {!showWorkInfoForm ? (
                    <Buton onButtonClick={handleWorkInfoClick} ButtonText="Work Experience"/>
                  ) : (
                    <ExModal
                      experienceInfo={experienceInfo}
                      setExperienceInfo={setExperienceInfo}
                      onClick={handleWorkInfoClick}
                    />
                  )}
              </li>
              <li>
                  {!showEduInfoForm ? (
                    <Buton onButtonClick={handleEduInfoClick} ButtonText="Education"/>
                  ) : (
                    <EduModal
                      eduInfo={eduInfo}
                      setEduInfo={setEduInfo}
                      onClick={handleEduInfoClick}
                    />
                  )}
              </li>
              <li>
                  {!showSkillInfoForm ? (
                    <Buton onButtonClick={handleSkillInfoClick} ButtonText="Skills"/>
                  ) : (
                    <SkillsModal
                      skillInfo={skillInfo}
                      setSkillInfo={setSkillInfo}
                      onClick={handleSkillInfoClick}
                    />
                  )}
              </li>
              <li>
                  {!showHobbyInfoForm ? (
                    <Buton onButtonClick={handleHobbyInfoClick} ButtonText="Interests"/>
                  ) : (
                    <HobbyModal
                      hobbyInfo={hobbyInfo}
                      setHobbyInfo={setHobbyInfo}
                      onClick={handleHobbyInfoClick}
                    />
                  )}
              </li>
              <li>
                  {!showLangInfoForm ? (
                    <Buton onButtonClick={handleLangInfoClick} ButtonText="Languages"/>
                  ) : (
                    <LangModal
                      langInfo={langInfo}
                      setLangInfo={setLangInfo}
                      onClick={handleLangInfoClick}
                    />
                  )}
              </li>
          </ul>
        </div>
    )
}