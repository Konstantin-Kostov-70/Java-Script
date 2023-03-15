function test1() {
    const textArea = document.querySelector('textarea');
    const btn = document.querySelector('button');
    let text = textArea.value;
    textArea.value = '';

    textArea.setAttribute('class', 'text_area');
    btn.setAttribute('class', 'btn');
    
    console.log(text);
    console.log(textArea);
    console.log(btn);
}