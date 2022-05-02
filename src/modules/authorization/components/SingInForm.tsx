import {FC, useEffect} from "react";
import {Input, Button, Notification} from "../../../common/components";
import {Container, FormContainer, Title, Form, Text, TextLink} from './style';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {IFormLogin} from "./interfaces";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {loginThunk} from "../authorizationAction";


export const SingInForm: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {user, errorAuth} = useAppSelector(state => state.auth);
    const {register, handleSubmit, formState: {errors}} = useForm<IFormLogin>();

    const onSubmit = (data: IFormLogin) => {
        dispatch(loginThunk(data))
    };
    useEffect(() => {
        if (user) navigate('/teams', {replace: true})
    }, [user])
    return (
        <>
            <Notification error={errorAuth}/>
            <Container>
                <FormContainer>
                    <Title>Sign In</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input id='loginIn' title={'Login'}
                               {...register('login', {required: 'Login required'})}
                               error={errors.login?.message}/>
                        <Input id='passwordIn' title={'Password'} type="password"
                               {...register('password', {
                                   required: 'Password required',
                                   minLength: {
                                       value: 3,
                                       message: 'Password must contain at least 3 characters'
                                   }
                               })} error={errors.password?.message}/>
                        <Button>Sign In</Button>
                    </Form>
                    <Text>
                        Not a member yet? <TextLink to='/registration'>Sign up</TextLink>
                    </Text>
                </FormContainer>
            </Container>
        </>
    )
}