import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SearchField = React.forwardRef((props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);

    return (
        <Container>
            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M12.6644 13.2019C12.856 13.4008 13.1725 13.4068 13.3714 13.2153C13.5703 13.0237 13.5763 12.7072 13.3848 12.5083L12.6644 13.2019ZM8.58442 8.96498L12.6644 13.2019L13.3848 12.5083L9.30474 8.27134L8.58442 8.96498Z" fill="black"/>
                    <circle cx="5.33541" cy="5.47994" r="4.83541" stroke="black"/>
                </svg>
            </Icon>
            <StyledSearchField
                ref={inputRef}
                type="text"
                {...props}
            />
        </Container>
    );
});

SearchField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.5);
    border-radius: 10px;
    padding-left: 11px;
    padding-top: 7px;
    padding-botton: 7px;
    width: dddd100%;
    transition: background-color 0.3s ease;
    &:focus-within {
        background-color: rgba(217, 217, 217, 1);
    }
`;

const Icon = styled.div`
    height: 12px;
    width: 12px;

`;

const StyledSearchField = styled.input`
    outline: none;
    border: none;
    padding-left: 9px;
    width: 100%;
    font-size: 16px;
    background-color: transparent;
`;

export default SearchField;
