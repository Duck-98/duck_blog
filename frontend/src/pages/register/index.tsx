import React from 'react';
import { useForm, appendErrors } from 'react-hook-form';
import { Container, Form } from './style';

interface DataForm {
  Nickname: 'string';
  Email: 'string';
  Password: 'string';
  PasswordCheck: 'string';
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="sub-container">
        <label className="title">회원가입</label>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="닉네임"
            {...register('Nickname', {
              required: true,
              maxLength: {
                value: 12,
                message: '닉네임은 12자 이하로 입력하여 주시길 바랍니다.',
              },
            })}
          />
          {errors.Nickname.message}
          <input type="text" placeholder="이메일" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
          <input
            type="password"
            placeholder="비밀번호"
            {...register('Password', {
              required: true,
              min: 4,
              maxLength: {
                value: 20,
                message: '비밀번호는 20자 이하로 입력하여 주시길 바랍니다.',
              },
            })}
          />
          {errors.Password.message}
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register('PasswordCheck', {
              required: true,
              min: 4,
              maxLength: {
                value: 20,
                message: '비밀번호는 20자 이하로 입력하여 주시길 바랍니다.',
              },
            })}
          />
          {errors.PasswordCheck.message}
          <input className="submit" type="submit" value="회원가입" />
        </Form>
      </div>
    </Container>
  );
};

export default Register;
