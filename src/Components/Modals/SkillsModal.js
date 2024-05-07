import BuilderInput from "../BuilderInput";
import { useState } from "react";
import Modal from 'react-modal';

export default function SkillsModal({
  skillInfo,
  setSkillInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(skillInfo.map(() => false));

  const addSkillInfo = () => {
    const newEducationLevels = [
      ...skillInfo,
      {
        name: "[Skill Name]"        
      },
    ];

    setSkillInfo(newEducationLevels);
    setIsVisible([...isVisible, true]);
  };

  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleInfoChange = (input, value, index) => {
    const updatedSkillInfo = skillInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setSkillInfo(updatedSkillInfo);
  };

  const handleClearInput = (index) => {
    const updatedSkillInfo = skillInfo.map((info, i) => {
      if (i === index) {
        return {
          name: "[Company Name]"
        };
      }
      return info;
    });

    setSkillInfo(updatedSkillInfo);
  };

  const handleDelete = (index) => {
    const updatedSkillInfo = skillInfo.filter((_, i) => i !== index);
    setSkillInfo(updatedSkillInfo);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section
       // className="modal-fr"
    >
      <h3 className="" onClick={onClick}>
        <i className=""></i> Skills
      </h3>
      
      <section className="lists">
        {skillInfo.map((skill, index) => (
          <section key={index} className="list">
            <h4
              className="post-title"
              onClick={() => toggleVisibility(index)}
            >
              {skill.name}
            </h4>
            {isVisible[index] && (
              <Modal
              isOpen={onClick}
              onRequestClose={onClick}
              className="modall"
              parentSelector={() => document.querySelector('#root')}
              >
                <h1 onClick={onClick}>
                    <span>Add your skills</span>
                </h1>
                <BuilderInput
                  label="Name Skill"
                  placeholder="Enter the skill"
                  type="text"
                  value={skill.name}
                  onChange={(e) =>
                    handleInfoChange("name", e.target.value, index)
                  }
                />
                <div className="">
                  <button
                    className="mini-btn"
                    onClick={() => handleDelete(index)}
                  >
                    DELETE
                  </button>
                  <button
                    className="mini-btn"
                    onClick={() => handleClearInput(index)}
                  >
                    CLEAR
                  </button>
                  <button
                    className="mini-btn"
                    onClick={onClick}
                  >
                    SAVE
                  </button>
                </div>
              </Modal>
            )}
          </section>
        ))}
      </section>

      <button
        className="add-btn"
        onClick={addSkillInfo}
      >
        <i className=""></i> ADD NEW
      </button>
    </section>
  );
}
