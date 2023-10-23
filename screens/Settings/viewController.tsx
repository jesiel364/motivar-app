import { useContext } from "react"
import { MyContext } from "../../Global/Context"

const SettingsViewController = () => {

    const {theme, setTheme} = useContext(MyContext)
    
    function handleTheme(){
        if(theme === 'Dark'){
          setTheme('Light')
        }else{
          setTheme('Dark')
        }
      }
    
      console.log(theme)
    
      const settingList = [
        {
          title: 'Tema',
          options: [
            {
              label: 'Escuro',
              callback: handleTheme,
              value: 'Dark'
    
            },
            {
              label: 'Claro',
              callback: handleTheme,
              value: 'Light'
    
            }
          ]
        },
        // {
        //   title: 'Notificações',
        //   options: [
        //     {
        //       label: 'Horários',
        //       callback: undefined
        //     },
        //     {
        //       label: 'Categorias',
        //       callback: undefined
        //     }
        //   ]
        // },
        {
          title: 'Contribua',
          options: [
            // {
            //   label: 'Horários',
            //   callback: undefined
            // },
            {
              label: 'Avalie o App',
              callback: undefined
            },
            {
              label: 'Envie sua mensagem',
              callback: undefined
            },
            {
              label: 'Reportar erro',
              callback: undefined
            },
          ]
        },
      ]
    
    
      function textColor(){
        return theme === 'Dark' ? '#fff' : '#000'
      }

    return {

        theme, 
        setTheme,
        handleTheme,
        settingList,
        textColor
    }
}

export default SettingsViewController