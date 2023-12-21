import { useContext } from "react";
import { MyContext } from "../../Global/Context";
import {Linking } from 'react-native';

const SettingsViewController = () => {
  const { theme, setTheme } = useContext(MyContext);

  const openExternalLink = (url) => {
    Linking.openURL(url)
      .then(() => console.log('Link aberto com sucesso'))
      .catch(() => console.error('Erro ao abrir o link'));
  };

  function handleTheme() {
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  }

  const playStoreReviewURL = "https://play.google.com/store/apps/details?id=com.jesiel364.motivarapp"
const email = "jesiel364@gmail.com"

const sendMessage = 'Mensagem para Motivar - Frases Motivacionais'; 
const feedback = 'Feedback - Reportar Erro'

  const sendEmail = (subject:string) => {
    const email = 'jesiel364@gmail.com';  // Substitua pelo seu endereço de e-mail
    // Assunto do e-mail

    // Cria o link "mailto"
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    // Abre o link no cliente de e-mail padrão do dispositivo
    Linking.openURL(mailtoLink)
      .then(() => console.log('Cliente de e-mail aberto com sucesso'))
      .catch(() => console.error('Erro ao abrir o cliente de e-mail'));
  };

  const settingList = [
    {
      title: "Tema",
      id: 1,
      options: [
        {
          label: "Escuro",
          callback: handleTheme,
          value: "Dark",
          id: 2,
        },
        {
          label: "Claro",
          callback: handleTheme,
          value: "Light",
          id: 3,
        },
        {
          label: "Sistema",
          callback: handleTheme,
          value: "SystemColor",
          id: 4,
        },
      ],
    },
    // {
    //   title: 'Notificações',
    //   options: [
    //     {
    //       label: 'Horários',
    //       callback: undefined,
    //  id: 6,
    //     },
    //     {
    //       label: 'Categorias',
    //       callback: undefined,
    // id: 7,
    //     }
    //   ],
    //  id: 5,
    // },
    {
      title: "Contribua",
      id: 10,
      options: [
        // {
        //   label: 'Horários',
        //   callback: undefined,
        //id: 8,
        // },
        {
          label: "Avalie o App",
          callback: () => openExternalLink(playStoreReviewURL),
          id: 9,
        },
        {
          label: "Envie sua mensagem",
          callback: () => sendEmail(sendMessage),
          id: 11,
        },
        {
          label: "Reportar erro",
          callback: () => sendEmail(feedback),
          id: 12,
        },
      ],
    },
  ];

  function textColor() {
    return theme === "Dark" ? "#fff" : "#000";
  }

  return {
    theme,
    setTheme,
    handleTheme,
    settingList,
    textColor,
    openExternalLink,
    playStoreReviewURL,
    email
  };
};

export default SettingsViewController;
