// Modules
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

// Components
import Title from 'components/Title/Title';
import FormControl from 'components/FormControl/FormControl';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const PurchaseWrapper = styled('div')`
${({ theme }) =>`
    width: ${theme.spacing.full};
    box-sizing: border-box;
    padding: ${theme.spacing.none} ${theme.spacing.px30};
`}`

const PurchaseFooter = styled('footer')`
${({ theme }) =>`
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacing.px30};
    & > button {
        outline: none;
        margin-left: ${theme.spacing.px15};
        margin-right: ${theme.spacing.none};
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
        & > button {
            margin-left: ${theme.spacing.none};
            margin-right: ${theme.spacing.none};
            &:first-child {
                margin-bottom: ${theme.spacing.px10}
            }
        }
    }
`}`

function PurchaseForm({ buttonClose, currentCode }) {
    const [data, setData] = useState({
        codigo: '',
        valor: '',
        data_compra: ''
    })

    useEffect(() => {
        if (!!currentCode) {
            const localPurchase = JSON.parse(localStorage.getItem('purchaseData'));
            const newLocalPurchase = localPurchase.find(x => x.codigo === currentCode);

            setData({
                codigo: newLocalPurchase.codigo,
                valor: newLocalPurchase.valor,
                data_compra: newLocalPurchase.data_compra
            })
        }
    }, [currentCode])

    const buttonConfirm = () => {
        const localPurchase = JSON.parse(localStorage.getItem('purchaseData'));

        if (!localPurchase) {
            localStorage.setItem('purchaseData', JSON.stringify([data]));
        } else if (currentCode === data.codigo) {
            const arrayWithoutCurrent = localPurchase.filter(x => x.codigo !== currentCode);

            localStorage.setItem('purchaseData', JSON.stringify([
                ...arrayWithoutCurrent,
                data
            ]));
        } else {
            localStorage.setItem('purchaseData', JSON.stringify([
                ...localPurchase,
                data
            ]));
        }

        setData({
            codigo: '',
            valor: '',
            data_compra: ''
        })

        buttonClose()
    }

    const buttonClear = () => {
        setData({
            codigo: '',
            valor: '',
            data_compra: ''
        })

        buttonClose()
    }

    return (
        <PurchaseWrapper>
            <Title>
                Cadastro de compras
            </Title>
            <FormControl>
                <Label>
                    Código do produto
                </Label>
                <Input
                    type='text'
                    name='codigo'
                    id='codigo'
                    onChange={e => setData({
                        ...data,
                        codigo: e.target.value
                    })}
                    value={data.codigo}
                />
            </FormControl>
            <FormControl>
                <Label>
                    Valor do produto
                </Label>
                <Input
                    type='text'
                    name='valor'
                    id='valor'
                    onChange={e => setData({
                        ...data,
                        valor: e.target.value
                    })}
                    value={data.valor}
                />
            </FormControl>
            <FormControl>
                <Label>
                    Data da compra
                </Label>
                <Input
                    type='text'
                    name='dataCompra'
                    id='dataCompra'
                    mask="99/99/9999"
                    onChange={e => setData({
                        ...data,
                        data_compra: e.target.value
                    })}
                    value={data.data_compra}
                />
            </FormControl>
            <PurchaseFooter>
                <Button backgroundColor="grey2" onClick={() => buttonClear()}>
                    Fechar
                </Button>
                <Button backgroundColor="blue2" onClick={() => buttonConfirm()}>
                    Editar
                </Button>
            </PurchaseFooter>
        </PurchaseWrapper>
    )
}

export default PurchaseForm;