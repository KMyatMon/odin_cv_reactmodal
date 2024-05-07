function BuilderButton({ButtonText, onButtonClick}) {
    return(
        <div className="Bbutton" onClick={onButtonClick}>
            <span>{ButtonText}</span>
        </div>
    )
}

export default function Buton({ onButtonClick, ButtonText }) {
  return (
    <BuilderButton
        ButtonText = {ButtonText}
      onButtonClick={onButtonClick}
    />
  );
}
