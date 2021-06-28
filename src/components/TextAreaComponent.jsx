import React from "react";

const TextAreaComponent = ({setState, label, value, field, placeholder = '', isDisabled = false, styleObj = {}}) => {
    return (
        <>
            <label className="form-label" dangerouslySetInnerHTML={{ __html: label }}></label>
            <textarea disabled={isDisabled} className="form-control" value={value} onChange={e => setState(field, e.target.value)} placeholder={placeholder} style={styleObj}></textarea>
        </>
    )
}

export default TextAreaComponent;
