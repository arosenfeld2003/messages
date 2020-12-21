import React from "react";
import API from "../../api";

const SearchForm = () => {
    return <div className="search-form">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Find user..." aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={(e) => {
                e.preventDefault();
                API.post("profile", {user: {
                    email: "lilia@gmail.com"
                }})
                .then((res) => {
                    console.log(res.data);
                }).catch((error) => {
                    console.log(error);
                })
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
            </button>
        </form>
    </div>
}

export default SearchForm;