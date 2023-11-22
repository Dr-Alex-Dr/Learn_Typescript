class User {
    constructor(
        public username: string,
        public countMessages: number,
        public countWornings: number,
        public dateRegestarin: Date
    ) {}

    getRegistrationDays(): number {
        const currentDate: Date = new Date();
        const perSecondInDay = 1000 * 60 * 60 * 24

        return Math.floor((currentDate.getTime() - this.dateRegestarin.getTime()) / perSecondInDay);
    }
}

class ConfidenceHelper {
    static checkConfidence(confidenceRatio: number): boolean {
        return confidenceRatio >= 0;
    }
}

class TrustedUser {
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    public getConfidenceRation(): number {
        const countRegistrationDays: number = this.user.getRegistrationDays();
        return (this.user.countMessages * 2) - (this.user.countWornings * 100) + countRegistrationDays;
    }

    isTrusted(): boolean {
        const confidenceRatio: number = this.getConfidenceRation();
        return ConfidenceHelper.checkConfidence(confidenceRatio);
    }
}


const users = [
    new User("user1", 100, 1, new Date("2022-01-01")),
    new User("user2", 50, 100, new Date("2021-06-15")),
    new User("user3", 200, 2, new Date("2023-03-10"))
]

for (let user of users) {
    const trustedUser = new TrustedUser(user)
    console.log(`${user.username} is trusted: ${trustedUser.isTrusted()}`);
}

