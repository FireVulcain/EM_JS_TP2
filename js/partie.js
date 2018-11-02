class Partie{
    constructor (){
        this.randWord = DICTIONARY[Math.floor( Math.random() * DICTIONARY.length )].key.toLowerCase();
        this.secretWordWithBlanks = this.randWord.replace(/\w/g,"_");
        this.correctWord = 0;

        this.letterProposed = [];
        this.mistake = 0;

        for (let i = 0; i < this.randWord.length; i++) {
            $('#showWord').append("<p class='"+i+" word' style='display: inline-block;'>"+this.secretWordWithBlanks[i] + "</p>");
        }
    }

    checkWord(guessedLetter){
        this.guessedLetter = guessedLetter;
        if (this.randWord.indexOf(this.guessedLetter) > -1){
            for (let i = 0; i < this.randWord.length; i++) {
                if(this.randWord[i].indexOf(this.guessedLetter) > -1){
                    $(`.${i}`).empty().append(this.guessedLetter);
                    this.correctWord ++;
                }
            }
        }else{
            this.mistake ++;
            $('#showImgHangman').css('background-image','url("img/'+this.mistake+'.png")');
            if(this.mistake === 11){
                this.death();
            }
        }

        if(this.correctWord === this.randWord.length) this.win();
    }
    win(){
        $('#differentMessage').append("<p>Gagné !</p>");
        $("#guessLetter").remove();
        $("#sendLetter").remove();
        $("#proposedLetter").remove();
        $('#showWord').empty().append("En effet, il fallait trouver le mot : " + this.randWord);
    }
    death(){
        $('#differentMessage').append("<p>Vous être mort</p>");
        $("#guessLetter").remove();
        $("#sendLetter").remove();
        $("#proposedLetter").remove();
        $('#showWord').empty().append("Il fallait trouver le mot : " + this.randWord);
    }
}