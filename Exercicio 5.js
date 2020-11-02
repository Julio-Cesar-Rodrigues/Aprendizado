  var usuarios = [
        {nome: "Julio",  habilidades: ["JavaScript, Java, React, React Native"]},
        {nome: "Ricardo", Habilidades: ["Ruby, Swift, C++"]}   
  ];

  function showMessage(usuarios) {
    for (const user of usuarios) {
        const { nome, habilidades } = user;
        console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}.`);
    }
};
