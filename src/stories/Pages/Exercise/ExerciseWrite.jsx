import React, { useState } from 'react';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import TextField from '../../Component/TextField';
import { CalendarIcon } from '../../Component/icon';
import IconButton from '../../Component/IconButton';
import { Link } from 'react-router-dom';

const ExerciseWrite = () => {
    const [selectedRate, setSelectedRate] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);

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

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container>
            <Header text='운동 기록' />

            <Title>
                <CenteredText>2024년 6월 14일</CenteredText>
                <CalendarIcon />
            </Title>

            {uploadedImage ? (
                <ImagePreviewContainer>
                    <FileInput type="file" accept="image/*" onChange={handleImageUpload} />
                    <ImagePreview src={uploadedImage} alt="Uploaded" />
                </ImagePreviewContainer>
            ) : (
                <FileInputWrapper>
                    <FileInput type="file" accept="image/*" onChange={handleImageUpload} />
                    <Button width='100%' height='240px' label='+ 사진 추가' type='border' />
                </FileInputWrapper>
            )}

            <SubContainer>
                <Text>오늘 운동은 어땠나요?</Text>
                <RateContainer>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <StyledIconButton
                            key={index}
                            width='96px'
                            height='134px'
                            src={selectedRate === index ? `/FaceIcons/Blue${(index + 1) * 20}.svg` : `/FaceIcons/Gray${(index + 1) * 20}.svg`}
                            text={['짱맛도리', '맛도리', '맛있다', '맛있...나?', '퉤퉤'][index]}
                            textSize='16px'
                            textColor='#000'
                            borderRadius='10%'
                            onClick={() => handleIconButtonClick(index)}
                        />
                    ))}
                </RateContainer>
                <div>
                    <TextField width='95%' height='55px' placeholder='오늘의 운동을 한 줄로 표현해주세요.' fontSize='15px' />
                </div>
                <TextContainer>
                    <Text>오늘의 루틴 <Description>탄탄한 하체 프로젝트 DAY1</Description></Text>
                    <Text>칼로리 <Description>300 kcal</Description></Text>
                </TextContainer>
            </SubContainer>

            <FixedButtonContainer>
                <StyledLink to='/statistic'>
                    <Button width='100%' label='기록 완료' type='primary' onClick={handleRecordComplete} disabled={selectedRate === null} />
                </StyledLink>
            </FixedButtonContainer>
        </Container>
    );
};

export default ExerciseWrite;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:20px;
    margin-left: 10px;
    gap: -20px;
    `


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    text-align: left;
`;

const Text = styled.div`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Pretendard';
    color: #000;
    margin-bottom: 8px;
    margin-top: 8px;
`;

const RateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-around;
`;

const Description = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin-bottom: 8px;
    margin-left: 7px;
`;

const StyledIconButton = styled(IconButton)`
    width: ${({ width }) => width};
    height: calc(${({ width }) => width} * 1.4);
`;

const FileInputWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 240px;
`;

const FileInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;

const ImagePreviewContainer = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
`;

const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const StyledLink = styled(Link)`
    width: 100%;
`;