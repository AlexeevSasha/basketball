import {FC, Fragment} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const BreadCrumbs: FC = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <Container>
            <nav>
                {breadcrumbs.map(({breadcrumb, key}, index) => {
                    if (key === '/') return;
                    if (breadcrumbs.length === index + 1) return <span key={key}>{breadcrumb}</span>;
                    return (
                        <Fragment key={key}>
                            <LinkStyle to={key}>{breadcrumb}</LinkStyle>
                            <Span> / </Span>
                        </Fragment>)
                })}
            </nav>
        </Container>
    )
}


const Container = styled.h4`
  color: ${({theme}) => theme.colors.red};
  font-weight: 500;
  padding: 24px 0 0 32px;
  @media ${({theme}) => theme.media._768} {
    padding: 16px 0 0 16px;
  };
`

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.red};
  font-weight: 500;
`;

const Span = styled.span`
  color: ${({theme}) => theme.colors.lightGrey};
`