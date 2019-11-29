// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleWrapper = styled('div')`
${({ theme, marginBottom }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${theme.spacing.full};
    margin-bottom: ${theme.spacing[marginBottom]};
`}`

const TitleTag = ({ tag, textAlign, children, ...props }) => {
    return (
        React.createElement(
            tag,
            props,
            children
        )
    )
}

const TitleElement = styled(TitleTag)`
${({ theme, color, fontWeight, textAlign }) => `
    display: block;
    margin: ${theme.spacing.none};
    color: ${theme.colors[color]};
    font-weight: ${theme.fontWeight[fontWeight]};
    padding-right: ${theme.spacing.px15};
    line-height: 1;
    text-align: ${textAlign};
`}`

function Title({ tag, color, children, fontWeight, marginBottom, textAlign }) {
    return (
        <TitleWrapper marginBottom={marginBottom}>
            <TitleElement tag={tag} color={color} fontWeight={fontWeight} textAlign={textAlign}>
                {children}
            </TitleElement>
        </TitleWrapper>
    )
}

Title.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    marginBottom: PropTypes.string,
    textAlign: PropTypes.string
}

Title.defaultProps = {
    tag: "h1",
    children: "",
    color: "blueGrey2",
    fontWeight: 'light',
    marginBottom: 'px40',
    textAlign: 'left'
}

export default Title;