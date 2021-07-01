import { RangeSlider } from 'rsuite';

import React from "react";

const RangeSliderComponent = ({field, setState, data}) => {
    const changeHandler = (values) => {
        setState(field, {from: values[0], to: values[1]});
    }

    return (
        <RangeSlider defaultValue={[0, 100]} onChange={changeHandler} value={[data.from, data.to]}/>
    );
}

export default RangeSliderComponent;
