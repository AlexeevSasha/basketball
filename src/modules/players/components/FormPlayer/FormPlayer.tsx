import {FC, memo, useEffect, useState} from "react";
import styled from "styled-components";
import {
    InputFile,
    Input,
    ButtonCancel,
    Button,
    Selects,
    BreadCrumbs,
    Notification
} from "../../../../common/components";
import {optionsPosition} from "../../../../common/components/Select/data";
import {useNavigate} from "react-router-dom";
import {useForm, Controller} from "react-hook-form";
import {IAddPlayer, IGetPlayerResponse} from "../../../../api/players/playersDto";
import {IOption} from "../../../../common/components/Select/Select";
import {useAppDispatch, useAppSelector} from "../../../../core/redux/reduxType";
import {addPlayersThunk, editPlayersThunk} from "../../playersAction";
import {format} from 'date-fns'


interface IProps {
    dataPlayer?: IGetPlayerResponse;
    isEditFlag?: boolean
}

export const FormPlayer: FC<IProps> = memo(({dataPlayer, isEditFlag}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {errorPlayers} = useAppSelector(state => state.players);
    const {teamOption} = useAppSelector(state => state.teams);

    const [imgSave, setImgSave] = useState('');

    const {register, handleSubmit, control, watch, reset, formState: {errors}} = useForm<IAddPlayer>();

    const onSubmit = (data: IAddPlayer) => {
        const date = new Date(data?.birthday).toISOString()
        if (isEditFlag) {
            dispatch(editPlayersThunk({
                data: {...data, birthday: date, id: Number(dataPlayer?.id), avatarUrl: imgSave},
                callback: () => navigate(-1)
            }))
        } else {
            dispatch(addPlayersThunk({
                data: {...data, birthday: date, avatarUrl: imgSave},
                callback: () => navigate(-1)
            }))
        }
    };

    useEffect(() => {
        if (!dataPlayer) return;
        const date = format(new Date(dataPlayer.birthday), 'yyyy-MM-dd');
        reset({...dataPlayer, birthday: date});
    }, [dataPlayer]);

    return (
        <Wrapper>
            <Notification error={errorPlayers}/>
            <BreadCrumbs/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputFileContainer>
                    <InputFile  {...register('avatarUrl')} listFile={watch('avatarUrl')} imgHandler={setImgSave}/>
                </InputFileContainer>
                <FormRight>
                    <Input id='namePlayer' title="Name"
                           {...register('name', {required: 'Name required'})}
                           error={errors.name?.message}
                    />
                    <Controller control={control} name='position' rules={{required: 'This field is required'}}
                                render={({field: {onChange, value}}) => <Selects label='Position'
                                                                                 id='PositionSelect'
                                                                                 options={optionsPosition}
                                                                                 error={errors.position?.message}
                                                                                 value={optionsPosition.find((currenOption) => currenOption.value === value)}
                                                                                 onChange={(value: IOption) => onChange(value.value)}
                                />}
                    />
                    <Controller control={control} name='team' rules={{required: 'This field is required'}}
                                render={({field: {onChange, value}}) => <Selects label='Teams'
                                                                                 id='TeamsSelect'
                                                                                 options={teamOption}
                                                                                 error={errors.team?.message}
                                                                                 value={teamOption.find((currenOption) => currenOption.value === value)}
                                                                                 onChange={(value: IOption) => onChange(value.value)}
                                />}
                    />
                    <Grid>
                        <Input id='Height' title="Height (cm)" type='number'
                               {...register('height', {required: 'Height required', valueAsNumber: true})}
                               error={errors.height?.message}
                        />
                        <Input id='Weight' title="Weight (kg)" type='number'
                               {...register('weight', {required: 'Weight required', valueAsNumber: true})}
                               error={errors.weight?.message}
                        />
                        <Input id='Birthday' title="Birthday" type='date' date
                               {...register('birthday', {required: 'Birthday required'})}
                               error={errors.birthday?.message}
                        />
                        <Input id='Number' title="Number" type='number'
                               {...register('number', {required: 'Number required', valueAsNumber: true})}
                               error={errors.number?.message}
                        />
                    </Grid>
                    <BtnWrapper>
                        <ButtonCancel type='button' onClick={() => navigate(-1)}/>
                        <Button type='submit'>Save</Button>
                    </BtnWrapper>
                </FormRight>
            </Form>
        </Wrapper>
    )
})

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
`


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