import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';
import { graphql, useStaticQuery } from 'gatsby';

const FooterBlock = styled.div`
  height: 100px;
  padding-top: 2rem;
`;

const FooterInner = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.palette.darkBlue};
  padding: 2rem;
  border-top: solid 1px ${props => props.theme.palette.darkBlue};
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <FooterBlock>
      <ContentWrapper>
        <FooterInner>
          <p>
            Copyright © {new Date().getFullYear()}{' '}
            <a href="https://github.com/billowycloud">
              Spicy Cookie ({data.site.siteMetadata.author})
            </a>
          </p>
        </FooterInner>
      </ContentWrapper>
    </FooterBlock>
  );
};

export default Footer;