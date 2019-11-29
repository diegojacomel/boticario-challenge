// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageStyled = styled('img')`
${({ theme }) =>`
    display: block;
    max-width: ${theme.spacing.full};
`}`

function Image({ src, alt, id }) {
    return (   
        <ImageStyled src={src} alt={alt} title={alt} id={id} />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

Image.defaultProps = {
    src: "#",
    alt: "Image description"
}

export default Image;