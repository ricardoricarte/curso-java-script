var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function getHabilidades() {
  var response = '';
  for (user of usuarios) {
    response += `O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}\n`
  }
  return response;
}

console.log(getHabilidades());