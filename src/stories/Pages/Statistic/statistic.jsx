import React from 'react';
import Header from '../../Component/Header';
import NavBar from '../../Component/NavBar';
import CalendarSlides from '../../Component/CalendarSlides';
import styled from 'styled-components';
import Graph from '../../Component/Graph';

const data = [10, 20, 15, 250, 30, 200, 10];

const DashBoard = () => {
    return (
        <>
        <Header showIcon={true} text="홈" backButton={false} />
            <Container> 
                <Graph data={data}
                selectedIndex={6}/>
                <CalendarSlides /> 
            </Container>
        <NavBar activeState="Statistic" />
        </>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 130px;
`

export default DashBoard;