import {FC, useEffect, useState, memo} from "react";
import styled from "styled-components";
import {InputFile, Input, ButtonCancel, Button, BreadCrumbs, Notification} from "../../../../common/components";
import {useForm} from "react-hook-form";
import {IAddTeam, IGetTeams} from "../../../../api/teams/teamsDto";
import {useNavigate, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../core/redux/reduxType";
import {editTeamThunk, addTeamThunk} from "../../teamsAction";

interface IProps {
    dataTeam?: IGetTeams;
    isEditFlag?: boolean
}

export const FormTeam: FC<IProps> = memo(({dataTeam, isEditFlag}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {errorTeams} = useAppSelector(state => state.teams);

    const [imgSave, setImgSave] = useState('');

    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<IAddTeam>();

    const onSubmit = (data: IAddTeam) => {
        if (isEditFlag) {
            dispatch(editTeamThunk({data: {...data, id: Number(dataTeam?.id)}, callback: () => navigate(-1)}))
        } else {
            dispatch(addTeamThunk({data: {...data, imageUrl: imgSave}, callback: () => navigate(-1)}))
        }
    };

    useEffect(() => {
        reset(dataTeam);
    }, [dataTeam]);

    return (
        <Wrapper>
            <Notification error={errorTeams}/>
            <BreadCrumbs/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputFileContainer>
                    <InputFile  {...register('imageUrl')} listFile={watch('imageUrl')} imgHandler={setImgSave}/>
                </InputFileContainer>
                <FormRight>
                    <Input id='nameTeam' title="Name"
                           {...register('name', {required: 'Name required'})}
                           error={errors.name?.message}/>
                    <Input id='Division' title="Division"
                           {...register('division', {required: 'Division required'})}
                           error={errors.division?.message}/>
                    <Input id='Conference' title="Conference"
                           {...register('conference', {required: 'Conference required'})}
                           error={errors.conference?.message}/>
                    <Input id='Year' title="Year of foundation"
                           {...register('foundationYear', {
                               required: 'Year of foundation required',
                               pattern: {
                                   value: /(?:19|20)\d{2}/i,
                                   message: "Invalid year"
                               },
                           })}
                           error={errors.foundationYear?.message}/>
                    <BtnWrapper>
                        <ButtonCancel type='button' onClick={() => navigate(-1)}/>
                        <Button type='submit'>Save</Button>
                    </BtnWrapper>
                </FormRight>
            </Form>
        </Wrapper>
    )
})
const InputFileContainer = styled.div`
  max-width: 500px;
  width: 100%;
  @media ${({theme}) => theme.media._980} {
    display: flex;
    justify-content: center;
  };
`

const Wrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding-bottom: 48px;
`
// const BreadCrumbs = styled.h4`
//   color: ${({theme}) => theme.colors.red};
//   font-weight: 500;
//   padding: 24px 0 0 32px;
//   cursor: pointer;
//   @media ${({theme}) => theme.media._768} {
//     padding: 16px 0 0 16px;
//   };
// `

const Form = styled.form`
  position: relative;
  display: flex;
  margin: 72px 72px 0 72px;

  & > :first-child {
    margin-right: 48px;
  }

  @media ${({theme}) => theme.media._980} {
    margin: 24px 24px 0 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > :first-child {
      margin: 0 0 24px;
    }
  };
`
const FormRight = styled.div`
  display: grid;
  gap: 24px;
  max-width: 366px;
  width: 100%;
`
const BtnWrapper = styled.div`
  display: flex;

  & > :last-child {
    margin-left: 24px;
  }
`