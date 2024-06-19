import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/search.svg';
import { StarIconActive, StarIconDeactive } from './icon';
import { Button } from './Button';
import FixedButtonContainer from './FixedButtonContainer';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises, onSelectedExercisesChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exerciseList, setExerciseList] = useState(exercises || []);
  const [filterCategory, setFilterCategory] = useState('전체');
  const [checkedNames, setCheckedNames] = useState(new Set());
  const [favoriteNames, setFavoriteNames] = useState(new Set());

  useEffect(() => {
    const initialFavorites = new Set();
    exercises.forEach(exercise => {
      if (exercise.mark) {
        initialFavorites.add(exercise.exercise);
      }
    });
    setFavoriteNames(initialFavorites);
  }, [exercises]);

  useEffect(() => {
    const filtered = (exercises || [])
      .filter(e => 
        e.exercise.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory === '전체' || 
         (filterCategory === '즐겨찾기' && favoriteNames.has(e.exercise)) || 
         e.category === filterCategory)
      )
      .sort((a, b) => (b.mark === a.mark ? 0 : b.mark ? 1 : -1));
    setExerciseList(filtered);
  }, [searchTerm, filterCategory, exercises, favoriteNames]);

  const toggleMark = (exerciseName) => {
    setFavoriteNames(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(exerciseName)) {
        newFavorites.delete(exerciseName);
      } else {
        newFavorites.add(exerciseName);
      }
      return newFavorites;
    });
  };

  const toggleCheck = (exerciseName) => {
    setCheckedNames(prev => {
      const newNames = new Set(prev);
      if (newNames.has(exerciseName)) {
        newNames.delete(exerciseName);
      } else {
        newNames.add(exerciseName);
      }
      onSelectedExercisesChange(Array.from(newNames));
      return newNames;
    });
  };

  const buttonLabel = checkedNames.size > 0 ? `${checkedNames.size}개 선택` : '선택';

  return (
    <Container>
      <SearchContainer>
        <Icon src={SearchIcon} alt="Search" />
        <SearchInput
          type="text"
          placeholder="운동 검색하기"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
  
      <CategoryFilterContainer>
        {['즐겨찾기', '전체', '하체', '가슴', '등', '어깨', '팔'].map(category => (
          <CategoryFilter
            key={category}
            active={filterCategory === category}
            onClick={() => setFilterCategory(category)}
          >
            {category}
          </CategoryFilter>
        ))}
      </CategoryFilterContainer>
  
      {exerciseList.map((exercise, index) => (
        <ExerciseItem key={index}>
            <StarIconContainer onClick={() => toggleMark(exercise.exercise)}>
              {favoriteNames.has(exercise.exercise) ? <StarIconActive /> : <StarIconDeactive />}
            </StarIconContainer>
            
          <ExerciseContent onClick={() => toggleCheck(exercise.exercise)}>
            {exercise.exercise}
            <Checkbox
              type="checkbox"
              checked={checkedNames.has(exercise.exercise)}
            />
          </ExerciseContent>
        </ExerciseItem>
      ))}
      <FixedButtonContainer>
        {checkedNames.size > 0 && (
          <StyledLink to = '/exercise/routine/:id/play'>
            <Button
              width={'90%'}
              label={buttonLabel}
              onClick={() => {}}
              primary
            />
          </StyledLink>
        )}
      </FixedButtonContainer>
    </Container>
  );
};  

export default ExerciseList;

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const StarIconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const ExerciseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ExerciseContent = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Checkbox = styled.input`
  margin-left: auto;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 7px 7px;
  align-items: center;
  gap: 9px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.50);
  margin-bottom: 20px;
`;

const Icon = styled.img`
  margin-left: 10px;
  width: 16px;
  height: 17px;
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--deactive, #B2BAC2);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: #B2BAC2;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const CategoryFilterContainer = styled.div`
  display: flex;
  flex-direction: row; // Ensure filters are in a row
  gap: 5px;
  margin-bottom: 20px;
  overflow-x: auto; // Enable horizontal scrolling
  white-space: nowrap; // Prevent filters from wrapping

  // This will hide the scrollbar visually but will still be functional
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 390px) {
    width: 100%; // Full width of the parent container
    scrollbar-width: none; // For Firefox
  }
`;

const CategoryFilter = styled.button`
  display: flex;
  padding: ${props => props.active ? '5px 17px' : '4px 17px'};
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 00;
  border-radius: 15px;
  border: 1px solid #5467F5;
  background: ${props => props.active ? '#495EF6' : 'none'};
  cursor: pointer;
  transition: background-color 0.3s, padding 0.3s;
  color: ${props => props.active ? '#FFFFFF' : '#5467F5'};
`;

const StyledLink = styled(Link)`
  width: 100%;
`;