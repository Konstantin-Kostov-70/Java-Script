function editElement(ref, match, replacer) {
    console.log(ref)
    let text = ref.textContent;
    
    while (text.includes(match)) {
        text = text.replace(match, replacer);
    }
    ref.textContent = text;
}