import BuilderInput from "../BuilderInput";
import { useState } from "react";
import Modal from 'react-modal';

export default function HobbyModal({
  hobbyInfo,
  setHobbyInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(hobbyInfo.map(() => false));

  const addHobbyInfo = () => {
    const newEducationLevels = [
      ...hobbyInfo,
      {
        name: "[Hobby Name]"        
      },
    ];

    setHobbyInfo(newEducationLevels);
    setIsVisible([...isVisible, true]);
  };

  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleInfoChange = (input, value, index) => {
    const updatedSkillInfo = hobbyInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setHobbyInfo(updatedSkillInfo);
  };

  const handleClearInput = (index) => {
    const updatedHobbyInfo = hobbyInfo.map((info, i) => {
      if (i === index) {
        return {
          name: "[Company Name]"
        };
      }
      return info;
    });

    setHobbyInfo(updatedHobbyInfo);
  };

  const handleDelete = (index) => {
    const updatedHobbyInfo = hobbyInfo.filter((_, i) => i !== index);
    setHobbyInfo(updatedHobbyInfo);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section
       // className="modal-fr"
    >
      <h3 className="" onClick={onClick}>
        <i className=""></i> Interests
      </h3>
      
      <section className="lists">
        {hobbyInfo.map((hobby, index) => (
          <section key={index} className="list">
            <h4
              className="post-title"
              onClick={() => toggleVisibility(index)}
            >
              {hobby.name}
            </h4>
            {isVisible[index] && (
              <Modal
              isOpen={onClick}
              onRequestClose={onClick}
              className="modall"
              parentSelector={() => document.querySelector('#root')}
              >
                <h1 onClick={onClick}>
                    <span>Add Your Hobby</span>
                </h1>
                <BuilderInput
                  label="Interest"
                  placeholder="Enter the interest"
                  type="text"
                  value={hobby.name}
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
        onClick={addHobbyInfo}
      >
        <i className=""></i> ADD NEW
      </button>
    </section>
  );
}
