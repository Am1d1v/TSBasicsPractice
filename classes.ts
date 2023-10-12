



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

    drive(): void{
        console.log('Car is driving')
    }

}


const vehicle = new Vehicle('Black');
vehicle.startDrawingProcess();
console.log(vehicle.color);


//const someCar = new Car();
//someCar.drive();



