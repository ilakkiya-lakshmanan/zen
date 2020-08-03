class Tv {
    constructor(brand, channel, price, inches, onOff, status, volume) {
        this.brand = brand;
        this.channel = channel ? channel : 1;
        this.price = price;
        this.inches = inches;
        this.onOff = onOff;
        this.status = status;
        this.volume = volume ? volume : 50;
    }
    increaseVolume() {
        if (this.volume < 100) {
            return this.volume++;
        } else {
            return 100;
        }
    }
    decreaseVolume() {
        if (this.volume > 0) {
            return this.volume--;
        } else {
            return 0;
        }
    }
    setChannel(channel) {
        if (channel <= 50) {
            return this.channel = channel;
        }
        else {
            return this.channel = 50;
        }
    }
    reset() {
        return new Tv();
    }
    getStatus() {
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    }
}
class LEDTv extends Tv {

    constructor(screenThickness,energyUsage,lifeSpan,refreshRate,viewingAngle,backlight){
        super();
        this.screenThickness = screenThickness;
        this.energyUsage = energyUsage;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
        this.viewingAngle = viewingAngle;
        this.backlight = backlight;
    }

    displayDetails(){
        return this.getStatus() + "Screen Thickness "+this.screenThickness +
                " Energy Usage "+this.energyUsage+
                " LifeSpan " + this.lifeSpan+
                " refreshRate "+ this.refreshRate+
                " viewingAngle "+this.viewingAngle+
                " backlight "+ this.backlight


    }

    
}

class PlasmaTv extends Tv {

    constructor(screenThickness,energyUsage,lifeSpan,refreshRate,viewingAngle,backlight){
        super();
        this.screenThickness = screenThickness;
        this.energyUsage = energyUsage;
        this.lifeSpan = lifeSpan;
        this.refreshRate = refreshRate;
        this.viewingAngle = viewingAngle;
        this.backlight = backlight;
    }

    displayDetails(){
        return this.getStatus() + "Screen Thickness "+this.screenThickness +
                " Energy Usage "+this.energyUsage+
                " LifeSpan " + this.lifeSpan+
                " refreshRate "+ this.refreshRate+
                " viewingAngle "+this.viewingAngle+
                " backlight "+ this.backlight


    }

}

//Usage
let obj = new Tv("Samsung",25,1500,49,"on","status",67);
console.log(obj);
obj.increaseVolume();
console.log(obj);
obj.decreaseVolume();
console.log(obj);
obj.setChannel(33);
console.log(obj);
let status = obj.getStatus();
console.log(status);

let ledTv = new LEDTv(12,45,"5","60Hz","180","75");
console.log(ledTv);


let plasmaTv = new PlasmaTv(9,50,"5","90Hz","360","100");
console.log(plasmaTv);