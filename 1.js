function nextInLine(queue, element) {
    // Agregar el elemento al final de la cola 
    queue.push(element);
    
    // Remover y retornar el primer elemento de la cola
    return queue.shift();
}

queueArray = [1, 2, 3, 4, 5];
console.log(nextInLine(queueArray, 6)); 
console.log(queueArray); // Output: [2, 3, 4, 5, 6]
