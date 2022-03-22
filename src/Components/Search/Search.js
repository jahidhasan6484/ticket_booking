import React, { useState } from 'react';
import Options from './Options';
import './Search.css';

const Search = () => {

    const [fromData, setFromData] = useState({
        selectedName: "",
        selectedType: "",
        showSearch: false,
    });


    const handleChange = (e) => {
        const searchName = e.target.name;
        const searchType = e.target.value;
        if (searchType === "departure") {
            setTo(false);
            setFrom(true);
        }
        else if (searchType === "return") {
            setTo(true);
            setFrom(false);
        };

        setFromData({
            ...fromData,
            selectedName: searchName,
            selectedType: searchType,
            showSearch: true,


        })

    }

    const [from, setFrom] = useState(false);

    const [to, setTo] = useState(false);

    return (
        <div className="search">
            <form>
                <div>
                    <label>Departure</label>
                    <input type="radio" name="search_type" value="departure" onChange={handleChange} ></input>

                    <input type="radio" name="search_type" value="return" onChange={handleChange} ></input>
                    <label>Return</label>
                </div>
            </form>

            {
                fromData.showSearch &&
                <form>
                    <label for="from">From: </label>
                    {
                        to ? <select name="from" id="from">
                            <option value="Daffodil Smart City">Daffodil Smart City</option>
                        </select> : <select name="from" id="from">
                            <Options />
                        </select>
                    }

                    <label for="to">To: </label>
                    {
                        from ? <select name="to" id="to">
                            <option value="Daffodil Smart City">Daffodil Smart City</option>
                        </select> : <select name="to" id="to">
                            <Options />
                        </select>
                    }

                </form>
            }
        </div>
    );
};

export default Search;