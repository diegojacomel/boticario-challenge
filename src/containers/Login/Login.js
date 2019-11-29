// Modules
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import Container from 'components/Container/Container';
import Panel from 'components/Panel/Panel';
import Title from 'components/Title/Title';
import FormControl from 'components/FormControl/FormControl';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const LoginWrapper = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${theme.spacing.full};
`}`

const LoginForm = styled('div')`
${({ theme }) =>`
    margin-bottom: ${theme.spacing.px30};
`}`

const LoginFooter = styled('form')`
${({ theme }) =>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`}`

const CustomLink = styled(Link)`
${({ theme }) =>`
    color: ${theme.colors.blue2};
    text-align: center;
    outline: none;
    @media screen and (max-width: 500px) {
        margin-bottom: ${theme.spacing.px30};
    }
`}`

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
        if (loginData.email.length && loginData.password.length && !validateEmail(loginData.email)) {
            console.log('Enviar para a outra página')
        } else {
            setShowError(true)
        }
    }

    const validateEmail = (email) => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

        if (!!showError) {
            if (!email) {
                return 'Campo obrigatório'
            } else if (!!email && !regex.test(email)) {
                return 'Email inválido'
            }
        }

        return ''
    }

    return (
        <Container>
            <LoginWrapper>
                <Panel maxWidth="600px">
                    <Title tag="h3" color="blueGrey3" marginBottom="px30">
                        Login
                    </Title>
                    <form autoComplete="off">
                        <LoginForm>
                            <FormControl>
                                <Label>
                                    Email:
                                </Label>
                                <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={(e) => setLoginData({
                                        ...loginData,
                                        email: e.target.value
                                    })}
                                    error={validateEmail(loginData.email)}
                                />
                            </FormControl>
                            <FormControl>
                                <Label>
                                    Senha:
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({
                                        ...loginData,
                                        password: e.target.value
                                    })}
                                    error={!!showError && !loginData.password ? 'Campo obrigatório' : ''}
                                />
                            </FormControl>
                        </LoginForm>
                    </form>
                    <LoginFooter>
                        <CustomLink to="/Register">
                            <div>
                                Ainda não tenho cadastro
                            </div>
                            <strong>
                                Quero me registrar
                            </strong>
                        </CustomLink>
                        <Button backgroundColor="blue2" onClick={() => handleSubmit()}>
                            Entrar
                        </Button>
                    </LoginFooter>
                </Panel>
            </LoginWrapper>
        </Container>
    )
}

export default connect()(Login);