type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);
// const result2 = add('Max', 'Schwarz') as string;
// result2.split(' ')

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title)

const userInput = ''
const storedData = userInput ?? 'DEFAULT';

console.log(storedData)


/*
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("stateDate: " + emp.startDate);
  }
}

printEmployeeInformation(e1)
printEmployeeInformation({name: 'Manu', startDate: new Date()})

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  // if('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000)
  // }
  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if('flyingSpeed' in animal) {
  //   console.log('Moving with speed:' + animal.flyingSpeed)
  // }
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed:' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

// const userInput = <HTMLInputElement>document.getElementById('user-input')
const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'Hi there'

// if(userInput) {
//   (userInput as HTMLInputElement).value = 'Hi there'
// }

interface ErrorContainer { // { email: 'Not a valid email", username: 'Must start with a character' }
  // id: number;
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email.',
  username: 'Must start with a capital character.'
}
*/
