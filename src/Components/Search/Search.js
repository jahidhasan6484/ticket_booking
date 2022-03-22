import React, { useState } from 'react';
import Options from './Options';
import './Search.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from 'react-icons/fa';



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

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="search">
            <form>
                <label>Departure</label>
                <input type="radio" name="search_type" value="departure" onChange={handleChange} ></input>

                <input type="radio" name="search_type" value="return" onChange={handleChange} ></input>
                <label>Return</label>
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

                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showWeekNumbers
                        isClearable
                        dateFormat="MMMM d, yyyy"
                        placeholderText="June 11, 2019"
                    />

                    <FaSearch />
                </form>
            }


        </div>
    );
};

export default Search;