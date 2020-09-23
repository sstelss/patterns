// позволяет создавать обьекты определенного типа

// раньше, до классов
// function Server(name, ip) {
//   this.name = name
//   this.ip = ip

// }

// Server.prototype.getUrl = function() {
//   return `https://${this.ip}:80`
// }

// const aws = new Server('AWS German', '82.21.21.32')
// console.log('aws.getUrl(): ', aws.getUrl())

// сейчас, есть классы
class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }
  getUrl = function() {
    return `https://${this.ip}:80`
  }
}

const aws = new Server('AWS German', '82.21.21.32')
console.log('aws.getUrl(): ', aws.getUrl())