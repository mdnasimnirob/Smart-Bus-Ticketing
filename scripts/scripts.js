function buyTickets() {

    const poribohonSection = document.getElementById('poribohon');
    poribohonSection.scrollIntoView({ behavior: 'smooth' });

}

let selectedSeat = 0;
let seatLeft = 40;
const maxSeat = 4;
const perTicketPrice = 550;
const seats = document.getElementsByClassName('seat');
const clickSeat = document.getElementById('selected-seat')
const leftSeat = document.getElementById('empty-seats');

for (const seat of seats) {
    seat.addEventListener('click', function () {
        const seatValue = seat.innerText;
        const titleContainer = document.getElementById('title-container');
        // console.log(seatValue);

        const p = document.createElement('p');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        p.innerText = seatValue;
        h1.innerText = "Economoy"
        h2.innerText = 550;
        price = clickSeat.innerText * perTicketPrice + 550;
        price2 = price - perTicketPrice;
        if (selectedSeat < maxSeat || seat.classList.contains('bg-[#1DD100]')) {
            if (!seat.classList.contains('bg-[#1DD100]')) {
                seat.classList.add('bg-[#1DD100]');
                selectedSeat++;
                titleContainer.appendChild(p);
                titleContainer.appendChild(h1);
                titleContainer.appendChild(h2);
                document.getElementById('total-price').innerText = price.toFixed(2);
            }
            else {

                seat.classList.remove('bg-[#1DD100]');
                titleContainer.innerHTML = '';
                clickSeat.innerText = selectedSeat;
                price2 = clickSeat.innerText * perTicketPrice - 550;
                document.getElementById('total-price').innerText = price2;
                selectedSeat--;
            }
            clickSeat.innerText = selectedSeat;
            leftSeat.innerText = seatLeft - selectedSeat;
        }


    });
};



function applyCupon() {
    const inputCupon = document.getElementById('input-Cupon');
    
    const grandTotal=document.getElementById('grand-total');
    const inputAndButton=document.getElementById('input-and-button');
    // console.log(inputCupon.value);
    if(inputCupon.value === 'NEW15'){
        discount=document.getElementById('total-price').innerText*0.15;
        grandTotalPrice=document.getElementById('total-price').innerText-discount;
        grandTotal.innerText=grandTotalPrice;
        inputAndButton.classList.add('hidden');
    }
    else if(inputCupon.value === 'Couple 20'){
        discount=document.getElementById('total-price').innerText*0.20;
        grandTotalPrice=document.getElementById('total-price').innerText-discount;
        grandTotal.innerText=grandTotalPrice;
        inputAndButton.classList.add('hidden');
    }
    else{
        alert('Please Enter valid Coupon Code')
    }
}