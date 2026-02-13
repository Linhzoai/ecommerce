import InputCommon from '@/components/InputCommon/InputCommon';
import style from './style.module.scss';
import Button from '@/components/Button/Button';
import Title from '../Components/Title/Title';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMemo, useState } from 'react';
import { authStore } from '@/stores/authStore';
import Cookies from 'js-cookie';
const createSchema = (isRegister: boolean) => {
    return z
        .object({
            email: z.string().min(1, 'Email không được để trống').email('Email không hợp lệ'),
            password: z.string().min(6, 'Password phải có ít nhất 6 ký tự'),
            confirmPassword: z.string().optional(),
        })
        .superRefine((data, ctx) => {
            if (isRegister) {
                if (data?.confirmPassword?.length === 0) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Xác nhận mật khẩu không được để trống',
                        path: ['confirmPassword']
                    });
                } else if (data.password !== data.confirmPassword) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Mật khẩu không khớp',
                        path: ['confirmPassword']
                    });
                }
            }
        });
};

type FormData = z.infer<ReturnType<typeof createSchema>>;

export default function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const { container, checkBox } = style;
    const { signIn, signUp , loading} = authStore();

    const schema = useMemo(() => createSchema(isRegister), [isRegister]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onBlur'
    });
    const onSubmit = async (data: FormData) => {
        if (isRegister) {
            try {
                const { email, password } = data;
                await signUp({ email, password });
                setIsRegister(false);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const { email, password } = data;
                await signIn({ email, password }).then((res: any)=>{
                    Cookies.set('accessToken', res.accessToken)
                });
            } catch (error) {
                console.log(error);
            }
        }
    };
    const hanldeClickRegister = () => {
        setIsRegister((prev) => !prev);
        reset();
    };
    return (
        <div className={container}>
            <Title title={!isRegister ? 'SIGN IN' : 'SIGN UP'} />
            <form action="" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <InputCommon
                    label="Username or email *"
                    type="text"
                    {...register('email')}
                    err={errors.email?.message}
                />
                <InputCommon
                    label="Password *"
                    type="password"
                    {...register('password')}
                    err={errors.password?.message}
                />
                {isRegister && (
                    <InputCommon
                        label="Confirm Password *"
                        type="password"
                        {...register('confirmPassword')}
                        err={errors.confirmPassword?.message}
                    />
                )}
                {!isRegister && (
                    <div className={checkBox}>
                        <input type="checkbox" />
                        Remember me
                    </div>
                )}
                <Button
                    content={!isRegister ? 'Đăng nhập' : 'Tạo tài khoản'}
                    style={{ width: '100%', marginBottom: '10px' }}
                    type="submit"
                    disabled={loading} 
                />
            </form>
            <Button
                content={!isRegister ? 'Chưa có tài khoản ?' : 'Đã có tài khoản ?'}
                onClick={hanldeClickRegister}
                isPrimary={false}
                style={{ width: '100%' }}
                disabled={loading}
            />
            <a href="#">Lost your password?</a>
        </div>
    );
}
