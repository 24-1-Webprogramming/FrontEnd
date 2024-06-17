import React, { useState } from 'react';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import TextField from '../../Component/TextField';
import { CalendarIcon } from '../../Component/icon';
import IconButton from '../../Component/IconButton';

const ExerciseWrite = () => {
    const [selectedRate, setSelectedRate] = useState(null);

    const handleIconButtonClick = (index) => {
        if (selectedRate === index) {
            setSelectedRate(null); // 이미 선택된 버튼을 다시 클릭하면 선택 해제
        } else {
            setSelectedRate(index); // 클릭된 버튼 선택
        }
    };

    const handleRecordComplete = () => {
        if (selectedRate !== null) {
            console.log(`기록 완료! 선택된 버튼: ${selectedRate}`);
            // 여기서 선택된 버튼에 따라 다른 작업 수행
        } else {
            console.log('버튼을 선택하세요.');
            // 선택된 버튼이 없으면 사용자에게 메시지 표시 등의 작업 수행
        }
    };

    return (
        <Container>
            <Header text='운동 기록' />

            <Title>
                <CenteredText>2024년 6월 14일</CenteredText>
                <CalendarIcon />
            </Title>

            <Button width='100%' height='240px' label='+ 사진 추가' type='border' />

            <SubContainer>
                <Text>오늘 운동은 ?</Text>
                <RateContainer>
                    <IconButton
                        width='48px'
                        height='67px'
                        src={selectedRate === 0 ? '/FaceIcons/Blue100.svg' : '/FaceIcons/Gray100.svg'}
                        text='짱맛도리'
                        textSize='10px'
                        textColor='#000'
                        borderRadius='10%'
                        onClick={() => handleIconButtonClick(0)}
                        disabled={selectedRate !== null && selectedRate !== 0}
                    />
                    <IconButton
                        width='48px'
                        height='67px'
                        src={selectedRate === 1 ? '/FaceIcons/Blue100.svg' : '/FaceIcons/Gray100.svg'}
                        text='맛도리'
                        textSize='10px'
                        textColor='#000'
                        borderRadius='10%'
                        onClick={() => handleIconButtonClick(1)}
                        disabled={selectedRate !== null && selectedRate !== 1}
                    />
                    <IconButton
                        width='48px'
                        height='67px'
                        src={selectedRate === 2 ? '/FaceIcons/Blue80.svg' : '/FaceIcons/Gray80.svg'}
                        text='맛있다'
                        textSize='10px'
                        textColor='#000'
                        borderRadius='10%'
                        onClick={() => handleIconButtonClick(2)}
                        disabled={selectedRate !== null && selectedRate !== 2}
                    />
                    <IconButton
                        width='48px'
                        height='67px'
                        src={selectedRate === 3 ? '/FaceIcons/Blue60.svg' : '/FaceIcons/Gray60.svg'}
                        text='맛있...나?'
                        textSize='10px'
                        textColor='#000'
                        borderRadius='10%'
                        onClick={() => handleIconButtonClick(3)}
                        disabled={selectedRate !== null && selectedRate !== 3}
                    />
                    <IconButton
                        width='48px'
                        height='67px'
                        src={selectedRate === 4 ? '/FaceIcons/Blue40.svg' : '/FaceIcons/Gray40.svg'}
                        text='퉤퉤'
                        textSize='10px'
                        textColor='#000'
                        borderRadius='10%'
                        onClick={() => handleIconButtonClick(4)}
                        disabled={selectedRate !== null && selectedRate !== 4}
                    />
                </RateContainer>
                <Text>한 줄 일기:</Text>
                <TextField width='100%' height='45px' placeholder='오늘의 운동을 한 줄로 표현해주세요.' fontSize='10px' />
                <Text>오늘의 루틴: <Description>탄탄한 하체 프로젝트 DAY1</Description></Text>
                <Text>칼로리: <Description>300 kcal</Description></Text>
            </SubContainer>

            <FixedButtonContainer>
                <Button width='100%' height='45px' label='기록 완료' type='primary' onClick={handleRecordComplete} />
            </FixedButtonContainer>
        </Container>
    );
};

export default ExerciseWrite;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%;
    padding-bottom: 15%;
    gap: 33px;
    padding-left: 20px;
    padding-right: 20px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    gap: 14px;
`;

const CenteredText = styled.span`
    text-align: center;
`;

const SubContainer = styled.div`
    width: 100%;
    text-align: left;
`;

const Text = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin-bottom: 8px;
    margin-top: 8px;
`;

const RateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
`;

const Description = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #000;
    margin-bottom: 8px;
`;
