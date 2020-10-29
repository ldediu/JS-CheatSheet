let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}

let button = document.getElementById('myButton');

button.addEventListener('click', dog.talk.bind(dog));

//button will be called from document
//bind will return new function 