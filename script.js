function komenda(id){
    commandsText = document.getElementById("commands");
    commandsText.style.left = 0 + "px";
    if (id == 1){
        document.getElementById("line001").textContent = "pierwsza komenda od tego pierwszego bloka poleceń (fioletowego staje się fioletowym poprzez ustawienie w opcjach na repeat)";
        document.getElementById("line002").textContent = 'gamemode creative @a[nbt={SelectedItem:{id:"minecraft:command_block"}}]';
        document.getElementById("line003").textContent = "druga komenda w pomarańczowym" 
        document.getElementById("line004").textContent = "gamemode survival @p"

    }
    if (id == 2){
        document.getElementById("line001").textContent = '1. [repeat] [unconditional] [always active] /gamemode survival @a[nbt={SelectedItem:{id:"minecraft:bone"}}]';
        document.getElementById("line002").textContent = '2. [repeat] [unconditional] [needs redstone] /effect give @p minecraft:invisibility 1 1';
        document.getElementById("line003").textContent = '3. [chain] [unconditional] [always active] /tp @e[name=balto] @p';
        document.getElementById("line004").textContent = '4. [chain] [unconditional] [always active] /effect give @p minecraft:speed 1 1 true';
        document.getElementById("line005").textContent = '5 (ten w tubie a tuby nie trzeba budować ale ja zbudowałem bo miałem ochotę ;-)).';
        document.getElementById("line006").textContent = '[repeat] [unconditional] [needs redstone] /tp @e[name=balto] ~ ~1 ~ facing 66.73 73.00 -31.39';
        document.getElementById("line007").textContent = '6.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:fire_resistance 1 10 true';
        document.getElementById("line008").textContent = '7.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:absorption 1 10 true';
        document.getElementById("line009").textContent = '8.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:health_boost 1 10 true';
        document.getElementById("line010").textContent = '9.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:regeneration 1 10 true';
    }
    if (id == 3){
        document.getElementById("line001").textContent = "nether star [impulse] [unconditional] [needs redstone] /give @p frog_spawn_egg{EntityTag:{id:armor_stand,ShowArms:1b,Invisible:1b,Marker:1b,NoBasePlate:1b,Small:1b,DisabledSlots:4144959,CustomName:'[{'text':'Waypoint'}]',Health:231,Invulnerable:1b,NoAI:1b,NoGravity:1b,PersistenceRequired:1b,Silent:1b,Tags:['waypoint'],ArmorItems:[{},{},{},{id:red_bed,Count:1}],ArmorDropChances:[0f,0f,0f,0f],Attributes:[{Name:'generic.max_health',Base:231f}]},display:{Name:'[{'text':'Waypoint','italic':false}]'}} 1";
        document.getElementById("line002").textContent = "blaze rod [repeat] [unconditional] [always active] effect give @e[tag=waypoint] minecraft:glowing infinite";
    }
    if (id == 4){
        document.getElementById("line001").textContent = 'netheryt 1 [impulse] [unconditional] [needs redstone] execute as @e[tag=warp] positioned as @s run setblock ~ ~-1 ~ air destroy';
        document.getElementById("line002").textContent = 'netheryt 2 [chain] [unc] [alw] /kill @e[tag=warp]';
        document.getElementById("line003").textContent = 'chleb /give @p enderman_spawn_egg{EntityTag:{id:enderman,CustomName:"[{"text":"Warp 1"}]",Health:231,Invulnerable:1b,NoAI:1b,NoGravity:1b,PersistenceRequired:1b,Silent:1b,Tags:["warp1","warp"],Attributes:[{Name:"generic.max_health",Base:231f}]},display:{Name:"[{"text":"Warp 1","italic":false}]"}} 1';
        document.getElementById("line004").textContent = 'ciastko [imp] [unc] [ned] /give @p enderman_spawn_egg{EntityTag:{id:enderman,CustomName:"[{"text":"Warp 1"}]",Health:231,Invulnerable:1b,NoAI:1b,NoGravity:1b,PersistenceRequired:1b,Silent:1b,Tags:["warp2","warp"],Attributes:[{Name:"generic.max_health",Base:231f}]},display:{Name:"[{"text":"Warp 2","italic":false}]"}} 1';
        document.getElementById("line005").textContent = 'baranina [rep] [unc] [alw] execute as @e[tag=warp] positioned as @s run setblock ~ ~-1 ~ minecraft:end_portal_frame destroy';
        document.getElementById("line006").textContent = 'jablko [rep] [unc] [alw] effect give @e[tag=warp] minecraft:invisibility infinite';
        document.getElementById("line007").textContent = 'ciasto [rep] [unc] [alw] scoreboard players add @a inWarp 0';
        document.getElementById("line008").textContent = 'perla kresu [rep] [unc] [alw] execute as @e[tag=warp] positioned as @s run scoreboard players add @e[type=minecraft:player,distance=..2,dx=2,dy=2,dz=2] inWarp 1';
        document.getElementById("line009").textContent = 'diament [rep] [unc] [alw] execute as @e[tag=warp] positioned as @s run scoreboard players reset @e[type=minecraft:player,distance=2..,dx=2.,dy=2.,dz=2.] inWarp';
        document.getElementById("line010").textContent = 'szlam 1 [rep] [unc] [alw] execute as @e[tag=warp2] positioned as @s run tag @e[type=minecraft:player,distance=..2,dx=2,dy=2,dz=2,scores={inWarp=20..}] add toWarp1';
        document.getElementById("line011").textContent = 'szlam 2 [chain] [unc] [alw] /execute as @e[tag=toWarp1] run scoreboard players reset @s';
        document.getElementById("line012").textContent = 'szlam 3 [chain] [unc] [alw] /tp @a[tag=toWarp1] @e[tag=warp1, limit=1, sort=nearest]';
        document.getElementById("line013").textContent = 'szlam 4 [chain] [unc] [alw] tag @a[tag=toWarp1] remove toWarp1';
        document.getElementById("line014").textContent = 'glina 1 [rep] [unc] [alw] execute as @e[tag=warp1] positioned as @s run tag @e[type=minecraft:player,distance=..2,dx=2,dy=2,dz=2,scores={inWarp=20..}] add toWarp2';
        document.getElementById("line015").textContent = 'glina 2 [chain] [unc] [alw] /execute as @e[tag=toWarp2] run scoreboard players reset @s';
        document.getElementById("line016").textContent = 'glina 3 [chain] [unc] [alw] /tp @a[tag=toWarp2] @e[tag=warp2, limit=1, sort=nearest]';
        document.getElementById("line017").textContent = 'glina 4 [chain] [unc] [alw] tag @a[tag=toWarp2] remove toWarp2';
    }
}