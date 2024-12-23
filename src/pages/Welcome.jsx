import React from "react";
import Header from "../components/Header";
import { AppLabel } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
        <Header headerText="Добро пожаловать в квиз от лучшего учебного центра" textType="h2"/>
          <form className="welcome__form">
            <AppLabel 
              labelText="Ваше имя" 
              labelType="text" 
              labelName ="username" 
              labelPlaceholder="Введите ваше имя" 
              labelError="Введите имя в правильном формате, например"
            />
            <AppLabel 
              labelText="Ваш номер" 
              labelType="tel" 
              labelName ="phone" 
              labelPlaceholder="+998 9- --- -- -- " 
              labelError="Введите имя в правильном формате, например"
            />
            <AppButton
              buttonText="Далее"
              buttonType="button"
              isDisabled
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
