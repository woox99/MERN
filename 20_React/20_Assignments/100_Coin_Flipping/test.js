function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let count = 0;
        let attempts = 0;
        while (count < 5) {
            attempts++;
            const result = tossCoin();
            console.log(result + ' was flipped');
            if (result == 'heads') {
                count++;
            }
            else {
                count = 0;
            }
        }
        resolve(`It took ${attempts} tries to flip five heads!`)
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
console.log("when does this run now?");