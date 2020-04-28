let itemClasses = [
  {
    name: "AP",
    boots: ["3020"],
    meleeItems: [],
    jgItems: ["1402","1414"],
    spItems: ["3853"],
    manaItems: ["3003"],
    apItems: [],
    healItems: [],
    mainItems: ["3027","3041","3089","3100","3157","3285","3907"]
  },
  {
    name: "AS",
    boots: ["3006",],
    meleeItems: [],
    rangerItems: ["3085"],
    jgItems: ["1416","1419"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3046","3078","3087","3087","3091","3094","3095","3115","3124","3153","3181"]
  },
  {
    name: "Crit",
    boots: ["3006","3009","3158","3117"],
    meleeItems: [],
    rangerItems: ["3085"],
    jgItems: ["1400","1412"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3031","3046","3087","3094","3095","3508"],
  },
  {
    name: "FS",
    boots: ["3111","3117"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3853","3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: ["3174","3504"],
    mainItems: ["2065","3050","3107","3109","3190","3222","3905"],
  },
  {
    name: "Hb",
    boots: ["3006","3009","3020"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1400","1402","1412","1414"],
    spItems: ["3853","3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3025","3089","3100","3115","3124","3146","3153","3157","3812"],
  },
  {
    name: "HP",
    boots: ["3047","3111"],
    meleeItems: ["3748"],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3860"],
    manaItems: [],
    apItems: ["3027"],
    healItems: [],
    mainItems: ["3001","3022","3026","3027","3053","3065","3071","3078","3083","3143","3193","3194","3742"],
  },
  {
    name: "HPAP",
    boots: ["3047","3111"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3853","3860"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3001","3022","3027","3030","3083","3102","3116","3151","3152","3157","3165"],
  },
  {
    name: "LS",
    boots: ["3006"],
    meleeItems: ["3074"],
    rangerItems: [],
    jgItems: ["1400","1412","1416","1419"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: ["3146"],
    healItems: [],
    mainItems: ["3065","3072","3139","3153","3156","3181","3812"],
  },
  {
    name: "Lt",
    boots: ["3006","3009","3117","3158"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1400","1412"],
    spItems: ["3860","3864"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3033","3071","3036","3124","3142","3147","3179","3181","3814"],
  },
  {
    name: "Mana",
    boots: ["3009","3020"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1402","1414"],
    spItems: ["3853","3860"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3003","3004","3025","3027","3030","3100","3110","3285"],
  },
  {
    name: "MP",
    boots: ["3020"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1402","1414"],
    spItems: ["3853"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3001","3020","3041","3089","3124","3135","3165"],
  },
  {
    name: "MS",
    boots: ["3009","3117"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1400","1401","1402","1416"],
    spItems: ["3860","3864","3853"],
    manaItems: [],
    apItems: ["3905","3907"],
    healItems: [],
    mainItems: ["2065","3078","3139","3142","3800"],
  },
  {
    name: "OH",
    boots: ["3006"],
    meleeItems: ["3074","3748"],
    rangerItems: ["3085"],
    jgItems: ["1416","1419"],
    spItems: ["3853","3864"],
    manaItems: ["3004"],
    apItems: ["3115"],
    healItems: [],
    mainItems: ["3022","3033","3071","3091","3115","3124","3153"],
  },
  {
    name: "Res",
    boots: ["3047"],
    meleeItems: [],
    rangerItems: [],
    jgItems: ["1401","1413"],
    spItems: ["3860"],
    manaItems: [],
    apItems: [],
    healItems: [],
    mainItems: ["3025","3065","3068","3075","3110","3143","3190","3193","3194","3742","3800"],
  }];
console.log(itemClasses[3].boots);
console.log("images/items/"+itemClasses[0].boots[0]+".png");
randomize();
function randomize() {
  const jungler = true;
  const support = false;
  const buildNumber = getRandomBuild("Aatrox");
  console.log(buildNumber);
  const allPossibleItems = buildAllPossibleItemsList(buildNumber,true, true, false, true, false);
  let remainingItems = 6;
  if (jungler) {
    document.getElementById("item1").src = "images/items/"+itemClasses[buildNumber].jgItems[Math.floor(Math.random() * (itemClasses[buildNumber].jgItems.length-1))]+".png";
    remainingItems--;
    document.getElementById("item"+(6-remainingItems+1).toString()).src = "images/items/"+itemClasses[buildNumber].boots[Math.floor(Math.random() * (itemClasses[buildNumber].boots.length-1))]+".png";
  }
  if (support) {
    document.getElementById("item"+ (6-remainingItems+1).toString()).src = "images/items/"+itemClasses[buildNumber].spItems[Math.floor(Math.random() * (itemClasses[buildNumber].spItems.length-1))]+".png";
    remainingItems--;
    document.getElementById("item"+(6-remainingItems+1).toString()).src = "images/items/"+itemClasses[buildNumber].boots[Math.floor(Math.random() * (itemClasses[buildNumber].boots.length-1))]+".png";
  }
  const mainItems = randomizeRestOfTheItems(allPossibleItems,(remainingItems-1));
  let i = 0;
  let mainItemIndex = 0;
  console.log(mainItems);
  while (remainingItems > 0) {
    if ((!jungler || !support)&&i === 0) {
      remainingItems--;
    }
    document.getElementById("item"+(6-remainingItems+1).toString()).src = "images/items/"+mainItems[mainItemIndex]+".png";
    remainingItems--;
    i++;
    if(i === 1 && !jungler && !support) {
      console.log("not support or jg");
      document.getElementById("item"+(6-remainingItems+1).toString()).src = "images/items/"+itemClasses[buildNumber].boots[Math.floor(Math.random() * (itemClasses[buildNumber].boots.length-1))]+".png";
      i++;
      remainingItems--;
    }
    mainItemIndex++;
  }

}
function randomizeRestOfTheItems(allPossibleItems,numberOfItems) {
  {
    let pickedItems = [];
    for(let i = 0; i < numberOfItems; i++) {
      const randomItemID = Math.floor(Math.random() * (allPossibleItems.length - 1));
      pickedItems.push(allPossibleItems[randomItemID]);
      allPossibleItems.splice(randomItemID, 1);
    }
    return pickedItems;
  }
}
function getRandomBuild(champion) {
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
  return Math.floor(Math.random() * (possibleBuilds.length-1));
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

