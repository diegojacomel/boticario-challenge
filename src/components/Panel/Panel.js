// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PanelWrapper = styled('div')`
${({ theme, maxWidth }) =>`
    background: ${theme.colors.white};
    width: ${theme.spacing.full};
    max-width: ${theme.spacing.full};
    border-radius: ${theme.rounded.px10};
    padding: ${theme.spacing.px30};
    box-shadow: 0 0.625rem 1.875rem ${theme.colors.grey2};
    box-sizing: border-box;
    ${maxWidth
        ?
        `max-width: ${maxWidth};`
        :
        `max-width: ${theme.spacing.full};`
    }
`}`

function Panel({ children, maxWidth }) {
    return (   
        <PanelWrapper maxWidth={maxWidth}>
            { children }
        </PanelWrapper>
    )
}

Panel.propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.string
}

Panel.defaultProps = {
    children: null,
    maxWidth: '100%'
}

export default Panel;