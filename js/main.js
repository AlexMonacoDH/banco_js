let banco = {
    clientes: [],
    cadastrarCliente(cliente){
        this.clientes.push(cliente);
    },
    buscarSaldo(cpfP){
        let clienteFiltrado = this.clientes.filter((cliente)=>{
            return cliente.cpf == cpfP
        });
        return clienteFiltrado[0].saldo;
    },
    adicionarSaldo(cpfP,valor){
        let clienteFiltrado = this.clientes.filter((cliente)=>{
            return cliente.cpf == cpfP
        });
        return clienteFiltrado[0].saldo += valor;
    }
    
}

banco.cadastrarCliente({nome: 'Gabriel',cpf: '12345678901',saldo: 15000});
banco.cadastrarCliente({nome: 'Paulo',cpf: '89014444444',saldo: 7});
console.log(banco.clientes);
console.log(banco.adicionarSaldo('89014444444',10000));
console.log(banco.clientes);
console.log(banco.adicionarSaldo('89014444444',10000));
console.log(banco.clientes);
console.log(banco.adicionarSaldo('89014444444',10000));
console.log(banco.clientes);
console.log(banco.adicionarSaldo('89014444444',10000));
console.log(banco.adicionarSaldo('89014444444',10000));
console.log(banco.adicionarSaldo('89014444444',10000));
console.log(banco.clientes);
