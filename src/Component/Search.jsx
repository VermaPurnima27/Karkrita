import React, { useState } from "react";
import "./Search.css";

export default function Search() {

    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText.trim() === "") {
            alert("Please enter something to search");
            return;
        }

        console.log("Searching for:", searchText);
    };


    return (
        <div className="search-page">

            <div className="search-container">

                <h1>Search Products</h1>

                <p>
                    Find your favourite handcrafted products
                </p>


                <form
                    className="search-box"
                    onSubmit={handleSearch}
                >

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchText}
                        onChange={(e) =>
                            setSearchText(e.target.value)
                        }
                    />

                    <button type="submit">
                        <span>Search</span>
                    </button>

                </form>


                {searchText && (
                    <p className="search-result">
                        Searching for: <strong>{searchText}</strong>
                    </p>
                )}

            </div>

        </div>
    );
}