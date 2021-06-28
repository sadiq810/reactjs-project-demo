import React from "react";

const TextBoxComponent = ({setState, label, value, field, placeholder = '', isDisabled = false}) => {
    return (
        <>
            <label className="form-label" dangerouslySetInnerHTML={{ __html: label }}></label>
            <input type="text" disabled={isDisabled} className="form-control" value={value} onChange={e => setState(field, e.target.value)} placeholder={placeholder}/>
        </>
    )
}

export default TextBoxComponent;
