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
const Map = [[7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]];




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
    if (Map[Characters[idx][2]][Characters[idx][1]] == 7){
        Map[Characters[idx][2]][Characters[idx][1]] = A;
        cash = cash + cashForChest;
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
    Map[0] = [7,7,7,7,7,7,7,7,7,7];
    Map[1] = [7,7,7,7,7,7,7,7,7,7];
    Map[2] = [7,7,7,7,7,7,7,7,7,7];
    Map[3] = [7,7,7,7,7,7,7,7,7,7];
    Map[4] = [7,7,7,7,7,7,7,7,7,7];
    Map[5] = [7,7,7,7,7,7,7,7,7,7];
    Map[6] = [7,7,7,7,7,7,7,7,7,7];
    Map[7] = [7,7,7,7,7,7,7,7,7,7];
    Map[8] = [7,7,7,7,7,7,7,7,7,7];
    Map[9] = [7,7,7,7,7,7,7,7,7,7];
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






