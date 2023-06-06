


let banco = [];

export const users = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { inome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 40, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 35, cidade: "Salvador" },
    { nome: "Luiza", idade: 28, cidade: "Brasília" },
  ];
  


  

export const getUsers = (users) =>{
    return banco;
}

export const getUserId = (userId) =>{
    return banco.filter(user => user.id == userId);
}

export  const addUser = (user)=>{
    banco.unshift({ id: banco.length + 1, ...user });
  }


export const removeUser = (idUser) =>{

        banco = banco.filter(user => user.id!=idUser);

 
}


export const initBd = () =>{
    users.forEach(addUser);
}

