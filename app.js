window.addEventListener('load', solve);

function solve() {

    const btnSubmit = document.getElementById('next-btn');
    btnSubmit.addEventListener('click', onSubmit);

    const ticketInfo = document.getElementsByClassName('ticket-info-list')[0];
    const confurmTicket = document.getElementsByClassName('confirm-ticket')[0];
    const main = document.getElementById('main');
    const body = document.getElementById('body');

    function onSubmit(ev) {
    ev.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const numberPeople = document.getElementById('people-count').value;
    const dataFrom = document.getElementById('from-date').value;
    const numberDays = document.getElementById('days-count').value;

    if(firstName == '' || lastName == '' || numberPeople == '' || dataFrom == '' || numberDays == '') {
        return;
    }

    const list = createEl('li', 'ticket');
    const articleInfo = createEl('article');
    articleInfo.appendChild(createEl('h3', '', `Name: ${firstName} ${lastName}`));
    articleInfo.appendChild(createEl('p', '', `From date: ${dataFrom}`))
    articleInfo.appendChild(createEl('p', '', `For ${numberDays} days`))
    articleInfo.appendChild(createEl('p', '', `For ${numberPeople} people`));
    list.appendChild(createEl('button', 'edit-btn', 'Edit'))
    list.appendChild(createEl('button', 'continue-btn', 'Continue'));
    list.appendChild(articleInfo);

    list.querySelector('.edit-btn').addEventListener('click', onEdit);
    list.querySelector('.continue-btn').addEventListener('click', onContinue);

    ticketInfo.appendChild(list)
    
    btnSubmit.disabled = true;
    
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('people-count').value = '';
    document.getElementById('from-date').value = '';
    document.getElementById('days-count').value = '';

    function onEdit() {
        document.getElementById('first-name').value = firstName;
        document.getElementById('last-name').value = lastName;
        document.getElementById('people-count').value = numberPeople;
        document.getElementById('from-date').value = dataFrom;
        document.getElementById('days-count').value = numberDays
        list.remove();
        btnSubmit.disabled = false;
    }

    function onContinue() {
        list.querySelector('.edit-btn').remove();
        list.querySelector('.continue-btn').remove();
        // list.classList.remove('ticket');
        // list.classList.add('ticket-content');
        list.appendChild(createEl('button', 'confirm-btn', 'Confirm'))
        list.appendChild(createEl('button', 'cancel-btn', 'Cancel'))
        confurmTicket.appendChild(list);
        list.querySelector('.cancel-btn').addEventListener('click',onCancel);
        list.querySelector('.confirm-btn').addEventListener('click', onConfirm);
    }
    

    function onConfirm() {
        main.innerHTML = ''
        const h1 = createEl('h1', '', 'Thank you, have a nice day!');
        h1.id = 'thank-you';
        const back = createEl('button', '', 'Back');
        back.id = 'back-btn';
        main.appendChild(h1);
        main.appendChild(back);

        back.addEventListener('click', () => {window.location.reload()});
    }

    function onCancel() {
        list.remove();
        btnSubmit.disabled = false;
    }
   }

   function createEl(type, classN, content) {
    const el = document.createElement(type);

    if(classN !== '' && classN !== undefined) {
        el.classList.add(classN);
    }

    if(content !== undefined && content !== '') {
        el.textContent = content;
    }

    return el;
   }
}


    
    
