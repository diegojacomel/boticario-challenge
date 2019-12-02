// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-modal';

const ModalCustomized = styled(Modal)`
${({ theme }) =>`
    border-radius: ${theme.rounded.px10};
    background: ${theme.colors.white};
    box-shadow: 0 0.625rem 1.875rem ${theme.colors.grey2};
    position: absolute;
    outline: none;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    marginRight: -50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
`}`

const ModalWrapper = styled('div')`
${({ theme }) => `
    width: 600px;
    max-width: ${theme.spacing.full};
    padding: ${theme.spacing.px30};
    box-sizing: border-box;
    @media screen and (max-width: 700px) {
        padding: ${theme.spacing.px30} ${theme.spacing.px10};
        width: 300px;
    }
`}`

function CustomModal(props) {
    return (
        <ModalCustomized {...props} style={{ overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}}>
            <ModalWrapper>
                {props.children}
            </ModalWrapper>
        </ModalCustomized>
    )
}

export default CustomModal;