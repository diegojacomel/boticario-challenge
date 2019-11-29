// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import Container from 'components/Container/Container';
import Panel from 'components/Panel/Panel';
import FormControl from 'components/FormControl/FormControl';
import Label from 'components/Label/Label';
import { Link } from 'react-router-dom';

const DeveloperWrapper = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: center;
`}`

const BlockWrapper = styled('div')`
    max-width: 500px;
`

const Result = styled('div')``

const Anchor = styled('a')`
${({ theme }) =>`
    color: ${theme.colors.blue2};
`}`

const CustomLink = styled(Link)`
${({ theme }) =>`
    display: inline-block;
    color: ${theme.colors.blue2};
    margin-top: ${theme.spacing.px50};
`}`

function Register(props) {
    return (
        <Container>
            <DeveloperWrapper>
                <BlockWrapper>
                    <Panel maxWidth="500px">
                        <FormControl inline>
                            <Label>
                                Desenvolvedor:
                            </Label>
                            <Result>
                                Diego Jacomel
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                E-mail:
                            </Label>
                            <Result>
                                dmeloj@gmail.com
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                Telefone:
                            </Label>
                            <Result>
                                (41)99996-6225
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                CEP:
                            </Label>
                            <Result>
                                83015-220
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                Endereço:
                            </Label>
                            <Result>
                                Rua São Salvador, 86 - Bloco 4, Apartamento 310
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                Cidade:
                            </Label>
                            <Result>
                                São José dos Pinhais - PR
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                GitHub:
                            </Label>
                            <Result>
                                <Anchor href="https://github.com/diegojacomel">https://github.com/diegojacomel</Anchor>
                            </Result>
                        </FormControl>
                        <FormControl inline>
                            <Label>
                                LinkedIn:
                            </Label>
                            <Result>
                                <Anchor href="https://www.linkedin.com/in/diego-jacomel-68535289/">https://www.linkedin.com/in/diego-jacomel-68535289/</Anchor>
                            </Result>
                        </FormControl>
                    </Panel>
                    <CustomLink to="/">
                        Voltar
                    </CustomLink>
                </BlockWrapper>
            </DeveloperWrapper>
        </Container>
    )
}

export default Register;