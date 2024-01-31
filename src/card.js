function createCard(id, question, answers, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
};

function evaluateGuess(answer, guess) {
    if(answer === guess) {
        return "Correct"
    } else {
        return "Incorrect"
    }
}

module.exports = {
    createCard,
    evaluateGuess
}