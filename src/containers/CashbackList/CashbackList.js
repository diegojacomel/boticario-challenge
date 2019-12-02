// Modules
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// Components
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';
import CustomModal from 'components/CustomModal/CustomModal';

// Containers
import PurchaseForm from 'containers/PurchaseForm/PurchaseForm'

const Table = styled('div')`
${({ theme }) =>`
    display: table;
    width: ${theme.spacing.full};
    margin-top: ${theme.spacing.px40};
`}`

const Thead = styled('thead')`
${({ theme }) =>`
    tr {
        th {
            line-height: 3;
            text-align: left;
        }
    }
`}`

const Tbody = styled('tbody')`
${({ theme }) =>`
    tr {
        td {
            border-top: 1px solid ${theme.colors.grey2};
            line-height: 3;
        }
    }
`}`

const PositionButton = styled('div')`
${({ theme }) =>`
    position: absolute;
    right: ${theme.spacing.px30};
    top: ${theme.spacing.px30};
`}`

const ButtonAction = styled('button')`
${({ theme }) =>`
    padding: ${theme.spacing.none};
    margin: ${theme.spacing.none};
    border: ${theme.spacing.none};
    background: none;
    cursor: pointer;
    color: ${theme.colors.blue2};
`}`

const HeaderPage = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`}`

const ButtonCreatePurchase = styled('button')`
${({ theme }) =>`
    background: none;
    border: none;
    padding: 0;
    outline: none;
    color: ${theme.colors.blue2};
    cursor: pointer;
`}`

function CashbackList(props) {
    const { history } = props;
    const [openModal, setOpenModal] = useState(false);

    const logout = () => {
        localStorage.setItem('logged', false);
        history.push('/Login')
    }

    useEffect(() => {
        if (localStorage.getItem('logged') === false) {
            history.push('/Login')
        }
    }, [history])

    return (
        <Container flex>
            <Panel maxWidth="1200px">
                <HeaderPage>
                    <Title marginBottom='none'>
                        Relatório de Cashback
                    </Title>
                    <ButtonCreatePurchase onClick={() => setOpenModal(true)}>
                        + Cadastrar nova compra
                    </ButtonCreatePurchase>
                </HeaderPage>
                <Table cellSpacing="0" cellPadding="0">
                    <Thead>
                        <tr>
                            <th>
                                Compra
                            </th>
                            <th>
                                Valor
                            </th>
                            <th>
                                Data
                            </th>
                            <th>
                                Cashback (%)
                            </th>
                            <th>
                                Cashback (R$)
                            </th>
                            <th>
                                Status
                            </th>
                            <th>Ações</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <td>
                                456456
                            </td>
                            <td>
                                R$ 60,00
                            </td>
                            <td>
                                10/11/2019
                            </td>
                            <td>
                                10%
                            </td>
                            <td>
                                R$ 6,00
                            </td>
                            <td>
                                Em validação
                            </td>
                            <td>
                                <ButtonAction onClick={() => setOpenModal(true)}>
                                    Editar
                                </ButtonAction>
                                /
                                <ButtonAction>
                                    Apagar
                                </ButtonAction>
                            </td>
                        </tr>
                    </Tbody>
                </Table>
            </Panel>
            <CustomModal isOpen={openModal}>
                <PurchaseForm
                    buttonClose={() => setOpenModal(false)}
                    buttonConfirm={() => {}}
                />
            </CustomModal>
            <PositionButton>
                <Button onClick={() => logout()} backgroundColor='white' fontColor='blueGrey1'>
                    Desconectar
                </Button>
            </PositionButton>
        </Container>
    )
}

export default withRouter(CashbackList);