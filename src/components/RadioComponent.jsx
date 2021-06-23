import React from "react";

const RadioComponent = ({setState, field, value, name, label}) => {
    return (
        <>
            <input className="form-check-input" type="radio" name={name} value={value} onClick={() => setState(field, value)} required={'required'}/>
            <label className="form-check-label">{label}</label>
        </>
    )
}

export default RadioComponent;
