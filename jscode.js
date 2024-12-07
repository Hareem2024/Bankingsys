class Bank {
    constructor() {
        this.users = [];
        this.uniqueAccountNumber = 1; //counter 
    }
    registerUser (username, dateOfBirth, initialAmount) {
   
        const registeredUser  = this.users.find(function(user) {
            return user.username === username;
        });
        if (registeredUser ) {
            return registeredUser .accountNumber;
        }
        const accountNumber = this.uniqueAccountNumber++;
        this.users.push({ username, dateOfBirth, balance: initialAmount, accountNumber });
        return accountNumber;
    }
    deposit(accountNumber, amount) {    
        const user = this.users.find(user => user.accountNumber === accountNumber);
        if (user) {  
            user.balance += amount;
            console.log(`Deposited $${amount} to account ${accountNumber}. New balance: $${user.balance}`);
            return true; 
        }
        console.log(`Account ${accountNumber} not found.`);
        return false;
    }

    withdraw(accountNumber, amount) {
        const user = this.users.find(user => user.accountNumber === accountNumber);
        if (user && user.balance >= amount) {
            user.balance -= amount;
            console.log(`Withdrew $${amount} from account ${accountNumber}. New balance: $${user.balance}`);
            return true;
        }
        console.log(`Insufficient amount ${accountNumber}`);
        return false;
    }

    checkBalance(accountNumber) {
        const user = this.users.find(user => user.accountNumber === accountNumber);
        return user ? user.balance : 0;
    }

    closeAccount(accountNumber) {
        const index = this.users.findIndex(user => user.accountNumber === accountNumber);
        if (index !== -1) {
            this.users.splice(index, 1);
            console.log(`Account ${accountNumber} closed.`);
            return true;
        }
        console.log(`Account ${accountNumber} not found.`);
        return false;
    }
}
const bank = new Bank();

const accountNumber1 = bank.registerUser ('hana', '2023-06-01', 1000);
console.log('Account number:', accountNumber1);

bank.deposit(accountNumber1, 500);
console.log('Balance:', bank.checkBalance(accountNumber1)); 

bank.withdraw(accountNumber1, 300);
console.log('Balance:', bank.checkBalance(accountNumber1)); 

bank.closeAccount(accountNumber1);
console.log('Balance:', bank.checkBalance(accountNumber1)); 