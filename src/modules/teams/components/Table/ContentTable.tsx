import {FC, SyntheticEvent} from 'react'
import styled from "styled-components";
import {IGetPlayer} from "../../../../api/players/playersDto";
import noLogo from '../../../../assets/images/no-logo-player.svg'

interface Props {
    data: IGetPlayer
}

export const ContentTable: FC<Props> = ({data}) => {
    const {name, number, avatarUrl, birthday, position, height, weight} = data;
    const addDefaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = noLogo;
    return (
        <tr>
            <td>{number}</td>
            <Flex>
                <ImgWrapper><img src={avatarUrl || noLogo} onError={addDefaultSrc}/></ImgWrapper>
                <div>
                    <div>
                        {name}
                    </div>
                    <Position>
                        {position}
                    </Position>
                </div>
            </Flex>
            <TableTd>{height}</TableTd>
            <TableTd>{weight}</TableTd>
            <TableTd>{birthday}</TableTd>
        </tr>
    )
}

const Position = styled.div`
  color: ${({theme}) => theme.colors.lightGrey};
`
const Flex = styled.td`
  display: flex;
  align-items: center;
`
const ImgWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: 10px;

  & > img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
  }
`

const TableTd = styled.td`
  @media ${({theme}) => theme.media._980} {
    display: none;
  }
`









