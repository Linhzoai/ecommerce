import InputCommon from '@/components/InputCommon/InputCommon';
import style from './style.module.scss';
import Button from '@/components/Button/Button';
import Title from '../Components/Title/Title';
export default function Login() {
    const { container, checkBox } = style;
    return (
        <div className={container}>
            <Title title="SIGN IN" />
            <InputCommon label="Username or email *" type="text" />
            <InputCommon label="Password *" type="password" />
            <div className={checkBox}>
                <input type="checkbox" />
                Remember me
            </div>
            <Button content="Login" style={{ width: '100%', marginBottom: '20px' }} />

            <a href="#">Lost your password?</a>
        </div>
    );
}
