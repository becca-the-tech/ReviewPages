function newStyle() {
    let newColor = '';
    let newFont = '';
    let quote = '';

    let x = Math.floor(Math.random() * 7);
    switch (x) {
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            quote = "She would not fail. And she would not let fear choose her path. \n-Leigh Bardugo";
            break;
        case 1:
            newColor = 'blue';
            newFont = 'Florence, cursive';
            quote = "My humanity is bound up in yours, for we can only be human together. \n-Desmond Tutu";
            break;
        case 2:
            newColor = 'yellow';
            newFont = 'Verdana';
            quote = "Speak your mind even if your voice shakes. \n-Maggie Kuhn";
            break;
        case 3:
            newColor = 'purple';
            newFont = 'Courier New';
            quote = "Walt's fundamentals for success still ring true. You build the best product you can.\n You give people delivery of exceptional service. You learn from your experience. \nAnd you celebrate success. You never stop growing. You never stop believing. \n-The Walt Disney Institute";
            break;
        case 4:
            newColor = 'cyan';
            newFont = 'Georgia';
            quote = "Everything grand is made from a series of ugly little moments. \nEverything worthwhile by hours of self-doubt and days of drudgery. \nAll the works by people you and I admire sit atop a foundation of failures. \nSo whatever your project, whatever your struggle, whatever your dream, \nkeep toiling because the world needs your skyscraper. \n-Pierce Brown";
            break;
        case 5:
            newColor = 'maroon';
            newFont = 'Palatino';
            quote = "She sat there for an extended time, feeling ashamed of her weakness, but also proud. \nShe'd done it. It was small, but she'd done something. \n-Brandon Sanderson";
            break;
        case 6:
            newColor = 'cornflowerblue';
            newFont = 'Impact';
            quote = "Keep going, one step at a time. Any progress is good. Little increments build upon each other, just keep striving. \n-Becca";
            break;
    }

    let elem = document.getElementById('logo');
    let newBorderColor = "2px dotted " + newColor;
    elem.style.color = newColor;
    elem.style.border = newBorderColor;
    elem.style.fontFamily = newFont;
    elem.innerHTML = quote;
}
