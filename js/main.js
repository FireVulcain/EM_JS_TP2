let hangman = new Partie();
console.log(hangman.randWord);

$('#sendLetter').on('click', function(){
    let getLetter = $('#guessLetter').val();
    if(getLetter !== "" && hangman.letterProposed.indexOf(getLetter) < 0 && getLetter.length === 1){
        hangman.checkWord(getLetter);
        hangman.letterProposed.push(getLetter);
        $('#proposedLetter').append(" " + getLetter + ", ");
        $('#guessLetter').val('');
    }
    if(getLetter.length > 1){
        $("#differentMessage").append('<p>Une lettre à la fois</p>')
    }
});