// нужен чтобы интегрировать что-то новое но не поломать старое

class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}


class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 - t2
  }
}


class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2)
      case 'sub': return this.calc.sub(t1, t2)
      default: return NaN
    }
  }
}



const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

const adapter = new CalcAdapter()
console.log(adapter.operations(25, 10, 'add'))
console.log(adapter.calc.add(25, 10));


// my version 

// class OldCalc {
//   operations(t1, t2, operation) {
//     switch (operation) {
//       case 'add': return t1 + t2
//       case 'sub': return t1 - t2
//       default: return NaN
//     }
//   }
// }


// class NewCalc {
//   add(t1, t2) {
//     return t1 + t2
//   }

//   sub(t1, t2) {
//     return t1 - t2
//   }
// }


// class CalcAdapter extends NewCalc {
  

//   operations(t1, t2, operation) {
//     switch (operation) {
//       case 'add': return this.add(t1, t2)
//       case 'sub': return this.sub(t1, t2)
//       default: return NaN
//     }
//   }
// }



// const oldCalc = new OldCalc()
// console.log(oldCalc.operations(10, 5, 'add'))

// const newCalc = new NewCalc()
// console.log(newCalc.add(10, 5))

// const adapter = new CalcAdapter()
// console.log(adapter.operations(25, 10, 'add'))
// console.log(adapter.add(25, 10));