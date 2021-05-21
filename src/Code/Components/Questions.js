

const Questions = counter => {
    let question = "";
    switch (counter) {
        case 0: 
            question = "Which of these interests you the most right now?";
            break;
        case 1: 
            question = "Pick a second keyword that interests you";
            break;
        case 2:
            question = "How many friends can you gather up?";
            break;
        case 3:
            question = "How long are you willing to dedicate?";
            break;
        case 4: 
            question = ""
            break;
        case 5:
            question = "";
            break;
        default:
            question = "Hmm. There seems to be an error";
            break;
    }
    return question;
}

export default Questions;