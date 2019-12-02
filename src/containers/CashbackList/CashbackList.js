// Modules
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import numeral from 'numeral';

// Components
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';
import CustomModal from 'components/CustomModal/CustomModal';

// Containers
import PurchaseForm from 'containers/PurchaseForm/PurchaseForm'

// Services
import { CashbackService } from 'services';

numeral.register('locale', 'pt-BR', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'mil',
        million: 'milhões',
        billion: 'b',
        trillion: 't'
    },
    ordinal : () => 'º',
    currency: {
        symbol: 'R$'
    }
});

numeral.locale('pt-BR')

const Table = styled('table')`
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
            @media screen and (max-width: 900px) {
                line-height: 1.8;
            }
        }
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`}`

const Tbody = styled('tbody')`
${({ theme }) =>`
    tr {
        td {
            border-top: 1px solid ${theme.colors.grey2};
            line-height: 3;
            @media screen and (max-width: 900px) {
                line-height: 1.8;
                border-top: 1px solid transparent;
                &:first-child {
                    border-top: 1px solid ${theme.colors.grey2};
                }
            }
        }
    }
`}`

const Tr = styled('tr')`
${({ theme }) =>`
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin-bottom: ${theme.spacing.px30};
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
    outline: none;
`}`

const HeaderPage = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`}`

const ButtonCreatePurchase = styled('button')`
${({ theme }) =>`
    background: none;
    border: none;
    padding: 0;
    outline: none;
    color: ${theme.colors.blue2};
    cursor: pointer;
    @media screen and (max-width: 700px) {
        margin-top: ${theme.spacing.px20};
    }
`}`

const HeaderMobile = styled('div')`
${() =>`
    font-weight: bold;
    @media screen and (min-width: 900px) {
        display: none;
    }
`}`

const TotalWrapper = styled('div')`
${({ theme }) =>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacing.px70};
    & > strong {
        margin-left: ${theme.spacing.px3};
        font-size: ${theme.fontSize.px20};
    }
`}`

function CashbackList(props) {
    const { history } = props;
    const [openModal, setOpenModal] = useState(false);
    const [currentCode, setCurrentCode] = useState(null);
    const [tableHeaders,] = useState([
        'Compra', 'Valor', 'Data', 'Cashback (%)', 'Cashback (R$)', 'Status', 'Ações'
    ]);
    const [, updateState] = React.useState();
    const purchaseData = JSON.parse(localStorage.getItem('purchaseData'));

    useEffect(() => {
        getCashbackTotal()
    }, [])

    useEffect(() => {
        if (localStorage.getItem('logged') === false) {
            history.push('/Login')
        }
    }, [history])

    const forceUpdate = useCallback(() => updateState({}), []);

    const getCashbackTotal = async () => {
        const cpf = localStorage.getItem('userActive');
        const response = await CashbackService.CashbackByCPF(cpf)

        console.log(response)

        return 
    }

    const logout = () => {
        localStorage.setItem('logged', false);
        history.push('/Login')
    }

    const deleteLine = (codigo) => {
        const purchaseData = JSON.parse(localStorage.getItem('purchaseData'));
        const newPurchaseData = JSON.stringify(purchaseData.filter(x => x.codigo !== codigo));
        
        localStorage.setItem('purchaseData', newPurchaseData)
        forceUpdate()
    }
    
    const editLine = (codigo) => {
        setCurrentCode(codigo)
        setOpenModal(true)
    }

    return (
        <Container flex>
            <Panel maxWidth="1200px">
                <HeaderPage>
                    <Title marginBottom='none'>
                        Relatório de Cashback
                    </Title>
                    <ButtonCreatePurchase onClick={() => editLine(null)}>
                        + Cadastrar nova compra
                    </ButtonCreatePurchase>
                </HeaderPage>
                {!!purchaseData && !!purchaseData.length
                    ?
                    <Table cellSpacing="0" cellPadding="0">
                        <Thead>
                            <Tr>
                                {tableHeaders.map((val, index) => (
                                    <th key={index}>
                                        {val}
                                    </th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {purchaseData.map((val, index) => (
                                <Tr key={index}>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[0]}
                                        </HeaderMobile>
                                        {val.codigo}
                                    </td>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[1]}
                                        </HeaderMobile>
                                        R$ {numeral(val.valor).format('0.0,[00]')}
                                    </td>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[2]}
                                        </HeaderMobile>
                                        {val.data_compra}
                                    </td>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[3]}
                                        </HeaderMobile>
                                        10%
                                    </td>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[4]}
                                        </HeaderMobile>
                                        R$ {numeral(+val.valor * 0.1).format('0.0,[00]')}
                                    </td>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[5]}
                                        </HeaderMobile>
                                        Em validação
                                    </td>
                                    <td>
                                        <HeaderMobile>
                                            {tableHeaders[6]}
                                        </HeaderMobile>
                                        <ButtonAction onClick={() => editLine(val.codigo)}>
                                            Editar
                                        </ButtonAction>
                                        /
                                        <ButtonAction onClick={() => deleteLine(val.codigo)}>
                                            Apagar
                                        </ButtonAction>
                                    </td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    :
                    null
                }
            </Panel>
            <TotalWrapper>
                Cashback total: <strong>{numeral(0).format('0.0,[00]')}</strong>
            </TotalWrapper>
            <CustomModal isOpen={openModal}>
                <PurchaseForm
                    buttonClose={() => setOpenModal(false)}
                    buttonOpen={() => setOpenModal(true)}
                    currentCode={currentCode}
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