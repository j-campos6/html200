/**javascript connectioncheck**/
console.log('javascript is working');


let balance = 300; //starting balance

/******Banking App******/
function bankingApp() {

    let input1 = prompt("Initial Balance = $300 - Enter <Q> to quit - <W> to withdraw - <D> to deposit - <B> to view balance:");

    //*** Switch***//*
    switch (input1) {
          case 'q':
          case 'Q': {
          alert('Thank you for banking with us. See you later!');
          break;
        }

        case 'w':
        case 'W': {
          let input = prompt('How much would you like to withdraw?');
          balance = balance - input;
          bankingApp();
          return;
        }

        case 'd':
        case 'D': {
          let input = prompt('How much would you like to deposit?');
          balance = Number(balance) + Number(input);
          console.log(balance);
          bankingApp();
          return;
        }

        case 'b':
        case 'B': {
          alert('your balance is:' + ' ' + balance);
          bankingApp();
          return;
        }

        default: {
          alert('What you entered is not an option. Try again:');
          bankingApp();
          return;
        }

    }
}
