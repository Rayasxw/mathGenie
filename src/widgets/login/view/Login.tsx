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
import { useLogin } from '@src/entities/auth/Login';
import { useNavigate } from 'react-router-dom';
import { paths } from '@src/shared/constants/constants';

interface LoginForm {
  username: string;
  password: string;
}
export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const navigate = useNavigate();
  const loginMutation = useLogin(() => navigate(paths.home, { replace: true }));

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
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
            {loginMutation.isError && (
              <Typography
                variant="bodyText"
                align="center"
                style={{ color: 'red' }}
              >
                Ошибка входа:{' '}
                {loginMutation.error?.response?.data?.message ||
                  'Не удалось войти'}
              </Typography>
            )}
            <CustomButton>Войти</CustomButton>
          </Form>
        </div>
      </Container>
    </section>
  );
};
