const user = {
    username: "sameer",
    price: 152,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()