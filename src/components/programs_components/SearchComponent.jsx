import React from "react";

const SearchComponent = ({title, setTitle, location, setLocation, classes}) => {
    return (
        <form action="#">
            <input type="text" placeholder={'What would you like to study ?'} value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder={'Where ? E.g School name or location'}  value={location} onChange={e => setLocation(e.target.value)}/>
            <button type="button" className={"btn-primary "+classes}>Search</button>
        </form>
    )
}

export default SearchComponent;
