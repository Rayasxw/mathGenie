import {
  Container,
  CustomButton,
  CustomInput,
  Typography,
} from '@src/shared/ui';
import { Form } from '@src/shared/ui/form/view/Form';
import { FC } from 'react';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { AuthState, LoginProps } from '../types/types';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { paths } from '@src/shared/constants/constants';

export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const login = useAuthStore((state: AuthState) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      await login(data);
      console.log('Вход выполнен!');
      navigate(paths.home, { replace: true });
    } catch (err) {
      console.error('Ошибка входа:', err);
    }
  };

  return (
    <section>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Typography
              variant="h1"
              className={styles.gradientText}
              align="center"
            >
              Math Genie
            </Typography>
            <Typography
              variant="bodyText"
              align="center"
              className={styles.text}
            >
              Образовательная платформа
            </Typography>
          </div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            width="400px"
            className={styles.loginForm}
          >
            <Typography variant="h2" align="center">
              Войти в систему
            </Typography>
            <Typography variant="bodyText" align="center">
              Введите свои учетные данные
            </Typography>
            <CustomInput
              placeholder="Введите логин"
              {...register('username', { required: 'Логин обязателен' })}
              error={errors.username?.message}
            />
            <CustomInput
              type="password"
              placeholder="Введите пароль"
              {...register('password', { required: 'Пароль обязателен' })}
              error={errors.password?.message}
            />
            <CustomButton>Войти</CustomButton>
          </Form>
        </div>
      </Container>
    </section>
  );
};
