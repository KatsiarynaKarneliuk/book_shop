function getFromJson() {
    fetch('/book_shop/book.json')
        .then(response => {
            return response.json();
        })
        .then(data => {

            console.log(data);
            let fragment = new DocumentFragment();
            let wrapper = document.querySelector('section');
            
            for (let i = 0; i < data.length; i++) {
            //author   
                let author = document.createElement('div');
                author.append(data[i].author);
            //img
                let img = document.createElement('img');
                img.src = `${data[i].imageLink}`;
                img.alt = "photo";
            //price
                let price = document.createElement('div');
                price.append(data[i].price);
                price.insertAdjacentText('afterBegin', 'Price: ');
                price.insertAdjacentText('beforeEnd', ' $');
            //modal window
                let modal = document.createElement('div');
                let modal_content = document.createElement('div');
                let close_modal_button = document.createElement('div');
                close_modal_button.innerHTML = "Close";
                modal_content.append(data[i].description, close_modal_button);
                modal.append(modal_content);
                close_modal_button.addEventListener("click", function() {
                modal.classList.toggle('close');
                });
            //book card button 
                let book_buttons = document.createElement('div');
                let description_button = document.createElement('div');
                let add_button = document.createElement('div');
                description_button.innerHTML = "Show description";
                add_button.innerHTML = "Add to cart";
                description_button.addEventListener('click', function () {
                    modal.classList.toggle('show');
                });
                book_buttons.append(description_button, add_button);
            //book's card
                let oneBook = document.createElement('div');
                oneBook.append(img, author, price, book_buttons, modal);
            //header on the page
                let header = document.createElement('h1');
                header.innerHTML = 'Book catalog';
            //adding the all elements to the fragment
                fragment.append(header, oneBook);
            //the classes creation
                header.classList.add('header');
                author.classList.add('author');
                img.classList.add('imageLink');
                price.classList.add('price');
                description_button.classList.add('description_button');
                add_button.classList.add('add_button');
                book_buttons.classList.add('book_buttons');
                oneBook.classList.add('oneBook');
                modal.classList.add('modal');
                modal_content.classList.add('modal_content');
                close_modal_button.classList.add('close_modal_button');
            //adding the fragment to the html
                wrapper.append(fragment);
        }
        console.log(fragment);      
    })
}
getFromJson();

