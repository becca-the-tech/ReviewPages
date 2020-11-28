// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

function pAequorFactory(uniqueNum, fifteenBases) {
    return {
        specimenNum: uniqueNum,
        dna: fifteenBases,

        mutate() {
            let randomBase = Math.floor(Math.random() * 15);
            let newBase = Math.floor(Math.random() * 3);
            let newOptions = ['A', 'T', 'C', 'G'];

            if (this.dna[randomBase] === 'A') {
                newOptions = ['T', 'C', 'G'];
                this.dna[randomBase] = newOptions[newBase];
            } else if (this.dna[randomBase] === 'T') {
                newOptions = ['A', 'C', 'G'];
                this.dna[randomBase] = newOptions[newBase];
            } else if (this.dna[randomBase] === 'C') {
                newOptions = ['A', 'T', 'G'];
                this.dna[randomBase] = newOptions[newBase];
            } else if (this.dna[randomBase] === 'G') {
                newOptions = ['A', 'C', 'T'];
                this.dna[randomBase] = newOptions[newBase];
            }
        },

        compareDNA(pAequorObject) {
            let numSame = 0;
            for (let i = 0; i < pAequorObject.dna.length; i++) {
                if (pAequorObject.dna[i] === this.dna[i]) {
                    numSame++;
                }
            }

            let percentSame = Math.floor((numSame / pAequorObject.dna.length) * 100);

            console.log(`Specimen ${pAequorObject.specimenNum} and Specimen ${this.specimenNum} have ${percentSame}% DNA in common, due to ${numSame} bases being the same.`);
        },

        willLikelySurvive() {
            let arrLength = this.dna.length;
            let numGoodBases = 0;

            for (let i = 0; i < arrLength; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    numGoodBases++;
                }
            }

            let percentSurvivable = Math.floor((numGoodBases / arrLength) * 100);
            //      console.log(`Percent Survivable: ${percentSurvivable}% with ${numGoodBases} 'C' or 'G' bases`)
            if (percentSurvivable >= 60) {
                return true;
            } else {
                return false;
            }
        }
    };
}


let firstSample = pAequorFactory(1, mockUpStrand());


//creates an array of 30 pAequor objects that have survivability over 60%
let pAequorSurvivableArray = () => {
    let arr = [];
    let counter = 0;
    while (arr.length < 30) {
        counter++;
        let newInstance = pAequorFactory(counter, mockUpStrand());
        if (newInstance.willLikelySurvive()) {
            arr.push(newInstance);
        }
    }
    return arr;
};

let pAequorStudyArr = pAequorSurvivableArray();

  //console.log(pAequorStudyArr.length);
