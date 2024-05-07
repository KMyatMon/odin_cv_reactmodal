import Modal from 'react-modal';
import BuilderInput from '../BuilderInput';

export default function PModal({ info, setInfo, onClick }) {
  const handleInfoChange = (input, value) => {
    const newInfo = { ...info, [input]: value };
    setInfo(newInfo);
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
      
      <BuilderInput id="cvProfilePicture" type="file" onChange={onClick} />

      <br></br>
      
      <button className='mini-btn' onClick={onClick}>SAVE</button>
    </Modal>
  );
}
