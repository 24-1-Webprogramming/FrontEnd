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
    const [diaryEntry, setDiaryEntry] = useState('');
    const TodayRecord = ["탄탄한 하체 프로젝트 DAY1", "300"];

    const handleIconButtonClick = (index) => {
        setSelectedRate(index === selectedRate ? null : index);
    };

    const handleRecordComplete = () => {
        if (selectedRate !== null) {
            const recordDetails = [
                uploadedImage,                // Uploaded image
                selectedRate,                 // Emotional rating of the exercise
                diaryEntry,                   // User's diary entry
                TodayRecord[0],               // Exercise routine
                `${TodayRecord[1]} kcal`      // Calories burnt
            ];
            console.log('Record Details:', recordDetails);
            // Additional actions based on the saved record can be added here
        } else {
            console.log('Please select a rating.');
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.onerror = () => {
                console.error('There was an error reading the file.');
            };
            reader.readAsDataURL(file);
        } else {
            console.error('Please upload an image file.');
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
                    {['짱맛도리', '맛도리', '맛있다', '맛있...나?', '퉤퉤'].map((text, index) => (
                        <IconButton
                            key={index}
                            src={selectedRate === index ? `/FaceIcons/Blue${(index + 1) * 20}.svg` : `/FaceIcons/Gray${(index + 1) * 20}.svg`}
                            text={text}
                            textSize='16px'
                            textColor='#000'
                            borderRadius='10%'
                            onClick={() => handleIconButtonClick(index)}
                            width='96px'
                            height='134px'
                        />
                    ))}
                </RateContainer>
                <TextField
                    width='95%'
                    height='55px'
                    placeholder='오늘의 운동을 한 줄로 표현해주세요.'
                    fontSize='15px'
                    onChange={(e) => setDiaryEntry(e.target.value)}
                />
                <TextContainer>
                    <Text>오늘의 루틴 <Description>{TodayRecord[0]}</Description></Text>
                    <Text>칼로리 <Description>{TodayRecord[1]} kcal</Description></Text>
                </TextContainer>
            </SubContainer>

            <FixedButtonContainer>
                <StyledLink to={{
                    pathname : '/test',
                    state : {
                        uploadedImage : uploadedImage
                    }
                }}>
                    <Button
                        width='100%'
                        label='기록 완료'
                        type='primary'
                        onClick={handleRecordComplete}
                        disabled={selectedRate === null}
                    />
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
    font-weight: 600;
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