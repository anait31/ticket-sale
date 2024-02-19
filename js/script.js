
const allSeats = document.getElementsByClassName('seat-div');
let availableSeat = 8;

for (const seat of allSeats) {
    seat.addEventListener('click', function(event) {
        availableSeat -= 1;

        const seatSerial = event.target.innerText;

        const priceIs = document.getElementById('price');
        const priceText = priceIs.innerText;
        const price = parseInt(priceText);
        console.log(price);


        const selectedSeat = document.getElementById('selected-seat');
        const selectedSeatList = document.createElement('div');
        selectedSeatList.style.display = 'flex';
        selectedSeatList.style.justifyContent = 'space-between'
        
        const p = document.createElement('p');
        p.innerText = seatSerial;
        selectedSeatList.appendChild(p);
        const p1 = document.createElement('p');
        p1.innerText = 'Economic'
        selectedSeatList.appendChild(p1);
        const p2 = document.createElement('p2');
        p2.innerText = price;
        selectedSeatList.appendChild(p2);

        selectedSeat.appendChild(selectedSeatList);


        const totalPrice = document.getElementById('total-price').innerText;
        const totalPriceis = parseInt(totalPrice);

        document.getElementById('total-price').innerText = totalPriceis+ price;
        setInnerText('seat-left', availableSeat);
    });
}

function setInnerText(idName, value) {
    document.getElementById(idName).innerText = value;
}