import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Input } from './../atoms/Input';
import { Modal } from './../atoms/Modal';

export const Main = () => {

  //хуки для полей
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [file, setFile] = useState();
  const [gitHub, setGitHub] = useState();

  //открытие модалки
  const [handleModal, setHandleModal] = useState(false)

  //проверка на ворнинги
  const [warnCheck, setWarnCheck] = useState(false)


  return (
    <div style={{position: 'absolute', zIndex: '2'}}>
      <div>Анкета соискателя</div>
      <div>Личные данные</div>
      <Input
        type="text"
        label="Имя"
        placeholder="Имя"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        warn={warnCheck}
      />
      <Input
        type="text"
        label="Фамилия"
        placeholder="Фамилия"
        value={surname}
        onChange={e => setSurname(e.target.value)}
        required
        warn={warnCheck}
      />
      <Input
        type="email"
        placeholder="Электронная почта"
        label="Электронная почта"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        warn={warnCheck}
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
      <Button onClick={()=>{if (name && surname && email){setHandleModal(true)} else{ setWarnCheck(true)}}} label="Отправить"></Button>
      {handleModal && <Modal buttonLabel='Понятно' text='Мы скоро свяжемся с вами' header={`Спасибо ${name}!`} small/>}
    </div>
  );
};
