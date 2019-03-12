class bar {

  names = ['alo', 'genaro']


  foo() {

    // // Step-1
    // console.log(this);

    // setTimeout(function() {
    //   console.log(this);
    // }, 0);

    // // Step-2
    // console.log(this.names);

    // setTimeout(function() {
    //   console.log(this.names);
    // }, 0);

    // // Step-3
    // console.log(this.names);

    // const _this = this;
    // setTimeout(function() {
    //   console.log(_this.names);
    // }, 0);

    // Step-4
    // console.log(this.names);

    // setTimeout(() => {
    //   console.log(this.names);
    // }, 0);


  }
}

const a = new bar();
a.foo();
