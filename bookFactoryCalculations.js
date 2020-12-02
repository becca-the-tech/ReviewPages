function bookFactory(title, author, audioLength, pageNum, returnDate) {
    return {
        //sets original properties based on Constructor
        _title: title,
        _author: author,
        _audioLength: audioLength,
        _pageNum: pageNum,
        _returnDate: returnDate,

        //getters
        get title() {
            return this._title;
        },

        get author() {
            return this._author;
        },

        get audioLength() {
            return this._audioLength;
        },

        get pageNum() {
            return this._pageNum;
        },

        get returnDate() {
            return this._returnDate;
        },

        //setters
        set title(title) {
            this._title = title;
        },

        set author(author) {
            this._author = author;
        },

        //if time is given in hours instead of minutes, convert to minutes
        //assume any book listed will take more than 1.5 hrs to read
        //so if time <= 90, hours were given instead of minutes
        set audioLength(time) {
            if (time <= 90) {
                let minutes = time * 60;
                this._audioLength = minutes;
            } else {
                this._audioLength = time;
            }
        },

        set pageNum(pages) {
            this._pageNum = pages;
        },

        set returnDate(daysLeft) {
            if (daysLeft !== undefined) {
                this._isLibraryBook = true;
            }
            this._returnDate = daysLeft;
        },

        //method to calculate percent of book read by number of minutes listened to
        audioPercentDone(timeRead, typeOfTime = "mins") {
            let minutes;
            if (this.audioLength <= 90) {
                minutes = this.audioLength * 60;
            } else {
                minutes = this.audioLength;
            }

            //default measurement is minutes, if not minutes then it's by hours
            if (typeOfTime !== "mins") {
                timeRead *= 60;
            }
            let percent = Math.floor((timeRead / minutes) * 100);

            if (percent > 100) {
                console.log("Incorrect time read or units given. Check again.");
                percent = undefined;
            }
            return percent;
        },

        //calculates the percent done reading book based on your current page in the book
        pagePercentDone(currentPage) {
            let percent = Math.floor((currentPage / this.pageNum) * 100);

            if (percent > 100) {
                console.log("Incorrect page number given. Current page cannot be greater than book length.");
                percent = undefined;
            }
            return percent;
        },

        //calculates audio book time (in minutes) spent per day to finish in certain number of days
        libraryBookAudioPace(daysLeft) {
            if (this._isLibraryBook == undefined) {
                console.log();
                console.log('This book is not set as a library book. Please input return date if it is a library book.');
                //if daysLeft is not specified and not a library book, cannot determine the time
                if (daysLeft === undefined) {
                    return NaN;
                }
            }

            //uses return date of book if daysLeft is not specified
            if (daysLeft === undefined) {
                daysLeft = this._returnDate;
            }

            //verifies that audio length is set in minutes not hours, if it is in hours converts to minutes
            let minutes;
            if (this._audioLength <= 90) {
                minutes = this._audioLength * 60;
            } else {
                minutes = this._audioLength;
            }

            let audioMinutesPerDay = Math.floor((minutes / daysLeft));
            //returns minutes of audiobook per day needed to finish within that time
            return audioMinutesPerDay;
        },

        libraryBookReadingPace(daysLeft) {
            if (this._isLibraryBook == undefined) {
                console.log();
                console.log('This book is not set as a library book. Please input return date if it is a library book.');
                //if daysLeft is not specified and not a library book, cannot determine the time
                if (daysLeft === undefined) {
                    return NaN;
                }
            }

            //uses return date of book if daysLeft is not specified
            if (daysLeft === undefined) {
                daysLeft = this._returnDate;
            }

            let pagesPerDay = Math.floor(this.pageNum / daysLeft);
            return pagesPerDay;
        }
    };
}



//creates a book
let book1 = bookFactory("Way of Kings", "Brandon Sanderson", 48, 1288);
let book2 = bookFactory("Educated", "Tara Smith", 6.4, 480);

//checking setters work properly
//book1.audioLength = 45;
//book1.returnDate = 20;
console.log(book1);

console.log(`Percent read after 40 hours: ${book1.audioPercentDone(40, "hrs")}%`);
console.log(`Percent read after 987 pages of book: ${book1.pagePercentDone(987)}%`);
console.log(`Time of audiobook to read per day to finish in 15 days: ${book1.libraryBookAudioPace(15)} minutes`);
//console.log(book2);

book2.returnDate = 17;
book2.audioLength = 6.4;
//console.log(book2);
console.log(`Time of audiobook to read per day to finish by due date (of ${book2.returnDate} days): ${book2.libraryBookAudioPace()} minutes`);
console.log(`Number of pages to read a day to finish book within 5 days: ${book1.libraryBookReadingPace(5)} pages`);
