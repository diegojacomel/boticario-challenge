// Modules
import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const InputStyled = styled(InputMask)`
${({ theme }) =>`
    border: 1px solid ${theme.colors.blueGrey5};
    border-radius: ${theme.rounded.px10};
    color: ${theme.colors.blueGrey2};
    font-weight: ${theme.fontWeight.light};
    padding: ${theme.spacing.px10} ${theme.spacing.px15};
    background: ${theme.colors.white};
    width: ${theme.spacing.full};
    box-sizing: border-box;
    outline: none;
`}`

const Error = styled('div')`
${({ theme }) =>`
    font-size: ${theme.fontSize.px10};
    color: ${theme.colors.red3};
    margin-top: ${theme.spacing.px3};
`}`

function Input(props) {
    const { type, id, name, disabled, value, onBlur, onFocus, onKeyUp, onChange, error } = props;

    return (
        <>
            <InputStyled
                type={type}
                id={id}
                name={name}
                disabled={disabled}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                onChange={onChange}
                maskChar={null}
                value={value}
                {...props}
            />
            {error
                ?
                <Error>
                    {error}
                </Error>
                :
                null
            }
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    disabled: false,
    onBlur: () => {},
    onFocus: () => {},
    onKeyUp: () => {},
    onChange: () => {}
}

export default Input;