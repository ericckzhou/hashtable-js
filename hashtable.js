const hash_num = 17;
class HashTable{
    constructor(){
        this.table = [];
        this.size = 0;
        this.last = 0;
    }
    hash(key) {
        let total = 0;
        for (let i=0; i < key.length; i++){
            total += (hash_num * key.charCodeAt(i)) % this.size;
        }
        return total; //a common hash function via the size of table
    }
    insert = (key) => { //arrow function, first statement = ret value if only 1 statement
        this.size++;
        let value = this.hash(key);
        if (value >= 0){
            if (this.table[value] != undefined){
                while (this.table[value] != undefined){
                    value++;
                }
            }
            this.table[value] = key;
            if (value > this.last){
              this.last = value;
            }
        }
    }
    remove = (key) => {
        let value = this.hash(key);
        let i = 0;
        if (value >= 0){
            while (this.table[value] != key && value < this.last){
                i++;
                value++;
            }
            if (this.table[value] == key){
                this.table[value] = undefined;
            }
            else{
                console.log("This key does not exist in the hash table!");
            }
        }
        console.log("This took: " + i);

    }
    printTable = () => {
        for (var i = 0; i < this.last + 1; i++){
            if (this.table[i] != undefined){
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}