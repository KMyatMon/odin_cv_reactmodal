import BuilderInput from "../BuilderInput";
import { useState } from "react";
import Modal from 'react-modal';

export default function LangModal({
  langInfo,
  setLangInfo,
  onClick,
}) {
  const [isVisible, setIsVisible] = useState(langInfo.map(() => false));

  const addLangInfo = () => {
    const newEducationLevels = [
      ...langInfo,
      {
        name: "[Lang Name]"        
      },
    ];

    setLangInfo(newEducationLevels);
    setIsVisible([...isVisible, true]);
  };

  const toggleVisibility = (index) => {
    setIsVisible(
      isVisible.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleInfoChange = (input, value, index) => {
    const updatedSkillInfo = langInfo.map((info, i) => {
      if (i === index) {
        return { ...info, [input]: value };
      }
      return info;
    });

    setLangInfo(updatedSkillInfo);
  };

  const handleClearInput = (index) => {
    const updatedHobbyInfo = langInfo.map((info, i) => {
      if (i === index) {
        return {
          name: "[Lang Name]"
        };
      }
      return info;
    });

    setLangInfo(updatedHobbyInfo);
  };

  const handleDelete = (index) => {
    const updatedLangInfo = langInfo.filter((_, i) => i !== index);
    setLangInfo(updatedLangInfo);
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  return (
    <section
       // className="modal-fr"
    >
      <h3 className="" onClick={onClick}>
        <i className=""></i> Languages
      </h3>
      
      <section className="lists">
        {langInfo.map((lang, index) => (
          <section key={index} className="list">
            <h4
              className="post-title"
              onClick={() => toggleVisibility(index)}
            >
              {lang.name}
            </h4>
            {isVisible[index] && (
              <Modal
              isOpen={onClick}
              onRequestClose={onClick}
              className="modall"
              parentSelector={() => document.querySelector('#root')}
              >
                <h1 onClick={onClick}>
                    <span>Add New Language</span>
                </h1>
                <BuilderInput
                  label="Interest"
                  placeholder="Enter the interest"
                  type="text"
                  value={lang.name}
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
        onClick={addLangInfo}
      >
        <i className=""></i> ADD NEW
      </button>
    </section>
  );
}
