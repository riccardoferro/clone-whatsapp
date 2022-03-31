/*
   Milestone 1
   Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
   Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

  MILESTONE 1 COMPLETED
   
  Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
  messaggi relativi al contatto attivo all’interno del pannello della conversazione

● Click sul contatto mostra la conversazione del contatto cliccato

  MILESTONE 2 COMPLETED

  Milestone 3

● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde

● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
   */

/********** CODE MAIN *********/

//ARRAY OF OBJECT
const contacts = [
  // FIRST OBJECT
  {
    name: "Michele",
    avatar: "_1",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Hai portato a spasso il cane?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Ricordati di stendere i panni",
        status: "sent",
      },
      {
        date: "10/01/2020 16:15:22",
        message: "Tutto fatto!",
        status: "received",
      },
    ],
  },

  // SECOND OBJECT
  {
    name: "Fabio",
    avatar: "_2",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "20/03/2020 16:30:00",
        message: "Ciao come stai?",
        status: "sent",
      },
      {
        date: "20/03/2020 16:30:55",
        message: "Bene grazie! Stasera ci vediamo?",
        status: "received",
      },
      {
        date: "20/03/2020 16:35:00",
        message: "Mi piacerebbe ma devo andare a fare la spesa.",
        status: "sent",
      },
    ],
  },

  // THIRD OBJECT
  {
    name: "Samuele",
    avatar: "_3",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "28/03/2020 10:10:40",
        message: "La Marianna va in campagna",
        status: "received",
      },
      {
        date: "28/03/2020 10:20:10",
        message: "Sicuro di non aver sbagliato chat?",
        status: "sent",
      },
      {
        date: "28/03/2020 16:15:22",
        message: "Ah scusa!",
        status: "received",
      },
    ],
  },

  // FOURTH OBJECT
  {
    name: "Alessandro B.",
    avatar: "_4",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Lo sai che ha aperto una nuova pizzeria?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Si, ma preferirei andare al cinema",
        status: "received",
      },
    ],
  },

  // FIFTH OBJECT
  {
    name: "Alessandro L.",
    avatar: "_5",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ricordati di chiamare la nonna",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Va bene, stasera la sento",
        status: "received",
      },
    ],
  },

  // SIXTH OBJECT
  {
    name: "Claudia",
    avatar: "_6",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao Claudia, hai novità?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Non ancora",
        status: "received",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "Nessuna nuova, buona nuova",
        status: "sent",
      },
    ],
  },

  // SEVENTH OBJECT
  {
    name: "Federico",
    avatar: "_7",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Fai gli auguri a Martina che è il suo compleanno!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Grazie per avermelo ricordato, le scrivo subito!",
        status: "received",
      },
    ],
  },

  // EIGHT OBJECT
  {
    name: "Davide",
    avatar: "_8",
    visible: true,

    //array2 of object
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  },
];

/********** CODE MAIN *********/

/********** VUE JS *********/

const chat = new Vue({
  el: "#chat",

  data: {
    contacts,
    activeChat: undefined,
    newMsg: "",
  },

  methods: {
    // function that return the path of the images contacts
    takeIMG(contact) {
      return `images/avatar${contact.avatar}.jpg`;
    },

    //method that take the last message
    takeLastMessage(contact) {
      //take all messages of that contact
      const messages = contact.messages;

      //length of array's messages
      const length = messages.length - 1;

      const lastMessage = messages[length].message;

      return lastMessage;
    },

    //set active a chat's contact
    setActiveContact(contact) {
      this.activeChat = contact;
      console.log(this.activeChat);
    },

    //check the status of a message
    checkStatusMsg(message) {
      if (message.status === "received") {
        return "received-rf";
      } else {
        return "sent-rf";
      }
    },

    //add new message
    insertNewMessage() {
      const newMsg = {
        date: "Date",
        message: this.newMsg,
        status: "sent",
      };
      console.log(newMsg.date);
      this.activeChat.messages.push(newMsg);
      this.newMsg = "";
    },
  },
});
/********** VUE JS *********/
