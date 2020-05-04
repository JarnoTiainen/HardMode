
document.documentElement.scrollTop = 0;


let itemSetForJSON = [];
let itemClasses = [
  {
    name: 'Wannabe Mage',
    boots: ['3020'],
    meleeItems: [],
    jgItems: ['1402', '1414'],
    spItems: ['3853'],
    manaItems: ['3003'],
    apItems: [],
    healItems: [],
    mainItems: ['3027', '3041', '3089', '3100', '3157', '3285', '3907'],
    keyStones: [5, 6, 7, 9, 10, 15],
  },
  {
    name: 'Fast Hands',
    boots: ['3006'],
    meleeItems: [],
    rangerItems: ['3085'],
    jgItems: ['1416', '1419'],
    spItems: ['3860', '3864'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: [
      '3046',
      '3078',
      '3087',
      '3091',
      '3094',
      '3095',
      '3115',
      '3124',
      '3153',
      '3181'],
    keyStones: [2, 8],
  },
  {
    name: 'All Luck',
    boots: ['3006', '3009', '3158', '3117'],
    meleeItems: [],
    rangerItems: ['3085'],
    jgItems: ['1400', '1412'],
    spItems: ['3860', '3864'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ['3031', '3046', '3087', '3094', '3095', '3508'],
    keyStones: [1, 2, 3, 4, 8],
  },
  {
    name: 'Gamer Girl',
    boots: ['3111', '3117'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1401', '1413'],
    spItems: ['3853', '3860', '3864'],
    manaItems: [],
    apItems: [],
    healItems: ['3174', '3504'],
    mainItems: ['2065', '3050', '3107', '3109', '3190', '3222', '3905'],
    keyStones: [9, 15, 16, 17],
  },
  {
    name: 'Unsure',
    boots: ['3006', '3009', '3020'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1400', '1402', '1412', '1414'],
    spItems: ['3853', '3860', '3864'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: [
      '3025',
      '3089',
      '3100',
      '3115',
      '3124',
      '3146',
      '3153',
      '3157',
      '3812'],
    keyStones: [1, 3, 4, 5, 7, 9, 11, 12],
  },
  {
    name: 'Fat',
    boots: ['3047', '3111'],
    meleeItems: ['3748'],
    rangerItems: [],
    jgItems: ['1401', '1413'],
    spItems: ['3860'],
    manaItems: [],
    apItems: ['3027'],
    healItems: [],
    mainItems: [
      '3001',
      '3022',
      '3026',
      '3027',
      '3053',
      '3065',
      '3071',
      '3078',
      '3083',
      '3143',
      '3193',
      '3194',
      '3742'],
    keyStones: [12],
  },
  {
    name: 'Fat Mage',
    boots: ['3047', '3111'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1401', '1413'],
    spItems: ['3853', '3860'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: [
      '3001',
      '3022',
      '3027',
      '3030',
      '3083',
      '3102',
      '3116',
      '3151',
      '3152',
      '3157',
      '3165'],
    keyStones: [5, 9, 11, 12, 15],
  },
  {
    name: 'S U C C',
    boots: ['3006'],
    meleeItems: ['3074'],
    rangerItems: [],
    jgItems: ['1400', '1412', '1416', '1419'],
    spItems: ['3860', '3864'],
    manaItems: [],
    apItems: ['3146'],
    healItems: [],
    mainItems: ['3065', '3072', '3139', '3153', '3156', '3181', '3812'],
    keyStones: [3],
  },
  {
    name: 'Pepega',
    boots: ['3006', '3009', '3117', '3158'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1400', '1412'],
    spItems: ['3860', '3864'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: [
      '3033',
      '3071',
      '3036',
      '3124',
      '3142',
      '3147',
      '3179',
      '3181',
      '3814'],
    keyStones: [6, 7, 8],
  },
  {
    name: 'Worthless',
    boots: ['3009', '3020'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1402', '1414'],
    spItems: ['3853', '3860'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ['3003', '3004', '3025', '3027', '3030', '3100', '3110', '3285'],
    keyStones: [4, 10, 5, 11, 15],
  },
  {
    name: 'Mobafire Mage',
    boots: ['3020'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1402', '1414'],
    spItems: ['3853'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ['3001', '3041', '3089', '3124', '3135', '3165'],
    keyStones: [5, 6, 7],
  },
  {
    name: 'Fast',
    boots: ['3009', '3117'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1400', '1401', '1402', '1416'],
    spItems: ['3860', '3864', '3853'],
    manaItems: [],
    apItems: ['3905', '3907'],
    healItems: [],
    mainItems: ['2065', '3078', '3139', '3142', '3800'],
    keyStones: [6],
  },
  {
    name: 'Stonks',
    boots: ['3006'],
    meleeItems: ['3074', '3748'],
    rangerItems: ['3085'],
    jgItems: ['1416', '1419'],
    spItems: ['3853', '3864'],
    manaItems: ['3004'],
    apItems: ['3115'],
    healItems: [],
    mainItems: ['3022', '3033', '3071', '3091', '3115', '3124', '3153'],
    keyStones: [2, 8, 17],
  },
  {
    name: 'MeatBall',
    boots: ['3047'],
    meleeItems: [],
    rangerItems: [],
    jgItems: ['1401', '1413'],
    spItems: ['3860'],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: [
      '3025',
      '3065',
      '3068',
      '3075',
      '3110',
      '3143',
      '3190',
      '3193',
      '3194',
      '3742',
      '3800'],
    keyStones: [4, 11, 12, 16, 17],
  }];

printChampionIcons();
getNewSoloRandomBuild();
getNewTeamBuilds();

let solo = true;
let team = false;

const copyBuildButton = document.getElementById('buildCopyButton');
copyBuildButton.onclick = function() {
  let copyText = document.getElementById('buildInput');
  copyText.select();
  document.execCommand('copy');
  alert('Build copied to clipboard.');
};
document.getElementById('jungleInput').addEventListener('click', function() {
  console.log(soloRolesAllEmptyCheck());
  if (soloRolesAllEmptyCheck()) {
    console.log('it was true');
    document.getElementById('jungleInput').checked = false;
  }
});
document.getElementById('topInput').addEventListener('click', function() {
  console.log(soloRolesAllEmptyCheck());
  if (soloRolesAllEmptyCheck()) {
    console.log('it was true');
    document.getElementById('topInput').checked = false;
  }
});
document.getElementById('botInput').addEventListener('click', function() {
  console.log(soloRolesAllEmptyCheck());
  if (soloRolesAllEmptyCheck()) {
    console.log('it was true');
    document.getElementById('botInput').checked = false;
  }
});
document.getElementById('midInput').addEventListener('click', function() {
  console.log(soloRolesAllEmptyCheck());
  if (soloRolesAllEmptyCheck()) {
    console.log('it was true');
    document.getElementById('midInput').checked = false;
  }
});
document.getElementById('supportInput').addEventListener('click', function() {
  console.log(soloRolesAllEmptyCheck());
  if (soloRolesAllEmptyCheck()) {
    console.log('it was true');
    document.getElementById('supportInput').checked = false;
  }
});
for (let i = 1; i < 6; i++) {
  document.getElementById(
      'build' + i.toString() + 'CopyButton').onclick = function() {
    let copyText = document.getElementById('build' + i.toString() + 'Input');
    copyText.select();
    document.execCommand('copy');
    alert('Build copied to clipboard.');
  };
}
document.getElementById('soloTab').addEventListener('click', function() {
  solo = true;
  team = false;
});
document.getElementById('teamTab').addEventListener('click', function() {
  team = true;
  solo = false;
});
document.getElementById('goButton').addEventListener('click', function() {
  if (solo === true) {
    itemSetForJSON = [];
    getNewSoloRandomBuild();
    formJSONforItemSet();
  }
  if (team === true) {
    getNewTeamBuilds();

  }

});
async function getNewTeamBuilds() {
  for (let i = 0; i < 5; i++) {
    itemSetForJSON = [];
    const buildNumber = await getRandomBuild('Aatrox');
    const allPossibleItems = buildAllPossibleItemsList(buildNumber, true, true,
        false, true, false);
    let remainingItems = 6;
    const boots = itemClasses[buildNumber].boots[Math.floor(
        Math.random() * (itemClasses[buildNumber].boots.length - 1))];
    const jungleItem = itemClasses[buildNumber].jgItems[Math.floor(
        Math.random() * (itemClasses[buildNumber].jgItems.length - 1))];
    const supportItem = itemClasses[buildNumber].spItems[Math.floor(
        Math.random() * (itemClasses[buildNumber].spItems.length - 1))];
    if (i === 1) {
      remainingItems--;
      itemSetForJSON.push(jungleItem);
      itemSetForJSON.push(boots);
    } else if (i === 4) {
      itemSetForJSON.push(supportItem);
    }
    setTeamSummonerSpells(i, buildNumber);
    randomizeRestOfTheItems(allPossibleItems, (remainingItems - 1), boots);
    printSelectedItemsForTeam(i);
    const keyStone = randomizeKeyStone(itemClasses[buildNumber].keyStones);
    const runeList = buildRunes(keyStone);
    printRunesForTeam(i, runeList[0], runeList[1], runeList[2], runeList[3],
        runeList[4], runeList[5]);
    document.getElementById('build' + (i + 1).toString() +
        'Name').innerHTML = itemClasses[buildNumber].name + ' Jhin';
    const itemSet = formJSONforItemSet();
    document.getElementById(
        'build' + (i + 1).toString() + 'Input').value = JSON.stringify(itemSet);
  }

}
function setTeamSummonerSpells(roleNumber, buildNumber) {
  if (roleNumber === 0) {
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '2').src = 'images/spell/summonerTeleport.png';
  }
  if (roleNumber === 1) {
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '2').src = 'images/spell/summonerSmite.png';
  }
  if (roleNumber === 2) {
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '2').src = 'images/spell/summonerIgnite.png';
  }

  if (roleNumber === 3) {
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '2').src = 'images/spell/summonerHeal.png';
  }
  if (roleNumber === 4) {
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '2').src = 'images/spell/summonerIgnite.png';
  }
  if (buildNumber === 11) {
    document.getElementById('teamSummonerSpell' + (roleNumber + 1).toString() +
        '1').src = 'images/spell/summonerGhost.png';
  }

}
async function getNewSoloRandomBuild() {
  const playerChampionPool = ["Aatrox", "Ahri", "VelKoz"];
  const championName = playerChampionPool[Math.floor(Math.random() * playerChampionPool.length)];
  const roleList = soloRoleCheck();
  const possibleRoles = [];
  let jungler = false;
  let support = false;
  let top = false;
  let mid = false;
  let adc = false;
  if (roleList[0] === false) {
    jungler = true;
    possibleRoles.push('jungle');
  }
  if (roleList[1] === false) {
    support = true;
    possibleRoles.push('support');
  }
  if (roleList[2] === false) {
    top = true;
    possibleRoles.push('top');
  }
  if (roleList[3] === false) {
    mid = true;
    possibleRoles.push('mid');
  }
  if (roleList[4] === false) {
    adc = true;
    possibleRoles.push('bot');
  }
  const selectedRole = possibleRoles[Math.floor(
      Math.random() * possibleRoles.length)];
  const buildNumber = await getRandomBuild(championName);
  document.getElementById("buildSelectedChampion").src = "images/champion/"+championName+".png";
  console.log(buildNumber);
  console.log(itemClasses[buildNumber]);

  const allPossibleItems = buildAllPossibleItemsList
  (
      buildNumber,
      true,
      true,
      false,
      true,
      false,
  );
  let remainingItems = 6;
  const boots = itemClasses[buildNumber].boots[Math.floor(
      Math.random() * (itemClasses[buildNumber].boots.length - 1))];
  const jungleItem = itemClasses[buildNumber].jgItems[Math.floor(
      Math.random() * (itemClasses[buildNumber].jgItems.length - 1))];
  const supportItem = itemClasses[buildNumber].spItems[Math.floor(
      Math.random() * (itemClasses[buildNumber].spItems.length - 1))];
  if (selectedRole === 'jungle') {
    remainingItems--;
    itemSetForJSON.push(jungleItem);
    itemSetForJSON.push(boots);
  } else if (selectedRole === 'support') {
    itemSetForJSON.push(supportItem);
  }
  document.getElementById('buildRole').src = 'images/graphics/' + selectedRole +
      '.png';
  randomizeRestOfTheItems(allPossibleItems, (remainingItems - 1), boots);
  printSelectedItems();
  const keyStone = randomizeKeyStone(itemClasses[buildNumber].keyStones);
  const runeList = buildRunes(keyStone);
  printRunes(runeList[0], runeList[1], runeList[2], runeList[3], runeList[4],
      runeList[5]);
  document.getElementById(
      'buildName').innerHTML = itemClasses[buildNumber].name +" "+ championName;
  const itemSet = formJSONforItemSet();
  document.getElementById('buildInput').value = JSON.stringify(itemSet);
}
function randomizeKeyStone(possibleKeyStones) {
  return possibleKeyStones[Math.floor(
      Math.random() * possibleKeyStones.length)];
}
function randomizeRestOfTheItems(allPossibleItems, numberOfItems, boots) {
  {
    for (let i = 0; i < numberOfItems; i++) {
      const randomItemID = Math.floor(
          Math.random() * (allPossibleItems.length - 1));
      if (numberOfItems === 5 && i === 1) {
        itemSetForJSON.push(boots);
      }
      itemSetForJSON.push(allPossibleItems[randomItemID]);
      allPossibleItems.splice(randomItemID, 1);
    }
  }
}
function printSelectedItems() {
  for (let i = 0; i < 6; i++) {
    document.getElementById('item' + (i + 1).toString()).src = 'images/items/' +
        itemSetForJSON[i] + '.png';
  }

}
function printSelectedItemsForTeam(roleNumber) {
  for (let i = 0; i < 6; i++) {
    document.getElementById('item' + (roleNumber + 1).toString() +
        (i + 1).toString()).src = 'images/items/' + itemSetForJSON[i] + '.png';
  }

}
async function printChampionIcons() {
  const res = await fetch('/api');
  const data = await res.json();
  const championList = [];
  let index = 0;
  for (item in data) {
    championList.push(data[index].champion);
    index++;
  }
  championList.sort();
  for(let i = 0; i < championList.length; i++) {
    const toolTip = document.getElementsByClassName("champion-tooltip");
    const championIcon = document.getElementsByClassName("champion-img");

    for(let i = 0; i < toolTip.length; i++){
      toolTip[i].innerText=championList[i];
      championIcon[i].src = "images/champion/"+championList[i]+".png";
    }
  }
}
async function getRandomBuild(championName) {
  const data = {
    champion: "Aatrox"
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/champ', options);
  const champion = await response.json();
  let possibleBuilds = [];
  if (champion[0].AP === 1) {
    possibleBuilds.push(0);
  }
  if (champion[0].AS === 1) {
    possibleBuilds.push(1);
  }
  if (champion[0].Crit === 1) {
    possibleBuilds.push(2);
  }
  if (champion[0].FS === 1) {
    possibleBuilds.push(3);
  }
  if (champion[0].Hb === 1) {
    possibleBuilds.push(4);
  }
  if (champion[0].HP === 1) {
    possibleBuilds.push(5);
  }
  if (champion[0].HPAP === 1) {
    possibleBuilds.push(6);
  }
  if (champion[0].LS === 1) {
    possibleBuilds.push(7);
  }
  if (champion[0].Lt === 1) {
    possibleBuilds.push(8);
  }
  if (champion[0].Mana === 1) {
    possibleBuilds.push(9);
  }
  if (champion[0].MP === 1) {
    possibleBuilds.push(10);
  }
  if (champion[0].MS === 1) {
    possibleBuilds.push(11);
  }
  if (champion[0].OH === 1) {
    possibleBuilds.push(12);
  }
  if (champion[0].Res === 1) {
    possibleBuilds.push(13);
  }
  console.log(possibleBuilds);
  return possibleBuilds[Math.floor((Math.random() * (possibleBuilds.length)))];
}

function buildAllPossibleItemsList(buildSetNumber, isMana, isMelee, isRanged, isAp, isHealer) {
  let allPossibleItems = [];
  let combiner = [];
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
  let runeList = [];
  let mainRune = 0;
  if (keyStoneNumber <= 4) {
    mainRune = 1;
  } else if (keyStoneNumber <= 8) {
    mainRune = 2;
  } else if (keyStoneNumber <= 11) {
    mainRune = 3;
  } else if (keyStoneNumber <= 14) {
    mainRune = 4;
  } else if (keyStoneNumber <= 17) {
    mainRune = 5;
  }
  const secondaryRunesType = getSecondaryRunesType(mainRune);
  const mainLowerRunes = getRandomNumbersForRunes(3);
  const secondaryRunes = getRandomNumbersForRunes(2);
  const statBonuses = getRandomNumbersForRunes(3);
  runeList.push(mainRune, mainLowerRunes, secondaryRunesType, secondaryRunes,
      statBonuses, keyStoneNumber);
  return runeList;
}

function getRandomNumbersForRunes(numberOfNumbers) {
  const listOfNumbers = [];
  for (let i = 0; i < numberOfNumbers; i++) {
    listOfNumbers.push((Math.floor(Math.random() * 3)) + 1);
  }
  return listOfNumbers;
}

function getSecondaryRunesType(mainRune) {
  let secondaryRunesType;
  let done = false;
  while (done === false) {
    secondaryRunesType = Math.floor((Math.random() * 5) + 1);
    if (secondaryRunesType !== mainRune) {
      done = true;
      return secondaryRunesType;
    }
  }
}

function printRunes(
    mainRune, mainLowerRunes, secondaryRuneType, secondaryRunes, statBonuses,
    keyStoneNumber) {
  document.getElementById(
      'buildRuneKeystoneImage').src = 'images/runes/keyStone' +
      keyStoneNumber.toString() + '.png';
  document.getElementById(
      'buildRuneFirstMainRuneImage').src = 'images/runes/rune' +
      mainRune.toString() + '1' + mainLowerRunes[0].toString() + '.png';
  document.getElementById(
      'buildRuneSecondMainRuneImage').src = 'images/runes/rune' +
      mainRune.toString() + '2' + mainLowerRunes[1].toString() + '.png';
  document.getElementById(
      'buildRuneThirdMainRuneImage').src = 'images/runes/rune' +
      mainRune.toString() + '3' + mainLowerRunes[2].toString() + '.png';
  document.getElementById(
      'buildRuneFirstSecondaryRuneImage').src = 'images/runes/rune' +
      secondaryRuneType.toString() + '1' + secondaryRunes[0].toString() +
      '.png';
  document.getElementById(
      'buildRuneSecondSecondaryRuneImage').src = 'images/runes/rune' +
      secondaryRuneType.toString() + '2' + secondaryRunes[1].toString() +
      '.png';
  document.getElementById('buildRuneFirstStatBuff').src = 'images/runes/rune6' +
      '1' + statBonuses[0].toString() + '.png';
  document.getElementById(
      'buildRuneSecondStatBuff').src = 'images/runes/rune6' + '2' +
      statBonuses[1].toString() + '.png';
  document.getElementById('buildRuneThirdStatBuff').src = 'images/runes/rune6' +
      '3' + statBonuses[2].toString() + '.png';
}

function printRunesForTeam(
    roleNumber, mainRune, mainLowerRunes, secondaryRuneType, secondaryRunes,
    statBonuses, keyStoneNumber) {
  document.getElementById('teamKeystone' +
      (roleNumber + 1).toString()).src = 'images/runes/keyStone' +
      keyStoneNumber.toString() + '.png';
  document.getElementById('teamMainRune' + (roleNumber + 1).toString() +
      '1').src = 'images/runes/rune' + mainRune.toString() + '1' +
      mainLowerRunes[0].toString() + '.png';
  document.getElementById('teamMainRune' + (roleNumber + 1).toString() +
      '2').src = 'images/runes/rune' + mainRune.toString() + '2' +
      mainLowerRunes[1].toString() + '.png';
  document.getElementById('teamMainRune' + (roleNumber + 1).toString() +
      '1').src = 'images/runes/rune' + mainRune.toString() + '3' +
      mainLowerRunes[2].toString() + '.png';
  document.getElementById('teamSecondaryRune' + (roleNumber + 1).toString() +
      '1').src = 'images/runes/rune' + secondaryRuneType.toString() + '1' +
      secondaryRunes[0].toString() + '.png';
  document.getElementById('teamSecondaryRune' + (roleNumber + 1).toString() +
      '2').src = 'images/runes/rune' + secondaryRuneType.toString() + '2' +
      secondaryRunes[1].toString() + '.png';
  document.getElementById('teamStatBuff' + (roleNumber + 1).toString() +
      '1').src = 'images/runes/rune6' + '1' + statBonuses[0].toString() +
      '.png';
  document.getElementById('teamStatBuff' + (roleNumber + 1).toString() +
      '2').src = 'images/runes/rune6' + '2' + statBonuses[1].toString() +
      '.png';
  document.getElementById('teamStatBuff' + (roleNumber + 1).toString() +
      '3').src = 'images/runes/rune6' + '3' + statBonuses[2].toString() +
      '.png';
}

function formJSONforItemSet() {
  const itemSets = [
    {
      title: 'HARDMODE',
      type: 'custom',
      map: 'SR',
      mode: 'any',
      sortrank: 1,
      associatedMaps: [11],
      associatedChampions: [],
      blocks: [
        {
          type: '',
          items: [],
        },
      ],
    }];
  for (let i = 0; i < 6; i++) {
    itemSets[0].blocks[0].items.push({id: itemSetForJSON[i], count: 1});
  }
  return itemSets[0];
}

function printSpellIcon(championName) {

  let db = new sqlite3.Database('./hardmode.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to HardMode SQLite database.');
  });
}

function soloRoleCheck() {
  const roleList = [];
  roleList.push(document.getElementById('jungleInput').checked);
  roleList.push(document.getElementById('supportInput').checked);
  roleList.push(document.getElementById('topInput').checked);
  roleList.push(document.getElementById('midInput').checked);
  roleList.push(document.getElementById('botInput').checked);
  return roleList;
}

function soloRolesAllEmptyCheck() {
  const roleList = soloRoleCheck();
  console.log(roleList);
  for (let i = 0; i < 5; i++) {
    if (roleList[i] === false) {
      return false;
    }
  }
  return true;
}

//Rainer section begins

/*===================== Page Top Button ===========================*/

let pageTopButton = document.getElementById('pageTopButton');
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    pageTopButton.style.display = 'block';
  } else {
    pageTopButton.style.display = 'none';
  }
}

function pageTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*================================ Login Popups ================================*/

// Open login popups

document.getElementById('login').addEventListener('click', function() {
  loginPopupFunction();
});
document.getElementById('register').addEventListener('click', function() {
  registerPopupFunction();
});

function loginPopupFunction() {
  document.querySelector('.login-popup').style.display = 'flex';
}

function registerPopupFunction() {
  document.querySelector('.register-popup').style.display = 'flex';
}

//Close login popups

document.getElementById('loginClose').addEventListener('click', function() {
  closeLoginPopupFunction();
});
document.getElementById('registerClose').addEventListener('click', function() {
  closeRegisterPopupFunction();
});

function closeLoginPopupFunction() {
  document.querySelector('.login-popup').style.display = 'none';
}

function closeRegisterPopupFunction() {
  document.querySelector('.register-popup').style.display = 'none';
}

/*========================= Build Tabs =============================*/

let teamTabClicked = false;

document.getElementById('soloTab').click();

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tab-content');

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tab-links');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';

  document.getElementById("addBuildDiv1").className = "flex-column";
  document.getElementById("addBuildDiv2").className = "flex-column";
  document.getElementById("addBuildDiv3").className = "flex-column";
  document.getElementById("addBuildDiv4").className = "flex-column";
  document.getElementById("addBuildDiv5").className = "flex-column";

  if (tabName === "teamBox") {
    teamTabClicked = true;
  }
  if (tabName === "buildBox" && teamTabClicked === true) {
    setBuild1Idle();
    setBuild2Idle();
    setBuild3Idle();
    setBuild4Idle();
    setBuild5Idle();
  }
}

document.getElementById('goButton').addEventListener('click', function() {
  buildScrollFunction();
});
function buildScrollFunction() {
  document.getElementById('goDiv').scrollIntoView();
}

/*============================== Team Builds ====================================*/

let build1Visible = false;
let build2Visible = false;
let build3Visible = false;
let build4Visible = false;
let build5Visible = false;

function setBuild1Idle() {
  if(teamTabClicked === true && build1Visible === true) {
    document.getElementById("build1").setAttribute("class", "team-build-idle")
  }
}
function setBuild2Idle() {
  if(teamTabClicked === true && build2Visible === true) {
    document.getElementById("build2").setAttribute("class", "team-build-idle")
  }
}
function setBuild3Idle() {
  if(teamTabClicked === true && build3Visible === true) {
    document.getElementById("build3").setAttribute("class", "team-build-idle")
  }
}
function setBuild4Idle() {
  if(teamTabClicked === true && build4Visible === true) {
    document.getElementById("build4").setAttribute("class", "team-build-idle")
  }
}
function setBuild5Idle() {
  if(teamTabClicked === true && build1Visible === true) {
    document.getElementById("build5").setAttribute("class", "team-build-idle")
  }
}


// Build 1

document.getElementById('addBuild1').addEventListener('click', function() {
  addBuild1();
});

function addBuild1() {
  document.querySelector('#addBuildDiv1').style.display = 'none';
  let build1 = document.querySelector('#build1');
  build1.style.display = 'flex';
  build1.setAttribute('class', 'team-build slide-in');
  build1Visible = true;
}

document.getElementById('closeBuild1').addEventListener('click', function() {
  closeBuild1();
});

function closeBuild1() {
  let addBuild1 = document.querySelector('#addBuildDiv1');
  addBuild1.style.display = 'flex';
  addBuild1.setAttribute('class', 'flex-column fade-in');

  let build1 = document.querySelector('#build1');
  build1.setAttribute('class', 'team-build slide-out');
  build1Visible = false;
  setTimeout(function() {
    build1.style.display = 'none';
    build1.setAttribute("class", "team-build");
  }, 500);
}

// Build 2

document.getElementById('addBuild2').addEventListener('click', function() {
  addBuild2();
});

function addBuild2() {
  document.querySelector('#addBuildDiv2').style.display = 'none';
  let build2 = document.querySelector('#build2');
  build2.style.display = 'flex';
  build2.setAttribute('class', 'team-build slide-in');
  build2Visible = true;
}

document.getElementById('closeBuild2').addEventListener('click', function() {
  closeBuild2();
});

function closeBuild2() {
  let addBuild2 = document.querySelector('#addBuildDiv2');
  addBuild2.style.display = 'flex';
  addBuild2.setAttribute('class', 'flex-column fade-in');

  let build2 = document.querySelector('#build2');
  build2.setAttribute('class', 'team-build slide-out');
  build2Visible = false;
  setTimeout(function() {
    build2.style.display = 'none';
    build2.setAttribute("class", "team-build");
  }, 500);
}

// Build 3

document.getElementById('addBuild3').addEventListener('click', function() {
  addBuild3();
});

function addBuild3() {
  document.querySelector('#addBuildDiv3').style.display = 'none';
  let build3 = document.querySelector('#build3');
  build3.style.display = 'flex';
  build3.setAttribute('class', 'team-build slide-in');
  build3Visible = true;
}

document.getElementById('closeBuild3').addEventListener('click', function() {
  closeBuild3();
});

function closeBuild3() {
  let addBuild3 = document.querySelector('#addBuildDiv3');
  addBuild3.style.display = 'flex';
  addBuild3.setAttribute('class', 'flex-column fade-in');

  let build3 = document.querySelector('#build3');
  build3.setAttribute('class', 'team-build slide-out');
  build3Visible = false;
  setTimeout(function() {
    build3.style.display = 'none';
    build3.setAttribute("class", "team-build");
  }, 500);
}

// Build 4

document.getElementById('addBuild4').addEventListener('click', function() {
  addBuild4();
});

function addBuild4() {
  document.querySelector('#addBuildDiv4').style.display = 'none';
  let build4 = document.querySelector('#build4');
  build4.style.display = 'flex';
  build4.setAttribute('class', 'team-build slide-in');
  build4Visible = true;
}

document.getElementById('closeBuild4').addEventListener('click', function() {
  closeBuild4();
});

function closeBuild4() {
  let addBuild4 = document.querySelector('#addBuildDiv4');
  addBuild4.style.display = 'flex';
  addBuild4.setAttribute('class', 'flex-column fade-in');

  let build4 = document.querySelector('#build4');
  build4.setAttribute('class', 'team-build slide-out');
  build4Visible = false;
  setTimeout(function() {
    build4.style.display = 'none';
    build4.setAttribute("class", "team-build");
  }, 500);
}

// Build 5

document.getElementById('addBuild5').addEventListener('click', function() {
  addBuild5();
});

function addBuild5() {
  document.querySelector('#addBuildDiv5').style.display = 'none';
  let build5 = document.querySelector('#build5');
  build5.style.display = 'flex';
  build5.setAttribute('class', 'team-build slide-in');
  build5Visible = true;
}

document.getElementById('closeBuild5').addEventListener('click', function() {
  closeBuild5();
});

function closeBuild5() {
  let addBuild5 = document.querySelector('#addBuildDiv5');
  addBuild5.style.display = 'flex';
  addBuild5.setAttribute('class', 'flex-column fade-in');

  let build5 = document.querySelector('#build5');
  build5.setAttribute('class', 'team-build slide-out');
  build5Visible = false;
  setTimeout(function() {
    build5.style.display = 'none';
    build5.setAttribute("class", "team-build");
  }, 500);
}

