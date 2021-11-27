import React from 'react'
import * as S from "./styles"
import user from "../../assets/images/user.svg";

const ProfilePicture = () => {
    return (
        <>
            <S.Image src={user} alt="usuário" />
        </>
    )
}

export default ProfilePicture
