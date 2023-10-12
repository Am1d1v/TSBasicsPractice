



class Vehicle {

    protected drive(): void{
        console.log('I am driving');
    }


    startDrawingProcess(): void{
        this.drive();
    }


    stop(): void{
        console.log('Stopped');
    }
}


class Car extends Vehicle {

    drive(): void{
        console.log('Car is driving')
    }
}


const vehicle = new Vehicle();
vehicle.startDrawingProcess();


const someCar = new Car();
someCar.drive();


