function InputField({ type, name, label, value, onChange, placeholder }) {
    return (
      <div className="field">
        <label className="label" htmlFor={name}>{label}</label>
        <div className="control">
          <input
            className="input"
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
  

export default InputField;

