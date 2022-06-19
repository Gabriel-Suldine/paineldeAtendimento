let read = require('readline-sync')
let opcao = 0
let pacientes = [] 
let em_atendimento = ""

do {
    console.log("PAINEL DE ATENDIMENTO")
    console.log("[1]-INCLUIR PACIENTE")
    console.log("[2]-ATENDER PACIENTE")
    console.log("[3]-INCLUIR URGÊNCIA")
    console.log("[4]-MOSTRAR LISTA DE ESPERA")
    console.log("[5]-ENCERRAR")
   
    opcao = read.questionInt("OPCAO: ")
    
    switch (opcao) {
        case 1: {
            let paciente = read.question("Nome do Paciente: ")
            pacientes.push(paciente)
            console.clear()
            break
        }
        case 2: {
            let paciente = read.question("Paciente: ")
            pacientes.shift(paciente) 
            em_atendimento = paciente                       
            console.clear()            
            break
        }
        case 3: {
            let paciente = read.question("Nome do Paciente: ")
            pacientes.unshift(paciente)
            em_atendimento = paciente
            console.clear()
            break
        }
        case 4: {
            if(pacientes.length == 0){
                console.log("---------------------")
                console.log("CONSULTÓRIO VAZIO")
                console.log("---------------------")
            } else{
            console.log("EM ATENDIMENTO: ",em_atendimento)
            console.log("---LISTA DE ESPERA---")
            for(let i = 0;i<pacientes.length;i++){
                console.log(i+1," - ",pacientes[i])
            }
            console.log("---------------------")}
        }   
    }    
    
} while (opcao < 5)
