import BuilderInput from "../BuilderInput";
import { useState } from "react";
import Modal from 'react-modal';

export default function EduModal({
  eduInfo,
  setEduInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(eduInfo.map(() => false));

  const addEduInfo = () => {
    const newEduLevels = [
      ...eduInfo,
      {
        name: "[name]",
        school:"[school]",
        startDate: "[Start Date]",
        endDate: "[End Date]",
      },
    ];

    setEduInfo(newEduLevels);
    setIsVisible([...isVisible, true]);
  };
  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };
  const handleInfoChange = (input, value, index) => {
    const updatedEduInfo = eduInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setEduInfo(updatedEduInfo);
  };
  const handleClearInput = (index) => {
    const updatedEduInfo = eduInfo.map((info, i) => {
      if (i === index) {
        return {
          name: "[name]",
          school:"[school]",
          startDate: "[Start Date]",
          endDate: "[End Date]",
        };
      }
      return info;
    });

    setEduInfo(updatedEduInfo);
  };
  const handleDelete = (index) => {
    const updatedEduInfo = eduInfo.filter((_, i) => i !== index);
    setEduInfo(updatedEduInfo);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h3 className="" onClick={onClick}>
        <i className=""></i> Education
      </h3>
      
      <section className="lists">
        {eduInfo.map((edu, index) => (
          <section key={index} className="list">
            <h4
              className="post-title"
              onClick={() => toggleVisibility(index)}
            >
              {edu.name}
            </h4>
            {isVisible[index] && (
              <Modal
              isOpen={onClick}
              className="modall"
              parentSelector={() => document.querySelector('#root')}
              >
                <h1 onClick={onClick}>
                    <span>Add Certificates</span>
                </h1>
                <BuilderInput
                  label="Schoo"
                  placeholder="Enter the school name"
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    handleInfoChange("school", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="name"
                  placeholder="Enter your certificate name"
                  type="text"
                  value={edu.name}
                  onChange={(e) =>
                    handleInfoChange("name", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="Start Date"
                  placeholder="Enter the start date"
                  type="text"
                  value={edu.startDate}
                  onChange={(e) =>
                    handleInfoChange("startDate", e.target.value, index)
                  }
                />
                <BuilderInput
                  label="End Date"
                  placeholder="Enter the end date"
                  type="text"
                  value={edu.endDate}
                  onChange={(e) =>
                    handleInfoChange("endDate", e.target.value, index)
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
        onClick={addEduInfo}
      >
        <i className=""></i> ADD NEW
      </button>
    </section>
  );
}
