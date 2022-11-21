function getFromJson() {
    fetch('../book.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
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

                //modal window_description
                let modal_description = document.createElement('div');
                let modal_content_description = document.createElement('div');
                let close_modal_button_description = document.createElement('div');
                close_modal_button_description.innerHTML = "Close";
                modal_content_description.append(data[i].description, close_modal_button_description);
                modal_description.append(modal_content_description);
                close_modal_button_description.addEventListener("click", function () {
                    modal_description.classList.toggle('close');
                });

                //add_to_cart_content
                let add_to_cart_content = document.createElement('div');
                add_to_cart_content.textContent = "Cart";
                add_to_cart_content.style.fontSize = "36px";
                let name_of_item = document.createElement('div');
                name_of_item.append(data[i].author);
                let divAmount = document.createElement('div');
                divAmount.innerHTML = "Amount";
                divAmount.style.fontSize = "16px";
                divAmount.style.fontStyle = "italic";
                let amount = document.createElement('input');
                divAmount.append(amount);
                let price_of_item = document.createElement('div');
                price_of_item.insertAdjacentText('afterBegin', 'Price: '); 
                price_of_item .append(data[i].price);
                price_of_item.insertAdjacentText('beforeEnd', ' $');
                let total = document.createElement('div');
                total.insertAdjacentText('afterBegin', 'Total: ');
                amount.addEventListener('change', function () {
                    total.append(amount.value * data[i].price)
                });
                total.insertAdjacentText('beforeEnd', ' $');
                add_to_cart_content.append(name_of_item, divAmount, price_of_item, total);
                
                //modal window_cart
                let modal_cart = document.createElement('div');
                let modal_content_cart = document.createElement('div');
                let close_modal_button_cart = document.createElement('button');
                let submit_modal_button_cart = document.createElement('button');
                close_modal_button_cart.innerHTML = "Close";
                submit_modal_button_cart.innerHTML = "Submit";
                modal_cart.append(modal_content_cart);
                let add_to_cart_buttons = document.createElement('div');
                add_to_cart_buttons.append(close_modal_button_cart, submit_modal_button_cart);
                close_modal_button_cart.addEventListener("click", function () {
                    modal_cart.classList.toggle('close');
                });
                submit_modal_button_cart.addEventListener("click", function () {
                    modal_cart.classList.toggle('close');
                    window.location.href = '../delivery/index.html';
                });
                modal_content_cart.append(add_to_cart_content, add_to_cart_buttons);

                //book card button 
                let book_buttons = document.createElement('div');
                let description_button = document.createElement('div');
                let add_button = document.createElement('div');
                description_button.innerHTML = "Show more";
                add_button.innerHTML = "Add to cart";
                description_button.addEventListener('click', function () {
                    modal_description.classList.toggle('show');
                });
                add_button.addEventListener('click', function () {
                    modal_cart.classList.toggle('show');
                });
                book_buttons.append(description_button, add_button);

                //book's card
                let oneBook = document.createElement('div');
                oneBook.append(img, author, price, book_buttons, modal_description, modal_cart);

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
                modal_description.classList.add('modal_description');
                modal_content_description.classList.add('modal_content_description');
                close_modal_button_description.classList.add('close_modal_button_description');
                modal_cart.classList.add('modal_cart');
                modal_content_cart.classList.add('modal_content_cart');
                name_of_item.classList.add('name_of_item');
                amount.classList.add('amount');
                price_of_item.classList.add('price_of_item');
                total.classList.add('total');
                add_to_cart_buttons.classList.add('add_to_cart_buttons');
                close_modal_button_cart.classList.add('close_modal_button_cart');
                submit_modal_button_cart.classList.add('submit_modal_button_cart');

                //adding the fragment to the html
                wrapper.append(fragment);
        }
        console.log(fragment);      
    })
}
getFromJson();

