



class Vehicle {


    constructor(public color: string){

    }


    protected drive(): void{
        console.log('I am driving');
    }


    startDrawingProcess(): void{
        this.drive();
    }


    stop(): void{
        console.log('Stopped');
    }

    private beep(): void{
        console.log('Beep Sound');
    }
}



class Car extends Vehicle {

    constructor(public wheels: number, color: string){
        super(color)
    }

    drive(): void{
        console.log('Car is driving')
    }

    carInfo(): void {
        console.log(`
        Number of Wheels: ${this.wheels}
        Color: ${this.color}
        `)
    }
}


const vehicle = new Vehicle('Black');
vehicle.startDrawingProcess();
console.log(vehicle.color);


const someCar = new Car(6, 'Silver');
someCar.carInfo();



