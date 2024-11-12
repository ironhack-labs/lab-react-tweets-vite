import React from 'react';


const ProfileImage = ({ userimage }) => {
    return (
        <img src={userimage}
            className="profile"
            alt="profile" />

    );
};

export default ProfileImage;