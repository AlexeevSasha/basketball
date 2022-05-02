import {FC} from "react";
import ReactPaginate from "react-paginate";
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import styled from "styled-components";


export interface IReactPaginateProps {
    initialPage?: number;
    pageCount: number;
    onChange?: ({selected}: { selected: number }) => void
}

export const Pagination: FC<IReactPaginateProps> = ({
                                                        initialPage,
                                                        pageCount,
                                                        onChange
                                                    }) => {
    return (
        <ReactPaginationStyle
            initialPage={initialPage}
            pageCount={pageCount}
            onPageChange={onChange}
            activeClassName="pagination__active"
            previousLabel={
                <img src={arrowLeft} alt=""/>
            }
            nextLabel={
                <img src={arrowRight} alt=""/>
            }
        />
    )
};

const ReactPaginationStyle = styled(ReactPaginate)`
  display: flex;
  padding: 0;

  & > li {
    margin: 0 8px;
    width: 40px;
    height: 40px;
    @media ${({theme}) => theme.media._980} {
      width: 30px;
      height: 30px;
      margin: 0 4px;
    }
  }

  & > li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${({theme}) => theme.colors.grey};
    border-radius: 4px;
    border-color: transparent;
    cursor: pointer;
    @media ${({theme}) => theme.media._980} {
      width: 30px;
      height: 30px;
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.lightestGrey};
    }
  }

  & > .pagination__active > a {
    background-color: ${({theme}) => theme.colors.red};
    color: white;

    &:focus {
      cursor: default;
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.red};
    }
  }

  & > .disabled > a {
    cursor: default;

    &:hover {
      background-color: transparent;
    }
  }
`
