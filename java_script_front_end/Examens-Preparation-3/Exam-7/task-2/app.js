function solve() {
    const input = {
        recipient: document.querySelector('#recipientName'),
        title: document.querySelector('#title'),
        message: document.querySelector('#message')
    }

    document.querySelector('#add').addEventListener('click', addMails)

    const listMails = document.querySelector('#list')
    const sendMails = document.querySelector('ul.sent-list')
    const deleteMails = document.querySelector('ul.delete-list')

    function addMails(ev) {
        ev.preventDefault()
        document.querySelector('#reset').addEventListener('click', clear)

        let recipient = input.recipient.value
        let title = input.title.value
        let message = input.message.value

        if (recipient === '' || title === '' || message === '') {
            return
        }

        let li = document.createElement('li')
        li.innerHTML = `
     <h4>Title: ${title}</h4>
     <h4>Recipient Name: ${recipient}</h4>
     <span>${message}</span> 
     <div id="list-action">
     <button type="submit" id="send">Send</button>
     <button type="submit" id="delete">Delete</button>
     </div>
     `
        li.querySelector('#send').addEventListener('click', sendMail)
        li.querySelector('#delete').addEventListener('click', deleteMail)

        listMails.appendChild(li)

        input.recipient.value = ''
        input.title.value = ''
        input.message.value = ''

        //  Object.values(input).forEach(el => el.value = '')

        function sendMail() {
            sendMails.appendChild(li)
            li.innerHTML = `
        <span>To: ${recipient}</span> 
        <span>Title: ${title}</span>
        <div class="btn">
        <button type="submit" class="delete">Delete</button>
        </div>`

            li.querySelector('div > .delete').addEventListener('click', deleteMail)

        }

        function deleteMail() {
            deleteMails.appendChild(li)
            li.innerHTML = `
        <span>To: ${recipient}</span> 
        <span>Title: ${title}</span>
       `
        }

        function clear(ev) {
            ev.preventDefault()

            input.recipient.value = ''
            input.title.value = ''
            input.message.value = ''
            // Object.values(input).forEach(el => el.value = '')
        }
    }

}
solve()