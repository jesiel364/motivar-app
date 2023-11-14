import { useEffect, useState } from "react";

const ViewController = () => {
  const [theme, setTheme] = useState("Dark");

  const mainAuthors = [
    {
      authName: "Stevie Jobs",
    },
    {
      authName: "Mario Quintana",
    },
    {
      authName: "Clarice Lispector",
    },
    {
      authName: "Oscar Wilde",
    },
    {
      authName: "Fernando Pessoa",
    },
    {
      authName: "William Shakespeare",
    },
    {
      authName: "Augusto Cury",
    },
    {
      authName: "Luís de Camões",
    },

    {
      authName: "Carlos Drummond de Andrade",
    },
    {
      authName: "Albert Einstein",
    },
    {
      authName: "Charles Chaplin",
    },
    {
      authName: "Leonardo da Vinci",
    },
    {
      authName: "Vinicius de Moraes",
    },
    {
      authName: "Jesus Cristo",
    },
    {
      authName: "Michael Jordan",
    },
    {
      authName: "Elon Musk",
    },
    {
      authName: "Napoleon Hill",
    },
    {
      authName: "Bill Gates",
    },
    {
      authName: "Antoine de Saint-Exupéry",
    },
    {
      authName: "Cora Coralina",
    },
    {
      authName: "Martin Luther King",
    },
    {
      authName: "Santo Agostinho",
    },
    {
      authName: "Sigmund Freud",
    },
    {
      authName: "Henry Ford",
    },
    {
      authName: "Leon Tolstói",
    },
    {
      authName: "Victor Hugo",
    },
    {
      authName: "Benjamin Franklin",
    },
  ];

  const [loading, setLoading] = useState(false);

  const [phraseDay, setPhraseDay] = useState();
  const [author, setAuthor] = useState(Math.floor(Math.random() * 4));
  const [erro, setErro] = useState();

  async function updateMsg() {
    setPhraseDay(undefined);
    await setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
    setLoading(true);
    await fetch(
      `https://pensador-api.vercel.app/?term=${mainAuthors[author]?.authName}&max=20`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => setPhraseDay(json))
      .catch((err) => setErro(err));
    setLoading(false);
  }

  async function GetMessage() {
    setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
    setLoading(true);
    await fetch(
      `https://pensador-api.vercel.app/?term=${mainAuthors[author]?.authName}&max=20`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => (json !== phraseDay ? setPhraseDay(json) : updateMsg()))
      .catch((err) => setErro(err));
    setLoading(false);
  }

  const [messageAuthor, setMessageAuthor] = useState<any>();

  async function GetMessageByAuthor(author: string) {
    setLoading(true);
    await fetch(`https://pensador-api.vercel.app/?term=${author}&max=20`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setMessageAuthor(json))
      .catch((err) => setErro(err));
    setLoading(false);
  }

  // useEffect(() => {
  //   if (phraseDay === "" || phraseDay === undefined || phraseDay === null) {
  //     GetMessage();
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      if(!phraseDay){
        await GetMessage();
      }
      
  
      // if (phraseDay && phraseDay?.texto) {
      //   const randomFlow = Math.floor(Math.random() * messageAuthor.frases.length - 1);
      //   setRandomMessageByAuthor(messageAuthor.frases[randomFlow]);
      // }
    };
  
    fetchData();
  }, [messageAuthor]); 

  return {
    mainAuthors,
    loading,
    setLoading,
    phraseDay,
    setPhraseDay,
    author,
    setAuthor,
    erro,
    setErro,
    updateMsg,
    GetMessage,
    theme,
    setTheme,
    messageAuthor,
    GetMessageByAuthor,
  };
};

export default ViewController;
