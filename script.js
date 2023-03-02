const canvas = document.getElementById("canvas");
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 1000;
const ctx = canvas.getContext("2d");
var A = 0;
var gameCode = 0;
const blocksSpriteSheet = new Image();
blocksSpriteSheet.src = "blockSpriteSheet.png";
const SpriteWidth = 100;
const SpriteHeight = 100;
var goodCounter = 0;
var cashForChest = 1
var cash = 0;
let adcoins = 0;
var cashFormat = 0;
var normChests = 0;
var goldChests = 0;
var diamondChests = 0;
var rubinChests = 0;
var cashForUpgrade = 10;
let onAd = 0;
let adTime = -1;
let adFrame = 0;
// ad name / ad coins to get / time / ad ID
let ads = [["alianskiYT ad", 1, 1100, 0, 0, 2], ["emotkowyYT ad", 1, 450, 1, 0, 0], ["felixerTV ad", 1, 450, 2, 0, 0]]
var cashForCharacter = 15;
var cashText = document.getElementById("cashText");
var perChestText = document.getElementById("perChestText");
var cashForUpgradeText = document.getElementById("cashForUpgradeText");
var cashForNewCharacterText = document.getElementById("cashForNewCharacterText");
var charactersText = document.getElementById("charactersText");


const Characters = [[0, 1, 1], [0, 1, 1], [0, 1, 1]]
 Map = [[randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
    [randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()]];


function randomChest(){
    chest = 0;
    c = Math.floor(Math.random() * 1000) + 1;
    if (c >= 900){
        if (c >= 990){
            if (c >= 999){
                chest = 4;
                rubinChests ++;
            }
            chest = 3;
            diamondChests ++;
        }
        else{
            chest = 2;
            goldChests ++;
        }
    }
    else{
        chest = 1;
        normChests ++;
    }
    return chest
}

function move(){
    for(var idx = 0; idx < Characters.length;idx++){
        var random = Math.floor(Math.random() * 360);
        if (Characters[idx][1] != 9 && random <= 90){
            Characters[idx][1] = Characters[idx][1] + 1;
        }
        if (Characters[idx][1] != 0 && random <= 180 && random >= 91){
            Characters[idx][1] = Characters[idx][1] - 1;
        } 
        if (Characters[idx][2] != 9 && random <= 270 && random >= 181){
            Characters[idx][2] = Characters[idx][2] + 1;
        } 
        if (Characters[idx][2] != 0 && random <= 360 && random >= 271){
            Characters[idx][2] = Characters[idx][2] - 1;
        }
        breakChest(idx) 
    }
}
const interval = setInterval(function() {
    animateAd()
  }, 1000);
function animateAd(){
    for(var idx = 0; idx < ads.length;idx++){
        if (ads[idx][4] < ads[idx][5]){
            ads[idx][4] ++;
        }
        else{
            ads[idx][4] = 0;
        }
    }
}
function breakChest(idx){
    if (Map[Characters[idx][2]][Characters[idx][1]] == 1){
        Map[Characters[idx][2]][Characters[idx][1]] = A;
        cash = cash + cashForChest;
    

    }
    if (Map[Characters[idx][2]][Characters[idx][1]] == 2){
        Map[Characters[idx][2]][Characters[idx][1]] = A;
        cash = cash + parseInt(cashForChest * 2.5);
    

    }
    if (Map[Characters[idx][2]][Characters[idx][1]] == 3){
        Map[Characters[idx][2]][Characters[idx][1]] = A;
        cash = cash + parseInt(cashForChest * 7.5);
    

    }
    if (Map[Characters[idx][2]][Characters[idx][1]] == 4){
        Map[Characters[idx][2]][Characters[idx][1]] = A;
        cash = cash + parseInt(cashForChest * 30);
    

    }
    goodCounter = 0;
    for (var idx = 0; idx < Map.length;idx++){
        for (var idx2 = 0; idx2 < Map[idx].length;idx2++){
            if (Map[idx][idx2] == A){
                goodCounter++;
            }
        }
    }
    if (goodCounter >= 100){
        resetMap();
    }
    
}

function resetMap(){
    Map[0] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[1] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[2] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[3] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[4] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[5] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[6] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[7] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[8] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
    Map[9] = [randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest(),randomChest()];
}


function upgrade(){
    if (cash >= cashForUpgrade){
        cash = cash - cashForUpgrade;
        cashForChest++;
        cashForUpgrade = parseInt(cashForUpgrade * 1.5);
    }
}


function buyCharacter(){
    if (cash >= cashForCharacter){
        cash = cash - cashForCharacter;
        Characters.push([0, 1, 1]);
        cashForCharacter = parseInt(cashForCharacter * 2.5);
    }
}


function cashFormating(value){
    if (value >= 1000){
        cashFormat = parseInt(value / 1000) + 'K';
        if (value >= 1000000){
            cashFormat = parseInt(value / 1000000) + 'M';
            if (value >= 1000000000){
                cashFormat = parseInt(value / 1000000000) + 'B';
            }
        }
    }
    else{
        cashFormat = value;
    }
    return cashFormat;
}

document.getElementById("gameCodeSubmit").onclick = function(){
    gameCode = document.getElementById("gameCodeText").value;
    command(gameCode);
}

function command(gameCode){
    var field = 0;
    var fieldNR = 1;
    var characterslength = Characters.length;
    for (var idx = 0; idx < gameCode.length;idx++){
        if (gameCode[idx] != "&"){
            field = (field * 10) + parseInt(gameCode[idx]);
        }
        else{
            if (fieldNR == 1){
                cash = field;
            }
            if (fieldNR == 2){
                cashForChest = field;
            }
            if (fieldNR == 3){
                cashForUpgrade = field;
            }
            if (fieldNR == 4){
                cashForCharacter = field;
            }
            if (fieldNR == 5){
                characterslength = field;
                Characters.length = 0;
                for (var idx = 0; idx < characterslength;idx++){
                    Characters.push([0, 1, 1]);   
                }
            }
            fieldNR ++;
            field = 0;
        }
    }
}

function download(filename, text){
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function exportSave(){
    var saveCode = "";
    saveCode = saveCode + cash;
    saveCode = saveCode + "&";
    saveCode = saveCode + cashForChest;
    saveCode = saveCode + "&";
    saveCode = saveCode + cashForUpgrade;
    saveCode = saveCode + "&";
    saveCode = saveCode + cashForCharacter;
    saveCode = saveCode + "&";
    saveCode = saveCode + Characters.length;
    saveCode = saveCode + "&";
    download("save.txt", saveCode);
}

function watchAdStart(){
    if (adTime == -1){
        adId = Math.floor(Math.random() * ads.length);
        onAd = adId;
        adTime = ads[onAd][2];
    }

}

function adEnded(){
    if (adTime == 0){
        adcoins = adcoins + ads[onAd][1];
    }
}


blocksSpriteSheet.onload = function placeBlocks(){  
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (var idx = 0; idx < Map.length;idx++){
        for (var idx2 = 0; idx2 < Map[idx].length;idx2++){
            if (Map[idx][idx2] != A){
                ctx.drawImage(blocksSpriteSheet, Map[idx][idx2] * SpriteWidth, 0 * SpriteHeight, SpriteWidth, SpriteHeight, idx2 * 100, idx * 100, SpriteWidth, SpriteHeight)
            }
        }
    }
    for(var idx = 0; idx < Characters.length;idx++){
        ctx.drawImage(blocksSpriteSheet, Characters[idx][0] * SpriteWidth, 0 * SpriteHeight, SpriteWidth, SpriteHeight, Characters[idx][1] * 100, Characters[idx][2] * 100, SpriteWidth, SpriteHeight)
    }
    if (adTime > 0){
        adTime = adTime - 1;
        ctx.drawImage(blocksSpriteSheet, ads[onAd][3] * SpriteWidth, (ads[onAd][4] + 1) * SpriteHeight, SpriteWidth, SpriteHeight, 0, 0, SpriteWidth * 10, SpriteHeight * 10)
    }
    else{if (adTime == 0){
        adTime = adTime - 1;
        adcoins = adcoins + ads[onAd][1];
    }}
    
    cashText.textContent = cashFormating(cash);
    perChestText.textContent = cashForChest;
    cashForUpgradeText.textContent = cashFormating(cashForUpgrade);  
    cashForNewCharacterText.textContent = cashFormating(cashForCharacter);
    charactersText.textContent = Characters.length;
    move();
    requestAnimationFrame(placeBlocks);
}