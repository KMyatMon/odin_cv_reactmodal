import Modal from 'react-modal';
import BuilderInput from '../BuilderInput';

export default function PModal({ info, setInfo, onClick }) {
  const handleInfoChange = (input, value) => {
    const newInfo = { ...info, [input]: value };
    setInfo(newInfo);
    console.log(newInfo)
  };

  return (
    <Modal
        isOpen={onClick}
        onRequestClose={onClick}
        className="modall"
        parentSelector={() => document.querySelector('#root')}
        >
      <h1 onClick={onClick}>
          <span>Personal Information</span>
      </h1>
      {/* <BuilderInput
        label="Photo"
        placeholder="Enter your photo"
        type="file"
        value={info.photo} // Pass the current state value
        onChange={(e) => handleInfoChange("photo", e.target.value)}
      /> */}
      <BuilderInput
        label="Name"
        placeholder="Enter your name"
        type="text"
        value={info.fullName} // Pass the current state value
        onChange={(e) => handleInfoChange("fullName", e.target.value)}
      />
      <BuilderInput
        label="Position"
        placeholder="Enter your position"
        type="text"
        value={info.position} // Pass the current state value
        onChange={(e) => handleInfoChange("position", e.target.value)}
      />
      <BuilderInput
        label="Bio"
        placeholder="Enter your bio"
        type="text"
        value={info.bio} // Pass the current state value
        onChange={(e) => handleInfoChange("bio", e.target.value)}
      />
      <BuilderInput
        label="Address"
        placeholder="Enter your address"
        type="text"
        value={info.address} // Pass the current state value
        onChange={(e) => handleInfoChange("address", e.target.value)}
      />
      <BuilderInput
        label="Phone Number"
        placeholder="Enter your phone number"
        type="number"
        value={info.phoneNumber} // Pass the current state value
        onChange={(e) => handleInfoChange("phoneNumber", e.target.value)}
      />
      <BuilderInput
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={info.email} // Pass the current state value
        onChange={(e) => handleInfoChange("email", e.target.value)}
      />
      <BuilderInput
        label="Portfolio"
        placeholder="Enter your porfolio link"
        type="portfolio"
        value={info.portfolio} // Pass the current state value
        onChange={(e) => handleInfoChange("portfolio", e.target.value)}
      />
      <br></br>
      
      <button className='mini-btn' onClick={onClick}>SAVE</button>
    </Modal>
  );
}
