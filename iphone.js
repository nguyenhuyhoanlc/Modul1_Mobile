function Mobile (){
    this.battery = 100;
    this.draft = "";
    this.inbox = [];
    this.sent = [];
    this.status = false;
      this.isOn = function (){
          return this.status;
      }
      this.turnOn = function (){
          this.status = true;
      }
      this.turnOff = function (){
          this.status = false;
      }
      this.charge = function (){
          if(this.battery < 100)
              this.battery ++;
      }
      this.typeMessage = function (message){
          if (this.isOn()) {
              this.battery--;
              this.draft = message;
          }
      }
      this.receiveMessage = function (message){
          if (this.isOn()) {
              this.battery--;
              this.inbox.push(message);
          }
      }
      this.sendMessage = function (mobile){
          if (this.isOn()) {
              this.battery--;
              mobile.receiveMessage(this.draft)

          }
      }
      this.getInbox = function (){
          if (this.isOn()) {
              this.battery--;
            return this.inbox;
          }
      }

}
let m1 = new Mobile();
let m2 = new Mobile();

m1.turnOn();
m2.turnOn();

m1.typeMessage("Hello cau !");
m1.sendMessage(m2);

m1.typeMessage("Minh la Thuy day ");
m1.sendMessage(m2);
console.log(m2);
document.write(m2.getInbox());

