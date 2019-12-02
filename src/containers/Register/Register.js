// Modules
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Container from 'components/Container/Container';
import Panel from 'components/Panel/Panel';
import Title from 'components/Title/Title';
import FormControl from 'components/FormControl/FormControl';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const RegisterWrapper = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${theme.spacing.full};
`}`

const RegisterForm = styled('div')`
${({ theme }) =>`
    margin-bottom: ${theme.spacing.px30};
`}`

const RegisterFooter = styled('form')`
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

function Register(props) {
    const { history } = props;
    const [registerData, setRegisterData] = useState({
        name: '',
        cpf: '',
        email: '',
        password: ''
    });
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('logged') === 'true') {
            history.push('/CashbackList')
        }
    }, [history])

    const handleSubmit = () => {
        if (registerData.name.length && registerData.cpf.length && registerData.email.length && registerData.password.length && validateCPF(registerData.cpf) === null && validateEmail(registerData.email) === null) {
            const localRegisterData = JSON.parse(localStorage.getItem('register'));

            if (!!localRegisterData && !!localRegisterData.some(x => x.cpf === registerData.cpf) && !!localRegisterData.some(x => x.email === registerData.email)) {
                alert(`Usuário já cadastrado!`)
            } else {
                let strRegistertData = [];

                if (!!localRegisterData) {
                    strRegistertData = JSON.stringify([
                        ...localRegisterData,
                        registerData
                    ]);
                } else {
                    strRegistertData = JSON.stringify([
                        registerData
                    ]);
                }

                localStorage.setItem('register', [
                    strRegistertData
                ])

                alert(`Usuário cadastrado com sucesso!`)

                setRegisterData({
                    name: '',
                    cpf: '',
                    email: '',
                    password: ''
                })
            }
        } else {
            setShowError(true)
        }
    }

    const changeCPF = (cpf) => {
        const customCpf = cpf.replace('.', '').replace('.', '').replace('.', '').replace('-', '');

        return customCpf;
    }

    const testCPF = (cpf) => {
        cpf = changeCPF(cpf)
        let add = 0;
        let rev = 0;

        if (cpf.length !== 11 ||
            cpf === "00000000000" ||
            cpf === "11111111111" ||
            cpf === "22222222222" ||
            cpf === "33333333333" ||
            cpf === "44444444444" ||
            cpf === "55555555555" ||
            cpf === "66666666666" ||
            cpf === "77777777777" ||
            cpf === "88888888888" ||
            cpf === "99999999999")
            return false;

        add = 0;

        for (var i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev !== parseInt(cpf.charAt(9)))
            return false;
        add = 0;
                for (i = 0; i < 10; i++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev !== parseInt(cpf.charAt(10)))
            return false;
        
        return true;
    }

    const validateCPF = (cpf) => {
        const regex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

        if (!cpf) {
            return 'Campo obrigatório'
        } else if (!testCPF(cpf) || (!!cpf && !regex.test(cpf))) {
            return 'CPF inválido'
        }

        return null
    }

    const validateEmail = (email) => {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

        if (!email) {
            return 'Campo obrigatório'
        } else if (!!email && !regex.test(email)) {
            return 'Email inválido'
        }

        return null
    }

    return (
        <Container>
            <RegisterWrapper>
                <Panel maxWidth="600px">
                    <Title tag="h3" color="blueGrey3" marginBottom="px30">
                        Cadastro
                    </Title>
                    <form autoComplete="off">
                        <RegisterForm>
                            <FormControl>
                                <Label>
                                    Nome completo:
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={registerData.name}
                                    onChange={(e) => setRegisterData({
                                        ...registerData,
                                        name: e.target.value
                                    })}
                                    error={!!showError && !registerData.name ? 'Campo obrigatório' : ''}
                                />
                            </FormControl>
                            <FormControl>
                                <Label>
                                    CPF:
                                </Label>
                                <Input
                                    type="text"
                                    mask="999.999.999-99"
                                    id="cpf"
                                    name="cpf"
                                    value={registerData.cpf}
                                    onChange={(e) => setRegisterData({
                                        ...registerData,
                                        cpf: e.target.value
                                    })}
                                    error={registerData.cpf.length === 14 ? validateCPF(registerData.cpf) : null}
                                />
                            </FormControl>
                            <FormControl>
                                <Label>
                                    Email:
                                </Label>
                                <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={registerData.email}
                                    onChange={(e) => setRegisterData({
                                        ...registerData,
                                        email: e.target.value
                                    })}
                                    error={!!registerData.email.length ? validateEmail(registerData.email) : null}
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
                                    value={registerData.password}
                                    onChange={(e) => setRegisterData({
                                        ...registerData,
                                        password: e.target.value
                                    })}
                                    error={!!showError && !registerData.password ? 'Campo obrigatório' : ''}
                                />
                            </FormControl>
                        </RegisterForm>
                    </form>
                    <RegisterFooter>
                        <CustomLink to="/Login">
                            <div>
                                Já tenho cadastro
                            </div>
                            <strong>
                                Ir para o Login.
                            </strong>
                        </CustomLink>
                        <Button backgroundColor="blue2" onClick={() => handleSubmit()} disabled={!registerData.name.length || !registerData.cpf.length || !registerData.email.length || !registerData.password.length || validateCPF(registerData.cpf) !== null || validateEmail(registerData.email) !== null || registerData.cpf.length < 14}>
                            Cadastrar
                        </Button>
                    </RegisterFooter>
                </Panel>
            </RegisterWrapper>
        </Container>
    )
}

export default withRouter(connect()(Register));