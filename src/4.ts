// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Наприклад, ось так:

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

class Key { 
    private signature: number;
    constructor() {
        this.signature = Math.random()*10**16;
    }
    public getSignature(): number {
        return this.signature
    };
};

class Person { 
    constructor(private key: Key, public name: string) {
        this.key = key;
        this.name = name;
    }

    public sayName(): string {
        return this.name
    };
    public getKey(): number {
        return this.key.getSignature()
    };
};

abstract class House { 
    tenants: Person[] = [];
    public door: boolean = false; // door відкрита true, закрита false
    constructor(protected key: Key) { 
        this.key = key;
    };
    openDoor(key: number): void { };
    comeIn(person: Person): void { };

};

class MyHouse extends House { 
    public door: boolean
    constructor(key: Key) { 
        super(key)
    };

    openDoor(key: number): void {
        if (this.door) {
            console.log('Door already open');
            return;
        }
        if (this.key.getSignature() === key && !this.door) {
            this.door = true;
            console.log('This door is open!');
        } else {
            console.log('This is bad key. Try again.');
        }
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
            console.log(`${person.sayName()} is entry to house`);
            return
        }
        console.log('You can\'t enter');
        return
    }
};


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key, 'Alex');

console.log(key);
console.log(house);
console.log(person);


house.openDoor(person.getKey());


house.comeIn(person);


export {};