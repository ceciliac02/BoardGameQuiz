import React from 'react';

const Questions = counter => {
    let question = "";
    switch (counter) {
        case 0: 
            question = "What genre interests you the most right now?"
            break;
        case 1:
            question = ""
            break;
        default:
            question = "Hmm. There seems to be an error";
            break;
    }
    return question;
}

export default Questions;