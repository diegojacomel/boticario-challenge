// Modules
import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerWrapper = styled('div')`
${({ theme, flex }) =>`
    width: ${theme.spacing.full};
    padding: ${theme.spacing.none} ${theme.spacing.px30};
    box-sizing: border-box;
    ${flex
        ?
        `
        display: flex;
        justify-content: center;
        `
        :
        ``
    }
`}`

function Container({ children, flex }) {
    return (
        <ContainerWrapper flex={flex}>
            {children}
        </ContainerWrapper>
    )
}

Container.propTypes = {
    children: PropTypes.node,
}

Container.defaultProps = {
    children: null,
}

export default Container;