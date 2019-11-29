// Modules
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormControlWrapper = styled('div')`
${({ theme, inline }) => `
    display: block;
    width: ${theme.spacing.full};
    margin-bottom: ${theme.spacing.px15};
    ${inline
        ?
        `
        display: flex;
        justify-content: flex-start;
        align-items: center;
        label {
            margin-right: ${theme.spacing.px10};
        }
        @media screen and (max-width: 500px) {
            display: block;
            label {
                margin-bottom: ${theme.spacing.px10};
            }
        }
        `
        :
        `
        label {
            display: block;
            margin-bottom: ${theme.spacing.px5};
        }
        `
    }
`}`

function FormControl({ inline, children }) {
    return (
        <FormControlWrapper inline={inline}>
            {children}
        </FormControlWrapper>
    )
}

FormControl.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool
}

export default FormControl;