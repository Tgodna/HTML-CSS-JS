function departTripTicker() {
    return {
        name: "Tahira",
        from: "New York",
        to: "San Francisco",
        businessClass: false,
        upgrade: true,
        leaveTime: "10:00 AM",
        arriveTime: "1:00 PM"
    };
}

function returnTripTicker() {
    return {
        name: "Tahira",
        from: "San Francisco",
        to: "New York",
        businessClass: true,
        upgrade: false,
        leaveTime: "3:00 PM",
        arriveTime: "11:00 PM"
    };
}

function checkUpgrade(upgrade) {
    if (upgrade) {
        return "You have been upgraded to Business Class!";
    } else {
        return "Your ticket is already business class!";
    }
}

const departTicket = departTripTicker();
const returnTicket = returnTripTicker();

console.log(departTicket.name);
console.log(departTicket.from);
console.log(departTicket.to);
console.log(departTicket.businessClass);
console.log(departTicket.upgrade);
console.log(departTicket.leaveTime);
console.log(departTicket.arriveTime);

console.log(returnTicket.name); 
console.log(returnTicket.from);
console.log(returnTicket.to);
console.log(returnTicket.businessClass);
console.log(returnTicket.upgrade);
console.log(returnTicket.leaveTime);
console.log(returnTicket.arriveTime);


console.log(checkUpgrade(returnTicket.upgrade));
