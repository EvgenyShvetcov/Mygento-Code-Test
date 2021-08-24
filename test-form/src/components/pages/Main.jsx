import React, { useState, useRef, useEffect } from "react";
import { Button } from "../atoms/Button";
import { Input } from "./../atoms/Input";
import { Modal } from "./../atoms/Modal";
import { text } from "./../../icons/text.js";
import Vector from "./../../icons/Vector.svg";
import bigclip from "./../../icons/bigclip.svg";
import plus from "./../../icons/plus.svg";

export const Main = () => {
  //хуки для полей
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState();
  const [uploadData, setUploadData] = useState();
  const [sex, setSex] = useState();
  const [policy, setPolicy] = useState(false);

  //стейт для сброса данных
  const [submit, setSubmit] = useState(false);

  //открытие модалки
  const [handleModal, setHandleModal] = useState(false);
  const [handlePolicyModal, setHandlePolicyModal] = useState(false);

  //проверка на ворнинги
  const [warnCheck, setWarnCheck] = useState(false);

  // реф для загрузки файлов под баттаном
  const fileUploaderRef = useRef();

  // хэндлер пола

  const sexHandler = (e) => {
    const event = e.target.value;
    setSex(event);
  };

  useEffect(() => {
    setName("");
    setSurname("");
    setEmail("");
    setGitHub("");
    setUploadData();
    setSex();
    setPolicy();
    setWarnCheck(false);
    // setHandleModal(false)
  }, [submit]);

  return (
    <div className="blank">
      <div className="blank__header">
        Анкета {window.screen.width < "760px" && <br />}соискателя
      </div>
      <div className="blank__data">
        <div className="blank__lesserheader">Личные данные</div>
        <div className="blank__topform">
          <div className="blank__left">
            <Input
              type="text"
              label="Имя"
              placeholder="Имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              warn={warnCheck}
              warning={!/^[a-zа-яё]+$/i.test(name)}
            />
            <Input
              type="text"
              label="Фамилия"
              placeholder="Фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              warn={warnCheck}
              warning={!/^[a-zа-яё]+$/i.test(surname)}
            />
          </div>
          <div className="blank__right">
            <Input
              type="email"
              placeholder="Электронная почта"
              label="Электронная почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              warn={warnCheck}
              warning={
                email.length <= 6 ||
                !email.includes("@") ||
                !email.includes(".")
              }
            />
            {!uploadData ? (
              <>
                <input
                  onChange={(e) => {
                    setUploadData([e.target.files[0]]);
                  }}
                  style={{ display: "none" }}
                  ref={fileUploaderRef}
                  type="file"
                  className="blank__fileinput"
                />

                <Button
                  className="blank__fileinput"
                  style={{
                    marginRight: "16px",
                    background: "#D9D9D9",
                    border: "none",
                    width: "343px",
                  }}
                  onClick={(e) => fileUploaderRef.current.click()}
                  label={
                    <div className="loading">
                      <img className="plus" src={plus} alt="" />
                      <div className="label">Загрузить</div>
                    </div>
                  }
                />
              </>
            ) : (
              <div className="blank__file">
                <div className="blank__clip">
                  <img src={bigclip} alt="" />
                  <div style={{ marginLeft: "10px", width: "50px" }}>
                    {uploadData[0].name}
                  </div>
                </div>
                <img onClick={() => setUploadData()} src={Vector} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="blank__lesserheader -sex">
        <div>Пол *</div>
        {!sex && <div className="blank__lesserheader -warn">Укажите пол</div>}
      </div>
      <div className="blank__sex">
        <div className="blank__sex -option">
          <input
            className="blank__sex -radio"
            type="radio"
            value="Male"
            checked={sex === "Male" ? true : false}
            onChange={sexHandler}
          />
          <div className="blank__sex -text">Мужской</div>
        </div>
        <div className="blank__sex -option">
          <input
            className="blank__sex -radio"
            type="radio"
            value="Female"
            checked={sex === "Female" ? true : false}
            onChange={sexHandler}
          />
          <div className="blank__sex -text">Женский</div>
        </div>
      </div>

      <div className="blank__lesserheader -github">Github</div>
      <Input
        type="text"
        value={gitHub}
        onChange={(e) => setGitHub(e.target.value)}
        label="Вставьте ссылку на Github"
        placeholder="Вставьте ссылку на Github"
      />
      <div className="blank__policy">
        {" "}
        <input
          type="checkbox"
          checked={policy}
          onClick={() => setPolicy((state) => !state)}
        />
        <div className="blank__policytext">
          <div>* Я согласен с </div>{" "}
          <div className="link" onClick={() => setHandlePolicyModal(true)}>
            {" "}
            политикой конфиденциальности
          </div>
        </div>
      </div>

      <Button
        disabled={!name || !surname || !email || !policy || !sex}
        onClick={() => {
          if (
            name &&
            surname &&
            email &&
            policy &&
            email.length >= 6 &&
            email.includes("@") &&
            email.includes(".") &&
            /^[a-zа-яё]+$/i.test(surname) &&
            /^[a-zа-яё]+$/i.test(name)
          ) {
            setHandleModal(true);
          } else {
            setWarnCheck(true);
          }
        }}
        label={
          <div
            className={
              "label -bot" +
              (!name || !surname || !email || !policy || !sex
                ? " -disabled"
                : "")
            }
          >
            Отправить
          </div>
        }
      />
      {handleModal && (
        <Modal
          buttonLabel="Понятно"
          text="Мы скоро свяжемся с вами"
          header={`Спасибо ${name}!`}
          small
          onModalClose={() => {
            setSubmit((state) => !state);
            setWarnCheck(false);
            setHandleModal(false);
          }}
        />
      )}
      {handlePolicyModal && (
        <Modal
          buttonLabel="Я согласен"
          text={text.text}
          onModalClose={() => setHandlePolicyModal(false)}
          header="Политика конфиденциальности"
        />
      )}
    </div>
  );
};
