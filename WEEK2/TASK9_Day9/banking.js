class Bank{
    constructor(code,address){
        this.code = code;
        this.address = address;
    }

    manages(){

    }

    maintains(){

    }
}

class ATM extends Bank{
    constructor(location,managedBy){
        this.location = location;
        this.managedBy=managedBy;
    }

    identifies(){

    }

    transactions(){

    }
}


class Customer{
    constructor(name,address,dob,cardnumber,pin){
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cardnumber = cardnumber;
        this.pin = pin;
    }

    verifyPassword(){

    }
}

class Account{
    constructor(number,balance){
        this.number = number;
        this.balance = balance;
    }

    deposit(){

    }

    withdraw(){

    }
    createTransaction(){

    }
}


class ATMTransactions{

    constructor(transactionId,date,type,amount,postBalance){
        this.transactionId = transactionId;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.postBalance = postBalance;

    }

    modifies(){

    }
}

class CurrentAccount extends Account{
    constructor(accountno,balance){
        this.accountno = accountno;
        this.balance = balance;
    }

    withdraw(){

    }
}

class SavingsAccount extends Account{
    constructor(accountno,balance){
        this.accountno = accountno;
        this.balance = balance;
    }
}
