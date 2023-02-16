const canvas = document.getElementById("canvas");
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 1000;
const ctx = canvas.getContext("2d");
var A = 0;
const blocksSpriteSheet = new Image();
blocksSpriteSheet.src = "blockSpriteSheet.png";
const SpriteWidth = 100;
const SpriteHeight = 100;
var goodCounter = 0;
var cashForChest = 1
var cash = 0;
var cashForUpgrade = 10;
var cashForCharacter = 15;
var cashText = document.getElementById("cashText");
var perChestText = document.getElementById("perChestText");
var cashForUpgradeText = document.getElementById("cashForUpgradeText");
var cashForNewCharacterText = document.getElementById("cashForNewCharacterText");

const Characters = [[0, 1, 1], [0, 1, 1], [0, 1, 1]]
const Map = [[randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest(), randomChest()],
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
    c = Math.floor(Math.random() * 100) + 1;
    if (c >= 90){
        if (c >= 100){
            chest = 3;
        }
        else{
            chest = 2;
        }
    }
    else{
        chest = 1;
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
        cashForUpgrade = parseInt(cashForUpgrade * 2.5);
    }
}


function buyCharacter(){
    if (cash >= cashForCharacter){
        cash = cash - cashForCharacter;
        Characters.push([0, 1, 1]);
        cashForCharacter = parseInt(cashForCharacter * 3.5);
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
    cashText.textContent = cash;
    perChestText.textContent = cashForChest;  
    cashForUpgradeText.textContent = cashForUpgrade;  
    cashForNewCharacterText.textContent = cashForCharacter;
    move();
    requestAnimationFrame(placeBlocks);
}






