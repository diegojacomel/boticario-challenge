// Modules
import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const LabelStyled = styled('label')`
${({ theme }) => `
    display: block;
    box-sizing: border-box;
    font-size: ${theme.fontSize.px14};
    color: ${theme.colors.blueGrey3};
    align-self: center;
`}`

function Label({ children, htmlFor }) {
    return (
        <LabelStyled htmlFor={htmlFor}>
            {children}
        </LabelStyled>
    )
}

Label.propTypes = {
    children: PropTypes.node
}

export default Label;