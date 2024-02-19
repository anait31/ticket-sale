
const allSeats = document.getElementsByClassName('seat-div');
let availableSeat = 8;

for (const seat of allSeats) {
    seat.addEventListener('click', function(event) {
        availableSeat -= 1;

        const seatSerial = event.target.innerText;

        const priceIs = document.getElementById('price');
        const priceText = priceIs.innerText;
        const price = parseInt(priceText);
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

        event.target.style.backgroundColor = '#1DD100';

        selectedSeat.appendChild(selectedSeatList);
        const totalPrice = document.getElementById('total-price').innerText;

        const totalPriceis = parseInt(totalPrice);

        const sum = totalPriceis + price;

        const grandPriceis = document.getElementById('grand-price').innerText;
        const conGrandPrice = parseInt(grandPriceis);
        const grandPrice = sum;

        const seatLeftis = document.getElementById('seat-left').innerText;
        const seatLeft = parseInt(seatLeftis);
        if(seatLeft < 1 ) {
            alert('Seat Finished, Please wait for next trip. Thank you :)');
            return;
        }

        document.getElementById('total-price').innerText = sum;

        setInnerText('seat-left', availableSeat);
        setInnerText('grand-price', grandPrice);

        
    });

    
}

function setInnerText(idName, value) {
    document.getElementById(idName).innerText = value;
}

