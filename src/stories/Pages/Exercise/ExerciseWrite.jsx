import React, { useState, useEffect } from 'react';
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
    const [todayRecord, setTodayRecord] = useState({
        routineName: '',
        calories: '',
        date: new Date().toLocaleDateString('ko-KR')
    });

    useEffect(() => {
        // Fetch the current routine details stored in localStorage
        const currentRoutine = JSON.parse(localStorage.getItem('currentRoutine'));
        if (currentRoutine) {
            setTodayRecord({
                routineName: currentRoutine.name,
                calories: currentRoutine.kcal,
                date: new Date().toLocaleDateString('ko-KR')
            });
        }

        // Initialize emotion data in localStorage if not present
        initializeEmotionData();
    }, []);

    const handleIconButtonClick = (index) => {
        setSelectedRate(index === selectedRate ? null : index);
    };
    

    const handleRecordComplete = () => {
        if (selectedRate !== null) {
            const recordDetails = {
                uploadedImage,
                emotion: selectedRate,
                diaryEntry,
                routineName: todayRecord.routineName,
                calories: `${todayRecord.calories} kcal`,
                date: todayRecord.date // 이 부분은 기존에 설정한 오늘 날짜 그대로 유지
            };
    
            // Save the record details and update the emotion data in localStorage
            updateEmotionData(recordDetails.date, recordDetails.emotion);
            console.log('Record Details:', recordDetails);
        } else {
            console.log('Please select a rating.');
        }
    };

    const initializeEmotionData = () => {
        if (!localStorage.getItem('emotion')) {
            const sampleData = [
                { date: "2024-06-10", emotion: 1 },
                { date: "2024-06-15", emotion: 3 },
            ];
            localStorage.setItem('emotion', JSON.stringify(sampleData));
        }
    };

    const updateEmotionData = (date, emotion) => {
        const emotionData = JSON.parse(localStorage.getItem('emotion'));
        const previousDate = new Date(date);
        previousDate.setDate(previousDate.getDate() - 1); // 날짜에서 하루를 뺌
    
        const formattedDate = previousDate.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replaceAll('. ', '-').replace('.', ''); // YYYY-MM-DD 포맷으로 변경
    
        const newEmotion = { date: formattedDate, emotion };
        const updatedEmotionData = [...emotionData, newEmotion];
        localStorage.setItem('emotion', JSON.stringify(updatedEmotionData));
    };
    

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
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
                <CenteredText>{todayRecord.date}</CenteredText>
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
                    <Text>오늘의 루틴 <Description>{todayRecord.routineName}</Description></Text>
                    <Text>칼로리 <Description>{todayRecord.calories} kcal</Description></Text>
                </TextContainer>
            </SubContainer>

            <FixedButtonContainer>
                <StyledLink to={{
                    pathname : '/statistic',
                    state : {
                        uploadedImage : uploadedImage,
                        emotionData: selectedRate,
                        date: todayRecord.date
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
    padding-bottom: 130px;
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