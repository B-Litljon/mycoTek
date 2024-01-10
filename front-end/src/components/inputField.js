function InputField(type, name, value, onChange, placeholder, label) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
                placeHolder={placeholder}
            />
        </div>
    );
}

export default InputField;