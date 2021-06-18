import React from "react";

const CardUserInfo = ({data = {}, loading, errorMessage = '', noResults = false}) => {
    return (
        <>
            <div className='container-user-info'>
                <img src={data.avatar_url} alt={data.name}/>
                <p>{data.login}</p>
                <p>{data.name}</p>
            </div>
            <div className="input-group-append">
                {loading ?
                    <span>Loading...</span> : <></>
                }
            </div>
        </>
    );
};

export default CardUserInfo;