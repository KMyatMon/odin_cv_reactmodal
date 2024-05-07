import BuilderInput from "../BuilderInput";
import { useState } from "react";
import Modal from 'react-modal';

export default function ExModal({
  experienceInfo,
  setExperienceInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(experienceInfo.map(() => false));

  const addExperienceInfo = () => {
    const newEducationLevels = [
      ...experienceInfo,
      {
        company: "[Company Name]",
        position: "[Position]",
        location: "[Location]",
        startDate: "[Start Date]",
        endDate: "[End Date]",
        description: "[Description]",
      },
    ];

    setExperienceInfo(newEducationLevels);
    setIsVisible([...isVisible, true]);
  };

  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleInfoChange = (input, value, index) => {
    const updatedExperienceInfo = experienceInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setExperienceInfo(updatedExperienceInfo);
  };

  const handleClearInput = (index) => {
    const updatedExperienceInfo = experienceInfo.map((info, i) => {
      if (i === index) {
        return {
          company: "[Company Name]",
          position: "[Position]",
          location: "[Location]",
          startDate: "[Start Date]",
          endDate: "[End Date]",
          description: "[Description]",
        };
      }
      return info;
    });

    setExperienceInfo(updatedExperienceInfo);
  };

  const handleDelete = (index) => {
    const updatedExperienceInfo = experienceInfo.filter((_, i) => i !== index);
    setExperienceInfo(updatedExperienceInfo);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h3 className="" onClick={onClick}>
        <i className=""></i> Work Experience
      </h3>
      
      <section className="lists">
        {experienceInfo.map((experience, index) => (
          <section key={index} className="list">
            <h4
              className="post-title"
              onClick={() => toggleVisibility(index)}
            >
              {experience.company}
            </h4>
            {isVisible[index] && (
              <Modal
              isOpen={onClick}
              onRequestClose={onClick}
              className="modall"
              parentSelector={() => document.querySelector('#root')}
              >
                <h1 onClick={onClick}>
                    <span>Add Work Experience</span>
                </h1>
                <BuilderInput
                  label="Company"
                  placeholder="Enter the company"
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    handleInfoChange("company", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Location"
                  placeholder="Enter your location"
                  type="text"
                  value={experience.location}
                  onChange={(e) =>
                    handleInfoChange("location", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Position"
                  placeholder="Enter your position"
                  type="text"
                  value={experience.position}
                  onChange={(e) =>
                    handleInfoChange("position", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Start Date"
                  placeholder="Enter the start date"
                  type="text"
                  value={experience.startDate}
                  onChange={(e) =>
                    handleInfoChange("startDate", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="End Date"
                  placeholder="Enter the end date"
                  type="text"
                  value={experience.endDate}
                  onChange={(e) =>
                    handleInfoChange("endDate", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Description"
                  placeholder="Enter a description"
                  type="text"
                  value={experience.description}
                  onChange={(e) =>
                    handleInfoChange("description", e.target.value, index)
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
        onClick={addExperienceInfo}
      >
        <i className=""></i> ADD NEW
      </button>
    </section>
  );
}
