import { useEffect, useState } from "react";

export function OrderViewController() {
  const ordersList = [
    {
      label: "Em alta",
      icon: "🔥",
    },
    {
      label: "Motivação",
      icon: "💪🏼",
    },
    {
      label: "Sabedoria",
      icon: "🧠",
    },
    {
      label: "Provérbios",
      icon: "📖",
    },
    {
      label: "Empreendedorismo",
      icon: "💰",
    },
    {
      label: "Reflexão",
      icon: "🤔",
    },
    {
      label: "Otimismo",
      icon: "🤩",
    },
    {
      label: "Disciplina",
      icon: "🚀",
    },
    {
      label: "Ver mais",
      icon: "➕",
    },
  ];

  const mainAuthors = [
    {
      authName: "Machado de Assis",
    },

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

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState();
  const [erro, setErro] = useState();

  async function updateMsg(author) {
    setMessage(undefined);
    // await setAuthor(Math.floor(Math.random() * mainAuthors.length - 1));
    setLoading(true);
    await fetch(`https://pensador-api.vercel.app/?term=${author}&max=20`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setMessage(json))
      .catch((err) => setErro(err));
    setLoading(false);
  }

  async function getMessageByAuthor(author: string) {
    setLoading(true);
    await fetch(`https://pensador-api.vercel.app/?term=${author}&max=20`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setMessage(json))
      .catch((err) => setErro(err));
    setLoading(false);
  }

  // useEffect(()=> {
  //   getMessageByAuthor('Stevie Jobs')
  // }, [])

  const [messageAuthor, setMessageAuthor] = useState();

  async function GetMessageByAuthor(author: string) {
    setLoading(true);
    await fetch(`https://pensador-api.vercel.app/?term=${author}&max=20`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setMessageAuthor(json))
      .catch((err) => setErro(err));
    setLoading(false);

    return messageAuthor;
  }

  // useEffect(() => {

  //   GetMessageByAuthor('Stevie Jobs')
  // })

  // console.log(messageAuthor)

  return {
    // getMessageByAuthor,
    mainAuthors,
    message,
    GetMessageByAuthor,
    messageAuthor,
  };
}
