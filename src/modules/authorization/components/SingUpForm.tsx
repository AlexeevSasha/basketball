import {FC, useEffect, useState} from "react";
import {Input, Button, InputCheckbox, Notification} from "../../../common/components";
import {Container, FormContainer, Title, Form, Text, TextLink} from './style'
import {useForm} from "react-hook-form";
import {IFormRegistration} from "./interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {registerThunk} from "../authorizationAction";


export const SingUpForm: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {user, errorAuth} = useAppSelector(state => state.auth);
    const [isChecked, setIsChecked] = useState(false);

    const {register, handleSubmit, watch, formState: {errors}} = useForm<IFormRegistration>();
    const passwordCurrent = watch("password", "");

    const onSubmit = (data: IFormRegistration) => {
        const {login, userName, password} = data;
        dispatch(registerThunk({login, userName, password}))
    };
    useEffect(() => {
        if (user) navigate('/teams', {replace: true})
    }, [user])
    return (
        <Container>
            <Notification error={errorAuth}/>
            <FormContainer>
                <Title>Sign Up</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input id='nameUp' title={'Name'} {...register('userName', {required: 'Name required'})}
                           error={errors.userName?.message}/>
                    <Input id='loginUp' title={'Login'} {...register('login', {required: 'Login required'})}
                           error={errors.login?.message}/>
                    <Input id='passwordUp' title={'Password'} type="password" {...register('password', {
                        required: 'Password required',
                        minLength: {
                            value: 3,
                            message: 'Password must contain at least 3 characters'
                        }
                    })} error={errors.password?.message}/>
                    <Input id='passwAgain' title={'Enter your password again'}
                           type="password" {...register('confirmPassword',
                        {
                            required: 'Confirm password',
                            validate: value => value === passwordCurrent || "The passwords do not match"
                        })} error={errors.confirmPassword?.message}/>
                    <InputCheckbox value={isChecked} onChange={setIsChecked}/>
                    <Button disabled={!isChecked}>Sign Up</Button>
                </Form>
                <Text>
                    Already a member? <TextLink to='/login'>Sign In</TextLink>
                </Text>
            </FormContainer>
        </Container>
    )
}