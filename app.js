class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
    }
}

//Truck
class Truck extends Cars {
    constructor(model, color, wheels, capacity) {
        super(model, color, wheels);
        this.capacity = capacity;
    }
}

//электромобиль
class ElectricCar extends Cars {
    constructor(model, color, wheels, batteryLife) {
        super(model, color, wheels);
        this.batteryLife = batteryLife;
    }
}

// спортивная машина
class SportsCar extends Cars {
    constructor(model, color, wheels, maxSpeed) {
        super(model, color, wheels);
        this.maxSpeed = maxSpeed;
    }
}


const myTruck = new Truck('Volvo', 'Blue', 6, 20000);
const myElectricCar = new ElectricCar('Tesla', 'Red', 4, '500km');
const mySportsCar = new SportsCar('Ferrari', 'Yellow', 4, 350);


myTruck.start();
myElectricCar.start();
mySportsCar.start();
console.log(myTruck);
console.log(myElectricCar);
console.log(mySportsCar);





// ----------------2 задание-----------------------

class TrafficLight {
    constructor() {
        this.redLight = document.getElementById('red');
        this.yellowLight = document.getElementById('yellow');
        this.greenLight = document.getElementById('green');
        this.status = document.getElementById('status');
    }

    resetLights() {
        this.redLight.style.backgroundColor = 'gray';
        this.yellowLight.style.backgroundColor = 'gray';
        this.greenLight.style.backgroundColor = 'gray';
    }

    changeLight(color) {
        this.resetLights();
        switch (color.toLowerCase()) {
            case 'красный':
                this.redLight.style.backgroundColor = 'red';
                this.status.textContent = 'STOP';
                break;
            case 'желтый':
                this.yellowLight.style.backgroundColor = 'yellow';
                this.status.textContent = 'WAIT';
                break;
            case 'зеленый':
                this.greenLight.style.backgroundColor = 'green';
                this.status.textContent = 'GO';
                break;
            default:
                alert('Неверный цвет, попробуйте снова.');
        }
    }
}

const trafficLight = new TrafficLight();

document.getElementById('changeLightBtn').addEventListener('click', () => {
    const color = prompt('Введите цвет (Красный, Желтый или Зеленый):');
    trafficLight.changeLight(color);
});
