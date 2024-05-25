let person = {
    name: "Alice",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };

person.greet()