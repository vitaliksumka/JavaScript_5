let buffer = makeBuffer();

function makeBuffer(){
    let bufferArray = [];

return {
    add: function(value){
        bufferArray.push(value);    
    },
    print: function() {  
        if(bufferArray.length != 0) {
            console.log(bufferArray.join(' '));    
        } else {
            console.log("-------------Масив пустий-------------");
            console.log();
        }               
    },
    clear: function(){
        bufferArray.length = 0;
        console.log();
        console.log("-----Всі значення масиву видалені-----");
        console.log();
    }
  }
}

buffer.add( 'JavaScript'); 
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');
buffer.print();
// видаляємо всі значення з масиву
buffer.clear();
buffer.print();

buffer.add(0);
buffer.add(1);
buffer.add(0);
buffer.print();
buffer.clear();
buffer.print();

buffer.add("Тест");
buffer.add("тебе не з'їсть");
buffer.print();

// видаляємо всі значення з масиву
buffer.clear();

// нічого не виведе в Термінал так як масив пустий
buffer.print();
