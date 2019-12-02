// Modules
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

// Containers
import Container from 'components/Container/Container';
import Image from 'components/Image/Image';
import { Link } from 'react-router-dom';

// Routes
import MyRouter from 'router/routes';

// Images
import images from 'images';

const AppWrapper = styled('main')`
${({ theme }) =>`
    min-height: 100vh;
    background: ${theme.colors.grey3};
    position: relative;
    padding-bottom: ${theme.spacing.px90};
    box-sizing: border-box;
`}`

const ImageWrapper = styled('figure')`
${({ theme }) =>`
    margin: ${theme.spacing.none};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`}`

const FooterWrapper = styled('footer')`
${({ theme }) =>`
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSize.px12};
    color: ${theme.colors.blueGrey3};
    margin-top: ${theme.spacing.px70};
    width: ${theme.spacing.full};
    box-sizing: border-box;
    position: absolute;
    left: ${theme.spacing.none};
    right: ${theme.spacing.none};
    bottom: ${theme.spacing.px30};
    @media screen and (max-width: 700px) {
        position: static;
    }
`}`

const CustomLink = styled(Link)`
${({ theme }) =>`
    color: ${theme.colors.blue2};
    text-align: center;
    outline: none;
    margin-left: ${theme.spacing.px3};
    @media screen and (max-width: 500px) {
        margin-bottom: ${theme.spacing.px30};
    }
`}`

function App() {
    return (
        <AppWrapper>
            <Container>
                <ImageWrapper>
                    <Image src={images.logoBoticario} atl="Logo Grupo Boticário" />
                </ImageWrapper>
            </Container>
            <MyRouter />
            <Container>
                <FooterWrapper>
                    Desenvolvido por <CustomLink to="/Developer">Diego Jacomel</CustomLink>
                </FooterWrapper>
            </Container>
        </AppWrapper>
    );
}

export default withRouter(App);
