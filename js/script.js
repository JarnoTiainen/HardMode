var itemSetForJSON = [];
let itemClasses = [
  {
    name: "Wannabe Mage",
    boots: ["3020"],
    meleeItems: [],
    jgItems: ["1402","1414"],
    spItems: ["3853"],
    manaItems: ["3003"],
    apItems: [],
    healItems: [],
    mainItems: ["3027","3041","3089","3100","3157","3285","3907"],
    keyStones: [5, 6, 7, 9, 10, 15]
  },
  {
    name: "Fast Hands",
    boots: ["3006",],
    meleeItems: [],
    rangerItems: ["3085"],
    jgItems: ["1416","1419"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3046","3078","3087","3091","3094","3095","3115","3124","3153","3181"],
    keyStones: [2, 8]
  },
  {
    name: "All Luck",
    boots: ["3006","3009","3158","3117"],
    meleeItems: [],
    rangerItems: ["3085"],
    jgItems: ["1400","1412"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3031","3046","3087","3094","3095","3508"],
    keyStones: [1, 2, 3, 4, 8]
  },
  {
    name: "Gamer Girl",
    boots: ["3111","3117"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3853","3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: ["3174","3504"],
    mainItems: ["2065","3050","3107","3109","3190","3222","3905"],
    keyStones: [9, 15, 16, 17]
  },
  {
    name: "Unsure",
    boots: ["3006","3009","3020"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1400","1402","1412","1414"],
    spItems: ["3853","3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3025","3089","3100","3115","3124","3146","3153","3157","3812"],
    keyStones: [1, 3, 4, 5, 7, 9, 11, 12]
  },
  {
    name: "Fat",
    boots: ["3047","3111"],
    meleeItems: ["3748"],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3860"],
    manaItems: [],
    apItems: ["3027"],
    healItems: [],
    mainItems: ["3001","3022","3026","3027","3053","3065","3071","3078","3083","3143","3193","3194","3742"],
    keyStones: [12]
  },
  {
    name: "Fat Mage",
    boots: ["3047","3111"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3853","3860"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3001","3022","3027","3030","3083","3102","3116","3151","3152","3157","3165"],
    keyStones: [5, 9, 11, 12, 15]
  },
  {
    name: "S U C C",
    boots: ["3006"],
    meleeItems: ["3074"],
    rangerItems: [],
    jgItems: ["1400","1412","1416","1419"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: ["3146"],
    healItems: [],
    mainItems: ["3065","3072","3139","3153","3156","3181","3812"],
    keyStones: [3]
  },
  {
    name: "Pepega",
    boots: ["3006","3009","3117","3158"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1400","1412"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3033","3071","3036","3124","3142","3147","3179","3181","3814"],
    keyStones: [6, 7, 8]
  },
  {
    name: "Worthless",
    boots: ["3009","3020"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1402","1414"],
    spItems: ["3853","3860"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3003","3004","3025","3027","3030","3100","3110","3285"],
    keyStones: [4, 10, 5, 11, 15]
  },
  {
    name: "Mobafire Mage",
    boots: ["3020"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1402","1414"],
    spItems: ["3853"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3001","3041","3089","3124","3135","3165"],
    keyStones: [5, 6, 7]
  },
  {
    name: "Fast",
    boots: ["3009","3117"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1400","1401","1402","1416"],
    spItems: ["3860","3864","3853"],
    manaItems: [],
    apItems: ["3905","3907"],
    healItems: [],
    mainItems: ["2065","3078","3139","3142","3800"],
    keyStones: [6]
  },
  {
    name: "Stonks",
    boots: ["3006"],
    meleeItems: ["3074","3748"],
    rangerItems: ["3085"],
    jgItems: ["1416","1419"],
    spItems: ["3853","3864"],
    manaItems: ["3004"],
    apItems: ["3115"],
    healItems: [],
    mainItems: ["3022","3033","3071","3091","3115","3124","3153"],
    keyStones: [2, 8, 17]
  },
  {
    name: "MeatBall",
    boots: ["3047"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3860"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3025","3065","3068","3075","3110","3143","3190","3193","3194","3742","3800"],
    keyStones: [4, 11, 12, 16, 17]
  }];
console.log(itemClasses[3].boots);
console.log("images/items/"+itemClasses[0].boots[0]+".png");
console.log('dbQuery begins');
//dbQuery();
console.log('dbQuery ends');
getNewRandomBuild();
formJSONforItemSet();
document.getElementById("goDiv").addEventListener("click", function() {
  itemSetForJSON = [];
  getNewRandomBuild();
  formJSONforItemSet();
});
function copyText() {

  alert("Copied the text: " + copyText.value);
}

const copyBuildButton = document.getElementById("buildCopyButton");
copyBuildButton.onclick = function() {
  var copyText = document.getElementById("buildInput");
  copyText.select();
  document.execCommand("copy");
  alert("Build copied to clipboard.");

};





function getNewRandomBuild() {
  const jungler = true;
  const support = false;
  const buildNumber = getRandomBuild("Aatrox");
  const allPossibleItems = buildAllPossibleItemsList
  (
      buildNumber,
      true,
      true,
      false,
      true,
      false
  );
  let remainingItems = 6;
  const boots = itemClasses[buildNumber].boots[Math.floor(Math.random() * (itemClasses[buildNumber].boots.length-1))];
  const jungleItem = itemClasses[buildNumber].jgItems[Math.floor(Math.random()*(itemClasses[buildNumber].jgItems.length-1))];
  const supportItem = itemClasses[buildNumber].spItems[Math.floor(Math.random() * (itemClasses[buildNumber].spItems.length-1))];
  if (jungler) {
    remainingItems--;
    itemSetForJSON.push(jungleItem);
    itemSetForJSON.push(boots);
  }
  else if(support) {
    itemSetForJSON.push(supportItem);
  }
  randomizeRestOfTheItems(allPossibleItems,(remainingItems-1),boots);
  console.log(itemSetForJSON);
  printSelectedItems();
  const keyStone = randomizeKeyStone(itemClasses[buildNumber].keyStones);
  buildRunes(keyStone);
  document.getElementById("buildName").innerHTML = itemClasses[buildNumber].name + " Jhin";

}
function randomizeKeyStone(possibleKeyStones) {
  return possibleKeyStones[Math.floor(Math.random() * possibleKeyStones.length)];
}
function randomizeRestOfTheItems(allPossibleItems,numberOfItems,boots) {
  {
    for(let i = 0; i < numberOfItems; i++) {
      const randomItemID = Math.floor(Math.random() * (allPossibleItems.length - 1));
      if (numberOfItems === 5 && i === 1) {
        itemSetForJSON.push(boots);
      }
      itemSetForJSON.push(allPossibleItems[randomItemID]);
      allPossibleItems.splice(randomItemID, 1);
    }
  }
}
function printSelectedItems() {
  for(let i = 0; i < 6; i++) {
    console.log("item"+(i+1).toString()+"   images/items/"+itemSetForJSON[i]+".png");
    document.getElementById("item"+(i+1).toString()).src = "images/items/"+itemSetForJSON[i]+".png"
  }

}
function getRandomBuild(championNumber) {
  let possibleBuilds = [];
  const ap = true;
  const as = true;
  const crit = true;
  const fs = true;
  const hb = true;
  const hp = true;
  const hpap = true;
  const ls = true;
  const lt = true;
  const mana = true;
  const mp = true;
  const ms = true;
  const oh = true;
  const res = true;
  if (ap) {
    possibleBuilds.push(1);
  }if (as) {
    possibleBuilds.push(2);
  }if (crit) {
    possibleBuilds.push(3);
  }if (fs) {
    possibleBuilds.push(4);
  }if (hb) {
    possibleBuilds.push(5);
  }if (hp) {
    possibleBuilds.push(6);
  }if (hpap) {
    possibleBuilds.push(7);
  }if (ls) {
    possibleBuilds.push(8);
  }if (lt) {
    possibleBuilds.push(9);
  }if (mana) {
    possibleBuilds.push(10);
  }if (mp) {
    possibleBuilds.push(11);
  }if (ms) {
    possibleBuilds.push(12);
  }if (oh) {
    possibleBuilds.push(13);
  }if (res) {
    possibleBuilds.push(14);
  }
  console.log(possibleBuilds);
  return Math.floor(Math.random() * (possibleBuilds.length));
}
function buildAllPossibleItemsList(buildSetNumber, isMana, isMelee, isRanged, isAp, isHealer) {
  let allPossibleItems = [];
  let combiner = [];
  console.log(buildSetNumber);
  combiner = itemClasses[buildSetNumber].mainItems;
  if (isMana) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].manaItems);
    combiner = allPossibleItems;
  }
  if (isMelee) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].meleeItems);
    combiner = allPossibleItems;
  }
  if (isRanged) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].rangerItems);
    combiner = allPossibleItems;
  }
  if (isAp) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].apItems);
    combiner = allPossibleItems;
  }
  if (isHealer) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].healItems);
    combiner = allPossibleItems;
  }
  return allPossibleItems;
}
function buildRunes(keyStoneNumber) {
  let mainRune;
  if(keyStoneNumber <= 4) {
    mainRune = 1;
  }
  else if(keyStoneNumber <= 8) {
    mainRune = 2;
  }
  else if(keyStoneNumber <= 11) {
    mainRune = 3;
  }
  else if(keyStoneNumber <= 14) {
    mainRune = 4;
  }
  else if(keyStoneNumber <=17) {
    mainRune = 5;
  }
  const secondaryRunesType = getSecondaryRunesType(mainRune);
  const mainLowerRunes = getRandomNumbersForRunes(3);
  const secondaryRunes = getRandomNumbersForRunes(2);
  const statBonuses = getRandomNumbersForRunes(3);
  printRunes(mainRune, mainLowerRunes, secondaryRunesType, secondaryRunes, statBonuses,keyStoneNumber);
}
function getRandomNumbersForRunes(numberOfNumbers) {
  const listOfNumbers = [];
  for (let i = 0; i < numberOfNumbers; i++) {
    listOfNumbers.push((Math.floor(Math.random() * 3))+1);
  }
return listOfNumbers;
}
function getSecondaryRunesType(mainRune) {
  let secondaryRunesType;
  let done = false;
  while (done === false) {
    secondaryRunesType = Math.floor((Math.random() * 5)+1);
    if (secondaryRunesType !== mainRune) {
      done = true;
      return secondaryRunesType;
    }
  }
}
function printRunes(mainRune, mainLowerRunes, secondaryRuneType, secondaryRunes, statBonuses, keyStoneNumber) {
  console.log(secondaryRunes+"  "+secondaryRuneType);
  document.getElementById("buildRuneKeystoneImage").src = "images/runes/keyStone"+keyStoneNumber.toString()+".png";
  document.getElementById("buildRuneFirstMainRuneImage").src = "images/runes/rune"+mainRune.toString()+"1"+mainLowerRunes[0].toString()+".png";
  document.getElementById("buildRuneSecondMainRuneImage").src = "images/runes/rune"+mainRune.toString()+"2"+mainLowerRunes[1].toString()+".png";
  document.getElementById("buildRuneThirdMainRuneImage").src = "images/runes/rune"+mainRune.toString()+"3"+mainLowerRunes[2].toString()+".png";
  console.log("images/runes/rune"+secondaryRuneType.toString()+"1"+secondaryRunes[0].toString()+".png");
  document.getElementById("buildRuneFirstSecondaryRuneImage").src = "images/runes/rune"+secondaryRuneType.toString()+"1"+secondaryRunes[0].toString()+".png";
  document.getElementById("buildRuneSecondSecondaryRuneImage").src = "images/runes/rune"+secondaryRuneType.toString()+"2"+secondaryRunes[1].toString()+".png";
  document.getElementById("buildRuneFirstStatBuff").src = "images/runes/rune6"+"1"+statBonuses[0].toString()+".png";
  document.getElementById("buildRuneSecondStatBuff").src = "images/runes/rune6"+"2"+statBonuses[1].toString()+".png";
  document.getElementById("buildRuneThirdStatBuff").src = "images/runes/rune6"+"3"+statBonuses[2].toString()+".png";
}
function formJSONforItemSet() {
  console.log(itemSetForJSON);
  const itemSets = [
      {
        title: "HARDMODE",
        type: "custom",
        map: "SR",
        mode: "any",
        sortrank: 1,
        associatedMaps: [11],
      associatedChampions: [
  ],
      blocks: [
    {
      type: "",
      items: [
      ]
    }
  ]
  }];
  for(let i = 0; i < 6; i++) {
    itemSets[0].blocks[0].items.push({id: itemSetForJSON[i], count:1})
  }
  console.log(JSON.stringify(itemSets[0]));
  document.getElementById("buildInput").value = JSON.stringify(itemSets[0]);
  console.log(document.getElementById("buildInput").value);
  console.log();
  return itemSets[0].toString();
}
function printSpellIcons(championName) {

  let db = new sqlite3.Database('./hardmode.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to HardMode SQLite database.');
  });
}

function dbQuery() {
  const sqlite3 = require('sqlite3').verbose();
  console.log('require called');

  let db = new sqlite3.Database('./hardmode.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to HardMode SQLite database.');
  });

  db.serialize(() => {
    db.each(`SELECT username FROM Accounts WHERE login LIKE 'user1'`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.username);
    });
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
}

/*
let directory = [];
directory = /images/;
console.log(directory);


function printChampionIcons() {

  const fileList = ret.split('\n');
  for (let i = 0; i < fileList.length; i++) {
    const fileinfo = fileList[i].split(' ');
    if (fileinfo[0] === '201:') {
      console.log(fileinfo[1] + "<br>");
      console.log('<img src=\"' + directory + fileinfo[1] + '\"/>')
    }
  }
  console.log(fileList);
}

*/

let pageTopButton = document.getElementById("pageTopButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    pageTopButton.style.display = "block";
  } else {
    pageTopButton.style.display = "none";
  }
}
function pageTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



document.getElementById("soloTab").click();

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}















