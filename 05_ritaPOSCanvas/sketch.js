// This is our source lyric
var lyric = "Before this, did you really know what live was? Comprehend to the track, for it's why 'cause Getting measures on the tip of the vibers Rock and roll to the beat of the funk fuzz Wipe your feet really good on the rhythm rug If you feel the urge to freak, do the jitterbug Come and spread your arms if you really need a hug Afrocentric living is a big shrug"

// This is our rita string
var rs; 

function setup() {
    createCanvas(6000,300);
    visualize(lyric);
}

function visualize(str){
    background(255);
    fill(0);
    textSize(40);
    
    // convert the incoming string into a rita string
    
    rs = RiString(str);
    var words = rs.words();
    var pos = rs.pos();

    var xPos = 40;
    var yPos = 40;
    for (var i = 0; i < words.length; i++) {
        if (pos[i] === 'nn') //noun
            fill(200,30,60);
        else if (pos[i] === 'jj') //adjective
            fill(15,150,70);
        else if (pos[i] === 'vb') //verb
            fill(255,240,0);
        else
            fill(0);
        text(words[i],xPos,yPos);
        xPos += textWidth(words[i]+ " ") ;
    }
}