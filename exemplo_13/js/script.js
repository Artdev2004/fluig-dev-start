function main(){
    var pessoa = {
        Nome      : "Arthur",
        Sobrenome : "Soares", 
        Departamento : "fluig"
    };

    document.getElementById("nomeUser").innerHTML = pessoa.Nome + " " + pessoa.Sobrenome + " <br /> trabalha com " + pessoa.Departamento;
    
}