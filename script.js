const today = new Date();
const jamesBirthday = {
    _james: {
        dateOfBirth: []
    },
    set Birthday(date) {
        if (typeof date[0] === 'number' && typeof date[1] === 'number' && typeof date[2] === 'number' ){
            this._james.dateOfBirth = date
        } else {
            console.log ("incorrect date format, please use numbers");
        }
    },
    get Birthday(){
        if (this._james.dateOfBirth[0] === today.getDate() && this._james.dateOfBirth[1] === today.getMonth()+1 ){
            var age = today.getFullYear() - this._james.dateOfBirth[2];
            console.log('Happy Birthday with your '+age+'th birthday James!');
        } else {
            console.log('Oh no, I\'m too late! Congrats anyway!');
        }
    }
};

jamesBirthday.Birthday = [07, 10, 1990];
jamesBirthday.Birthday;
