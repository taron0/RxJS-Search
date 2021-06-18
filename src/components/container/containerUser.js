import React, { useEffect, useState } from "react";
import CardUserInfo from "../user";
import { getUserData } from "../../service/userService";
import { debounce } from '../../helpers/helperFunctions';

const ContainerUser = () => {
    const [userData, setUserData] = useState({});
    const [inputValue, setInputValue] = useState('');

    const searchValue = debounce(function (e) {
        setInputValue(e.target.value);
    }, 1000);

    useEffect(() => {
        getUserData(inputValue)
            .then((res) => setUserData(res))
            .catch(console.error);
    }, [inputValue]);

    const handleChange = (e) => {
        searchValue(e);
    };
    return (
        <div className="container">
            <input
                type='text'
                onChange={handleChange}
                placeholder='search...'
            />
            <CardUserInfo
                data={userData}
            />
        </div>
    );
};

export default ContainerUser;