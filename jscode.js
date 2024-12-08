class Bank {
    constructor() {
        this.users = [];
        this.uniqueAccountNumber = 1; //counter 
    }
    //Function1: 
    findByUsername(username) { //returns user 
                               //undefined 
        const user = this.users.find(user => user.username === username);
        return user ? user : undefined;
    }
    //Function-2:
    registerUser (username, dateOfBirth, initialAmount) {
        const registeredUser  = this.findByUsername(username) 
        if (registeredUser ) {
            return registeredUser.accountNumber; //existing account number
        }
        const accountNumber = this.uniqueAccountNumber++;
        this.users.push({ username, dateOfBirth, balance: initialAmount, accountNumber });
        return accountNumber; //returns new account number if username not registered
    }
    //Function-3: 
    findByAccountNumber(accountNumber) { //user obj. , undefined
        return this.users.find(user => user.accountNumber === accountNumber);
    }
    //Function-4:
    deposit(accountNumber, amount) {    
        const user = this.findByAccountNumber(accountNumber);
        if (user) {  
            user.balance += amount;
            console.log(`Deposited $${amount} to account ${accountNumber}. New balance: $${user.balance}`);
            return true; //successful
        }
        console.log(`Account ${accountNumber} not found.`);
        return false; //account not found
    }

    withdraw(accountNumber, amount) {
        const user = this.findByAccountNumber(accountNumber, amount);
        if (user && user.balance >= amount) {
            user.balance -= amount; //reduces balance
            console.log(`Withdrew $${amount} from account ${accountNumber}. New balance: $${user.balance}`);
            return true; //successful
        }
        console.log(`Insufficient amount ${accountNumber}`); 
        return false; //insufficient
    }

    checkBalance(accountNumber) {
        const user = this.findByAccountNumber(accountNumber);
        return user ? user.balance : 0; //if account not found = 0 
                                        //balance
    }

    closeAccount(accountNumber) {
        const index = this.users.findIndex(user => user.accountNumber === accountNumber);
                if (index !== -1) {
                    const newUsers = [];
                    for (let i = 0; i < this.users.length; i++) {
                        if (i !== index) {
                            newUsers.push(this.users[i]);
                        }
                    }
                    this.users = newUsers; 
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