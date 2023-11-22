class Job {
    private _role: string;
    private _salary: number;

    constructor(role: string, salary: number) {
        this._role = role;
        this._salary = salary;
    }

    get salary(): number {
        return this._salary
    }

    public work(personName: string) {
        console.log(`${personName} сейчас работает как ${this._role}`)
    }
}

class Person {
    private _Job: Job | undefined;
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    set setJob(Job: Job) {
        this._Job = Job
    }

    getSalary(): number {
        return 0
    }

    work(): void {
        if (this._Job) {
            this._Job.work(this._name);
        } else {
            console.log(`${this._name} не имеет работы в данный момент`);
        }
    }
}

let p1 = new Person('Alex')
let p2 = new Person('David')

let job1 = new Job('Программист', 10000)
let job2 = new Job('UI/UX Дизайнер', 3000)

p1.setJob = job1
p2.setJob = job2

p1.work()
p2.work()

p1.setJob = job2
p2.setJob = job1

p1.work()
p2.work()



