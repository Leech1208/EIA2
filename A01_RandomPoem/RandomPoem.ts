namespace RandomPoem {

// declare Arrays
    let subject: String[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb: String[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"] ;
    let object: String[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // console.log(subject);
    // console.log(verbs);
    // console.log(objects);

// for-loop with length of the Arrays
    for (let i: number = subject.length; i > 0; i--) {

        // console.log(i);
        // console.log(getVerse([], [], []));
        // console.log(Math.floor(Math.random() * subject.length));

// console output with getVerse-function
    console.log(getVerse(subject, verb, object));

    }


// function to generate the verse
    function getVerse(_subject: String[], _verb: String[], _object: String[]):  string {
        let verse: string = "";
// generating a random number from 0 to length of subject-Array
        var randomNumber: number = Math.floor(Math.random() * subject.length);
// splice removes one of the Array items on randomNumber-position
        var removed: String[] = _subject.splice(randomNumber, 1);
// add spliced item to verse variable
        verse = verse + removed + " "; 
// splice items from verb-Array and object-Array and add to verse variable
        randomNumber = Math.floor(Math.random()  * verb.length);
        verse = verse + verb.splice(randomNumber, 1) + " ";
        randomNumber = Math.floor(Math.random()  * object.length);
        verse = verse + object.splice(randomNumber, 1) + ".";
// function now returns string verse with subject + verb + object
        return verse;
    }

}
