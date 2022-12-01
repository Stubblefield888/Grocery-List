/*
    what to do.....
        TAKE inputs





*/

let listName = document.querySelector('.listName');
listName.innerText = 'grocery list';
listName.style.color = 'rgb(234, 73, 73)';
// listName.style.color = 'choose a color for the font';

let totalPrice = 0;



class GroceryCart {
    constructor() {
        this.shopperArr = [];

        this.form = document.getElementById('form');
        this.itemType = document.getElementById('item');
        this.itemAmount = document.getElementById('quantity');
        this.itemArea = document.getElementById('aisle');
        this.itemPrice = document.getElementById('price');
        this.displayArea = document.getElementById('displayArea');
        this.finalPrice = document.getElementById('totalPrice');
    }

    init() {
        this.formSubmit();
    }

    formSubmit() {
        this.form.addEventListener('submit', (e)=> {
            e.preventDefault();
            // console.log('click');
            this.addItem();
        })
    }

    addItem() {
        let found = false;
        console.log(this.itemType.value);
        console.log(item.itemPrice);

        this.shopperArr.forEach(item => {
            if(item.toLowerCase() === this.itemType.value.toLowerCase()) {
                found = true;
            }
        });

        if(!found) {
            this.displayArea.innerHTML += 
            `<div class="card mb-3" style="width: 18rem;">
                <div class="row">
                    <div class="col-md-8">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Item: ${this.itemType.value}</li>
                            <li class="list-group-item"># of Items: ${this.itemAmount.value}</li>
                            <li class="list-group-item">Section: ${this.itemArea.value}</li>
                        </ul>
                        <div class="card-footer">Price: $${this.itemPrice.value * this.itemAmount.value}</div>
                    </div>
                </div>
            </div>`;
            this.shopperArr.push(this.itemType.value);
            totalPrice += this.itemPrice.value * this.itemAmount.value;
            this.finalPrice.innerText = `$${totalPrice}`;
        }
    }
}

let action = new GroceryCart();
action.init();
