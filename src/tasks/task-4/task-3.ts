interface CanRun {
    run(): void;
}
  
interface CanSwim {
    swim(): void;
}
  
interface CanFly {
    fly(): void;
}
  
abstract class Human implements CanRun, CanSwim, CanFly {
    abstract run(): void;
    abstract swim(): void;
    abstract fly(): void;
}
  
class Nibiruans extends Human {
    run() {
        console.log("Легкоатлет с планеты Нибиру бегает");
    }

    swim() {
        console.log("Легкоатлет с планеты Нибиру не плавает");
    }

    fly() {
        console.log("Легкоатлет с планеты Нибиру не летает");
    }
}
  
class Earthling extends Human {
    run() {
        console.log("Землянин бежит бегает");
    }

    swim() {
        console.log("Землянин плавает");
    }

    fly() {
        console.log("Землянин не летает");
    }
}
  
// Класс для криптонцев
class Kryptonian extends Human {
    run() {
        console.log("Криптонец бегает");
    }

    swim() {
        console.log("Криптонец плавает");
    }

    fly() {
        console.log("Криптонец летает");
    }
}
  

const nibiruans = new Nibiruans();
nibiruans.run();
nibiruans.swim();
nibiruans.fly();

const earthling = new Earthling();
earthling.run();
earthling.swim();
earthling.fly();

const kryptonian = new Kryptonian();
kryptonian.run();
kryptonian.swim();
kryptonian.fly();
  