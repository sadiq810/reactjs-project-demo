import React from "react";

const SortComponent = ({sort, setSort, wrapperClass = ''}) => {
    return (
        <div className={"col-lg-3 col-md-6 col-sm-12 sort--drpdown"+wrapperClass}>
            <select className="form-select" value={sort} onChange={e => setSort(e.target.value)}>
                <option value={'asc'} selected> Program name A-Z</option>
                <option value="desc">Program name Z-A</option>
            </select>
            <span>Sort by:</span>
        </div>
    )
}

export default SortComponent;
