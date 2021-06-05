import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import ContentWrapper from "../styles/contentWrapper"
import Context from "../context"
import Logo from "./logo"
import { lightTheme, darkTheme } from "../styles/theme"
// import { footerLinks } from "../../config"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.background : theme.colors.primary};
  border-top: ${({ theme, darkMode }) =>
    darkMode ? `3px solid ${theme.colors.boxShadowHover}` : null};
  margin-top: 10rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-links {
      /* Adjust width of links wrapper accordingly */
      width: 10rem;
      display: flex;
      justify-content: space-between;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 15rem;
      }
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme, $darkMode }) =>
    $darkMode ? theme.colors.primary : theme.colors.background};
  letter-spacing: 1px;
`

const Footer = () => {
  const { darkMode } = useContext(Context).state
  return (
    <StyledFooter darkMode={darkMode}>
      <StyledContentWrapper>
        <Logo
          size="1.5rem"
          color={
            darkMode ? darkTheme.colors.primary : lightTheme.colors.background
          }
          altText={"Made with ❤ & Gatsby"}
        />
        {/*<div className="footer-links" data-testid="footer-links">*/}
        {/*  {footerLinks.length !== 0 &&*/}
        {/*    footerLinks.map(({ name, url }, key) => (*/}
        {/*      <StyledLink key={key} to={url} $darkMode={darkMode}>*/}
        {/*        {name}*/}
        {/*      </StyledLink>*/}
        {/*    ))}*/}
        {/*</div>*/}
      </StyledContentWrapper>
    </StyledFooter>
  )
}

export default Footer
