function encodeAndDecodeMessages() {
    const allAreas = document.querySelectorAll('#main textarea')
    const allButtons = document.querySelectorAll('#main button')
    const sendArea = allAreas[0];
    const receivedArea = allAreas[1];
    const sendBtn = allButtons[0];
    const receivedBtn = allButtons[1];
     
    sendBtn.addEventListener('click', send);
    receivedBtn.addEventListener('click', decode)
   

    function send() {
        let numAscii = sendArea.value
        .split('')
        .map((chr,) => chr.charCodeAt(0) + 1)

        let newMsg = numAscii
        .map((chr,) => String.fromCharCode(chr))
        .join('')

        receivedArea.value = newMsg
        sendArea.value = ''
        
    }

    function decode() {
        let numAscii = receivedArea.value
        .split('')
        .map((chr,) => chr.charCodeAt(0) - 1)

        let newMsg = numAscii
        .map((chr,) => String.fromCharCode(chr))
        .join('')

        receivedArea.value = newMsg
    }
}