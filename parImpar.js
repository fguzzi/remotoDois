let qtdeAlunos = 17

for(let aluno = 0; aluno <= qtdeAlunos; aluno++ ){
    if(aluno == 0){
        console.log("Zero " + aluno)
    }else if (aluno % 2 == 0) {
        console.log("Par " + aluno)
        
    }else{
        console.log("Impar " + aluno)
    }
}