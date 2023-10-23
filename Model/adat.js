export const  urlapleiro={
    nev:{
        megj:"név",
        type: "text",
        placeholder: "Valaki Vagyok",
        value:"",
        regex: "[A-Z][a-z]{2,15}",
        valid:"nagybetűvel kezdődik, legalább 3 karakter!"

    },
    szul:{
        megj:"Születési év",
        type: "number",
        placeholder: "2000",
        value:"2000",
        regex: {min:1000, max:2023},
        valid:"1000-2023 közötti számot írj ide"
    },
    felir:{
        megj:"Szeretnél feliratkozni a hírlevélre?",
        type: "checkbox",
        value: "disabled",
        regex: {pipa: "checked" },
        valid:"A hírlevél mindenki számára kötelező! Mindenkinek kell spam!!"
    }

    }
