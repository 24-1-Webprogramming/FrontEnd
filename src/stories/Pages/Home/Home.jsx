import React from 'react';
import Header from '../../Component/Header';
import NavBar from '../../Component/NavBar';
import styled from 'styled-components';

import {HeadLine, CharacterSector} from './HomeS';
import FixedButtonContainer from '../../Component/FixedButtonContainer';

const Home = () => {
    return (
        <>
            <Container>
                <Header showIcon={true} text="홈" backButton={false} />
                <HeadLine/>
                <CharacterSector/>

            </Container>

            
            <FixedButtonContainer>
                <NavBar activeState="Home" />
            </FixedButtonContainer>
        </>
    );
};


const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: -600px; /* 기본값 */
    gap: -160px;

    @media (min-width: 600px) {
        padding-top: -750px; /* 더 작은 화면에서는 간격을 조금 줄임 */
    }
`



export default Home;