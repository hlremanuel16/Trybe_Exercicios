const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const va = Object.values(order);
  // Adicione abaixo as informações necessárias.
  // estrutura: Rafael Andrade,11-98763-1416,[object Object],[object Object],[object Object]
  return ` Olá, ${va[3].delivery.deliveryPerson}, entrega para: ${va[0]},\n telefone: ${va[1]}, R. ${va[2].street} numero ${va[2].number} ap${va[2].apartment}`
  
}
console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const va = Object.values(order);
  va[0] = "Luiz Silva"
  va[4].total = 50
  return `Olá, ${va[0]} o total do seu pedido de marguerita, peperoni e ${va[3].drinks.coke.type} é de ${va[4].total} `

}

console.log(orderModifier(order)); 




