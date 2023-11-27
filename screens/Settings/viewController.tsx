import { useContext } from "react";
import { MyContext } from "../../Global/Context";

const SettingsViewController = () => {
  const { theme, setTheme } = useContext(MyContext);

  function handleTheme() {
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  }

  // console.log(theme);

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
          callback: undefined,
          id: 9,
        },
        {
          label: "Envie sua mensagem",
          callback: undefined,
          id: 11,
        },
        {
          label: "Reportar erro",
          callback: undefined,
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
  };
};

export default SettingsViewController;
