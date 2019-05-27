const square = function (x) {
    return x * x
};

const squareArrow = (x) => {
    return x *x
};


const squareArrowLambda = (x) => x *x;

// console.log(square(3));
// console.log(squareArrow(4));
// console.log(squareArrowLambda(5));

const event = {
    name: 'Birthday Party',
    for: 'Marcus',
    getEventList: function () {
        console.log(`Event: ${this.name} for: ${this.for}`)
    },

    attendees: ['Marcus', 'Jenna', 'Tom'],
    printEventList () {
        console.log(this.name);

        this.attendees.forEach(attendeeName => {
            console.log(attendeeName + ' is attending the party ! for ' +
            this.name)
        })
    }
};

event.printEventList();