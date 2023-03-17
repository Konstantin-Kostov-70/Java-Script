function test1() {
    const textArea = document.querySelector('textarea');
    const btn = document.querySelector('button');
    const body = document.querySelector('body')
    let text = textArea.value;
    textArea.value = '';

    textArea.setAttribute('class', 'text_area');
    btn.setAttribute('class', 'btn');

    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let input4 = document.createElement('input');
    
    input1.setAttribute('type', 'radio');
    input1.setAttribute('class', 'input-1');

    let propertyType = 'type';
    input2[propertyType] = 'checkbox';
    input2.setAttribute('class', 'input-2');

    let props = {
        type: 'button'
    };
    for (let property in props) {
        input3[property] = props[property];
    };
    input3.setAttribute('class', 'input-3')
    input3.value = 'input-like-button'

    input4.type = 'date';
    input4.setAttribute('class', 'input-4')

    body.appendChild(input1);
    body.appendChild(input2);
    body.appendChild(input3);
    body.appendChild(input4);


   
    
    console.log(text);
    console.log(input1)
    console.log(input2)
    console.log(input3)
    console.log(input4)
 
    let object = {name: 'Ivan', age: 13, city: 'Varna'}
    for (let key in object) {
        console.log(key)
    }

    function test(param1, param2, param3) {
        if (param3) {
            return param1 + param2 + param3
        }
        return param3
    }

    console.log(test(1, 2, 3))
    console.log(test(1, 2))
}



