import React, { useState, useEffect } from 'react';
import Header from '../../Component/Header';
import NavBar from '../../Component/NavBar';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md'; // Import the arrow icon

import { HeadLine, CharacterSector } from './HomeS';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import HomeScrolldownMeal from './Home_Scrolldown_Meal';
import HomeScrolldownWeight from './Home_Scrolldown_Weight';
import HomeScrolldownDDay from './Home_Scrolldown_DDay';

const Home = () => {
    const currentSteps = [70, 50, 90, 30];
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
            setShowArrow(!bottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Container>
                <Header showIcon={true} text="홈" backButton={false} />
                <HeadLine />
                <Section>
                    <CharacterSector
                        continuousExerciseDays={1}
                        characterMessage="작디작은 1kg 아령"
                        currentSteps={currentSteps}
                    />
                    <EntrySection>
                        <HomeScrolldownMeal />
                        <HomeScrolldownWeight/>
                        <HomeScrolldownDDay/>
                    </EntrySection>
                </Section>
                {showArrow && <StyledDownArrow />} {/* Use the icon here */}
            </Container>
            <FixedButtonContainer>
                <NavBar activeState="Home" />
            </FixedButtonContainer>
        </>
    );
};

const EntrySection = styled.div`
    display:flex;
    margin-top: 210px;
    flex-direction: column;
    justify-content:center;
    margin-bottom: 100px;
    gap: 80px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: -550px; /* 기본값 */

    @media (min-width: 600px) {
        padding-top: -700px; /* Adjust padding for smaller screens */
    }
`;

const Section = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

const StyledDownArrow = styled(MdKeyboardArrowDown)`
    position: fixed;
    bottom: 70px; // Adjust this value based on your NavBar height
    left: 50%;
    transform: translateX(-50%) scaleY(0.6); // Scale Y to make it thinner
    font-size: 48px; // Size of the arrow
    color: #B2BAC2; // Arrow color
    z-index: 1000;
`;


export default Home;
