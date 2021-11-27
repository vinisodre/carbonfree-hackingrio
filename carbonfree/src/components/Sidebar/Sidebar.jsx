import React from 'react';
// import Coins from '.Coins'
import * as S from './styles';

function Sidebar() {
    return (
        <S.Sidebar>
            <S.Container>
                <S.Link>Minhas Informações</S.Link>
                <S.Link>Ranking</S.Link>
                <S.Link>Loja de Pontos</S.Link>
                <S.Link>Logout</S.Link>
                {/* <Coins /> */}
            </S.Container>
        </S.Sidebar>
    )
}

export default Sidebar;
