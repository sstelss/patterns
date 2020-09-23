// позволяет добавить новое поведение или функционал для существующего обьекта

class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}


function aws (server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.url
  }
  return server
}

function azure(server) {
  server.isAzure = true
  server.port += 500
  return server
}

const s1 = aws(new Server('12.34.55.69', 8080))
console.log(s1.isAWS)
console.log(s1.awsInfo());


const s2 = azure(new Server('45.74.77.13', 1000))
console.log(s2.url);

