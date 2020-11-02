function temHabilidade(skills) {
    var resultado = skills.indexOf("JavaScript"); //da o parametro a variavel

    if (resultado >= 0) { //verificaçao se ela corresponde
        return true;      //se ela for verdadeira retorna como true
    } else {
        return false;    //se nao corresponder volta como false
    }
}
var skills = ["Javascript", "ReactJS", "React Native"]; //parametros que sao verdadeiros na variavel

console.log(temHabilidade(skills));
