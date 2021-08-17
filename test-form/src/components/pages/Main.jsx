import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Input } from './../atoms/Input';

export const Main = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [gitHub, setGitHub] = useState('');

  return (
    <div>
      <div>Анкета соискателя</div>
      <div>Личные данные</div>
      <Input
        type="text"
        label="Имя"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <Input
        type="text"
        label="Фамилия"
        value={surname}
        onChange={e => setSurname(e.target.value)}
        required
      />
      <Input
        type="email"
        label="Электронная почта"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Input type="file" value={file} onChange={e => setFile(e.target.value)} />
      <div>
        <div>Пол *</div>
        <div>Укажите пол</div>
      </div>
      <checkbox></checkbox>
      <checkbox></checkbox>
      <div>Github</div>
      <Input
        type="text"
        value={gitHub}
        onChange={e => setGitHub(e.target.value)}
        label="Вставьте ссылку на Github"
      />
      <checkbox></checkbox>
      <div>* Я согласен с политикой конфиденциальности</div>
      <Button disabeled label="Отправить"></Button>
    </div>
  );
};
