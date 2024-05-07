export default function BuilderInput({
    label,
    placeholder,
    type,
    value,
    onChange,
  }) {
    return (
      <div className="Binput">
        <label htmlFor="name" className="block">
          {label}
        </label>
        <input
          id="name"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  