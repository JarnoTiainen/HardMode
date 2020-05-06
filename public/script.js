const allChampionsList = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","ChoGath","Corki","Darius","Diana","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","KhaZix","Kindred","Kled","KogMaw","LeBlanc","LeeSin","Leona","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","Mordekaiser","Morgana","Mundo","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Renekton","Rengar","Riven","Rumble","Ryze","Sejuani","Senna","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","VelKoz","Vi","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","XinZhao","Yasuo","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"];
let defaultUser =  {"championList":["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","ChoGath","Corki","Darius","Diana","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","KhaZix","Kindred","Kled","KogMaw","LeBlanc","LeeSin","Leona","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","Mordekaiser","Morgana","Mundo","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Renekton","Rengar","Riven","Rumble","Ryze","Sejuani","Senna","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","VelKoz","Vi","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","XinZhao","Yasuo","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"]};
let activeUser = defaultUser;
let username1;
let username2;
let username3;
let username4;
let username5;
let teamTabClicked = false;
let role1 = "undefined";
let role2 = "undefined";
let role3 = "undefined";
let role4 = "undefined";
let role5 = "undefined";
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
let userLoggedIn = false;
let logoutClicked = false;
let dropdownClicked = false;
let bodyClicked = false;
let dropdownVisible = false;
let loginButton = document.querySelector("#login");
let logoutButton = document.querySelector("#logout");
let dropdown = document.querySelector("#profileDropdown");
let profileName = document.querySelector("#profileName");

let availableTeamRoles = [0,1,2,3,4];
let takenChampion1;
let takenChampion2;
let takenChampion3;
let takenChampion4;
let takenChampion5;
let clickable = true;
let allChampionIconsUnselected = false;
printChampionIcons();
getNewSoloRandomBuild();
let solo = true;
let team = false;
document.getElementById('soloTab').click();
const copyBuildButton = document.getElementById('buildCopyButton');
copyBuildButton.onclick = function() {
  let copyText = document.getElementById('buildInput');
  copyText.select();
  document.execCommand('copy');
  alert('Build copied to clipboard.');
};
document.getElementById('jungleInput').addEventListener('click', function() {
  if (soloRolesAllEmptyCheck()) {
    document.getElementById('jungleInput').checked = false;
  }
});
document.getElementById('topInput').addEventListener('click', function() {
  if (soloRolesAllEmptyCheck()) {
    document.getElementById('topInput').checked = false;
  }
});
document.getElementById('botInput').addEventListener('click', function() {
  if (soloRolesAllEmptyCheck()) {
    document.getElementById('botInput').checked = false;
  }
});
document.getElementById('midInput').addEventListener('click', function() {
  if (soloRolesAllEmptyCheck()) {
    document.getElementById('midInput').checked = false;
  }
});
document.getElementById('supportInput').addEventListener('click', function() {
  if (soloRolesAllEmptyCheck()) {
    document.getElementById('supportInput').checked = false;
  }
});
document.getElementById('soloTab').addEventListener('click', function() {
  solo = true;
  team = false;
  document.getElementById("spacer").style.display = "block"
});
document.getElementById('teamTab').addEventListener('click', function() {
  team = true;
  solo = false;
  document.getElementById("spacer").style.display = "none"
});
document.getElementById('goButton').addEventListener('click', async function() {
  buildScrollFunction();
  if (clickable) {
    clickable = false;
    if (solo === true) {
      itemSetForJSON = [];
      await getNewSoloRandomBuild();
      formJSONforItemSet();
    }
    if (team === true) {
      await rerollTeamBuilds();
      console.log(availableTeamRoles);
    }
    clickable = true;
  }

});
document.getElementById("registerPopupButton").addEventListener("click",async function() {
  let passwordOK;
  let userNameOK = false;
  let userInfoOK = false;
  let userNameShort;
  let userNameTaken;
  let passwordShort;
  let name;
  let password;
  name = document.getElementById("registerInput").value;
    console.log(name);
    password = document.getElementById("registerPasswordInput").value;
    console.log(password);
    if  (password.length >= 6) {
      passwordOK = true;
      passwordShort = false;
    }
    else {
      passwordShort = true;
      passwordOK = false;
    }
    if (name.length >= 3) {
      userNameShort = false;
      if (!await checkUsername(name)) {
        console.log("name ok");
        userNameTaken = false;
        userNameOK = true;
      }
      else {
        userNameTaken = true;
        passwordOK = false;
      }
    }
    else {
      userNameTaken = false;
      userNameShort = true;
      passwordOK = false;
    }
    if (passwordOK && userNameOK) {
      userInfoOK = true;
    }
    else {
      let errorString = "";
      if (userNameTaken) {
        errorString += "Username taken.\n";
      }
      if (userNameShort) {
        errorString += "Username too short.\n";
      }
      if (passwordShort) {
        errorString += "Password too short.";
      }
      alert(errorString);
      console.log("Alerting");

    }
    if (userInfoOK) {
      await createNewUser(password, name);
      closeRegisterPopupFunction();
      popupOpen = false;
      bodyClicked = true;
      activeUser = name;
      userLoggedIn = true;
      closeProfileDropdown();
      await unCheckAllOwnedChampions();
      document.getElementById("profileName").innerHTML = name;
    }
});
document.getElementById("loginPopupButton").addEventListener("click", async function() {
  const username = document.getElementById("loginUsernameInput").value;
  const password = document.getElementById("loginPasswordInput").value;
  if (await checkLogin(username, password)) {
    activeUser = username;
    profileName.innerHTML = username;
    closeLoginPopupFunction();
    popupOpen = false;
    bodyClicked = true;
    userLoggedIn = true;
    closeProfileDropdown();
    await unCheckAllOwnedChampions();
  }
  else {
    alert("No account found with login credentials.");
  }

});
document.querySelectorAll(".champion-checkbox").forEach(async item=> {
  item.addEventListener('click', async event => {
    const championCheckboxes = document.querySelectorAll(".champion-checkbox");
    let newChampionList = [];
    let toggledOffChampions = 0;
    for (let i = 0; i < championCheckboxes.length; i++) {
      if (!championCheckboxes[i].checked) {
        newChampionList.push(allChampionsList[i]);
        allChampionIconsUnselected = false;
        document.getElementById("championReset").innerHTML = "Unselect All";
      }
      else {
        toggledOffChampions++
      }
      if (toggledOffChampions === allChampionsList.length) {
        document.getElementById("championReset").innerHTML = "Select All";
        allChampionIconsUnselected = true;
      }
    }
    if (userLoggedIn) {
      await updateChampionList(activeUser,newChampionList);
    }
    else {
      activeUser.championList = newChampionList;
    }
  })
});
document.getElementById("addBuild1").addEventListener("click", async function() {
  await getNewTeamBuilds(0);
});
document.getElementById("addBuild2").addEventListener("click", async function() {
  await getNewTeamBuilds(1);
});
document.getElementById("addBuild3").addEventListener("click", async function() {
  await getNewTeamBuilds(2);
});
document.getElementById("addBuild4").addEventListener("click", async function() {
  await getNewTeamBuilds(3);
});
document.getElementById("addBuild5").addEventListener("click", async function() {
  await getNewTeamBuilds(4);
});
document.getElementById("championInput").addEventListener("input", async function() {
  let text = document.getElementById("championInput").value;
  let matchingChampions = 0;
  let matchingChampionId;
  text = text.toLowerCase();
  console.log(text);
  const championList = document.querySelectorAll(".champion-img");
  for (let i = 0; i < allChampionsList.length; i++) {
    const championImg = championList[i];
    let champion = allChampionsList[i];
    champion = champion.toLowerCase();
    if (text === "") {
      for (let l = 0; l < (allChampionsList.length+1); l++) {
        championList[l].setAttribute("class","champion-img");
      }
    }
    if (champion.includes(text)) {
      championImg.setAttribute("class","champion-img champion-highlight");
      matchingChampions++;
      matchingChampionId = i;
    }
    else {
      championImg.setAttribute("class","champion-img");
    }
  }
  if (matchingChampions === 1) {
    let newChampionList;
    if (userLoggedIn) {
      newChampionList = await getChampionList(activeUser);
    }
    else {
      newChampionList = activeUser.championList;
    }
    if (!newChampionList.includes(allChampionsList[matchingChampionId])) {
      newChampionList.push(allChampionsList[matchingChampionId]);
    }
    console.log(newChampionList);
    const championButtons = document.querySelectorAll(".champion-checkbox");
    championButtons[matchingChampionId].checked = false;
    if (userLoggedIn) {
      await updateChampionList(activeUser,newChampionList);
    }
    else {
      activeUser.championList = newChampionList;
    }
  }
});
document.getElementById("championReset").addEventListener("click", async function() {
  const championButtons = document.querySelectorAll(".champion-checkbox");
  let newChampionList = [];
  if (allChampionIconsUnselected) {
    for (let i = 0; i < championButtons.length; i++) {
      championButtons[i].checked = false;
      allChampionIconsUnselected = false;
      document.getElementById("championReset").innerHTML = "Unselect All";
    }
    newChampionList = allChampionsList;
  }
  else {
    for (let i = 0; i < championButtons.length; i++) {
      championButtons[i].checked = true;
      allChampionIconsUnselected = true;
      document.getElementById("championReset").innerHTML = "Select All";
    }
    newChampionList = [];
  }

  if (userLoggedIn) {
    await updateChampionList(activeUser,newChampionList);
  }
  else {
    activeUser.championList = newChampionList;
  }
  console.log(activeUser.championList);
});
document.getElementById('cornerPiece').addEventListener("click", function() {
  scrollFunction("info")
});
document.getElementById('infoButton').addEventListener("click", function() {
  scrollFunction("info");
});
document.getElementById('champListButton').addEventListener("click", function() {
  scrollFunction("championSearchDiv");
});
document.getElementById('buildButton').addEventListener("click", function() {
  scrollFunction("goDiv");
});
document.getElementById('closeBuild1').addEventListener('click', function() {
  takenChampion1 = "";
  availableTeamRoles.push(role1);
  role1 = "undefined";
  closeBuild1();
});
document.getElementById('closeBuild2').addEventListener('click', function() {
  takenChampion2 = "";
  availableTeamRoles.push(role2);
  role2 = "undefined";
  closeBuild2();
});
document.getElementById('closeBuild3').addEventListener('click', function() {
  takenChampion3 = "";
  availableTeamRoles.push(role3);
  role3 = "undefined";
  closeBuild3();
});
document.getElementById('closeBuild4').addEventListener('click', function() {
  takenChampion4 = "";
  availableTeamRoles.push(role4);
  role4 = "undefined";
  closeBuild4();
});
document.getElementById('closeBuild5').addEventListener('click', function() {
  takenChampion5 = "";
  availableTeamRoles.push(role5);
  role5 = "undefined";
  closeBuild5();
});
document.getElementById("loginPasswordToggle").addEventListener('click', function() {
  togglePassword();
});
document.getElementById("registerPasswordToggle").addEventListener('click', function() {
  togglePassword();
});
document.getElementById("registerConfirmPasswordToggle").addEventListener('click', function() {
  togglePassword();
});
document.getElementById('loginClose').addEventListener('click', function() {
  closeLoginPopupFunction();
});
document.getElementById('registerClose').addEventListener('click', function() {
  closeRegisterPopupFunction();
});
document.getElementById('login').addEventListener('click', function() {
  popupOpen = true;
  loginPopupFunction();
});
document.getElementById('register').addEventListener('click', function() {
  registerPopupFunction();
});
document.querySelector("body").addEventListener("click", function() {
  bodyClicked = true;
  closeProfileDropdown();
});
document.getElementById("profileIcon").addEventListener("click", function() {
  dropdownClicked = true;
  profileDropdown();
});
document.getElementById("profileDropdown").addEventListener("click", function() {
  dropdownClicked = true;
});
document.getElementById("logout").addEventListener("click", async function() {
  bodyClicked = true;
  closeProfileDropdown();
  document.getElementById("profileName").innerHTML = "";
  userLoggedIn = false;
  activeUser = defaultUser;
  console.log(activeUser.championList);
  const championCheckboxes = document.querySelectorAll(".champion-checkbox");
  for (let i= 0; i < allChampionsList.length; i++) {
        championCheckboxes[i].checked = false;
  }
  logoutClicked = true;
  closeProfileDropdown();
});
async function unCheckAllOwnedChampions() {
  const championCheckboxes = document.querySelectorAll(".champion-checkbox");
  const champions = await getChampionList(activeUser);
  document.querySelectorAll(".champion-checkbox").forEach(item => {
    item.checked = true;
  });
  for(let i= 0; i < allChampionsList.length; i++) {
    for(let l = 0; l < champions.length; l++) {
      if (champions[l] === allChampionsList[i]) {
        championCheckboxes[i].checked = false;
      }
    }
  }
}
async function updateChampionList(usernameTry, updatedChampionList) {
  const username = usernameTry;
  const championList = updatedChampionList;
  const data = {
    username,
    championList
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const res = await fetch('/updateChampionList', options);
  const json = await res.json();
}
async function getChampionList(usernameTry) {
  const username = usernameTry;
  const data = {
    username
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const res = await fetch('/championList', options);
  const json = await res.json();
  return json[0].championList;
}
async function checkUsername(usernameTry) {
  const username = usernameTry;
  const data = {
    username
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const res = await fetch('/userCheck', options);
  const json = await res.json();
  return json.length > 0;
}
async function checkLogin(usernameTry, passwordTry) {
  const username = usernameTry;
  const password = passwordTry;
  const data = {
    username,
    password
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const res = await fetch('/loginCheck', options);
  const json = await res.json();
  return json.length > 0;
}
for (let i = 1; i < 6; i++) {
  document.getElementById(
      'build' + i.toString() + 'CopyButton').onclick = function() {
    let copyText = document.getElementById('build' + i.toString() + 'Input');
    copyText.select();
    document.execCommand('copy');
    alert('Build copied to clipboard.');
  };
}
async function createNewUser(userPassword, name) {
  const password = userPassword;
  const username = name;
  let championList = ["Tryndamere","KogMaw","Aphelios","TahmKench","Vayne","Thresh","Riven","Nunu","Corki","Fiddlesticks","Urgot","Kalista","ChoGath","Gnar","Kindred","Kayle","Lucian","Annie","KhaZix","Vladimir","Teemo","Morgana","Yuumi","Trundle","Ezreal","Karthus","Kayn","Olaf","Taliyah","Vi","Singed","MissFortune","Nocturne","Braum","Sejuani","Pantheon","Katarina","Jarvan","Diana","Evelynn","Zed","Nami","Mordekaiser","Xerath","Shyvana","Xayah","Sion","Udyr","Rakan","Taric","Nasus","Yorick","Kled","Heimerdinger","Akali","Caitlyn","XinZhao","Ornn","Neeko","Galio","Lissandra","Jax","Sivir","Malzahar","TwistedFate","Nidalee","VelKoz","Yasuo","Renekton","Soraka","Fiora","Ashe","Syndra","Irelia","Aatrox","Jinx","Janna","Draven","Garen","LeeSin","Kennen","Cassiopeia","Viktor","Talon","Senna","AurelionSol","Ekko","Poppy","Ivern","Fizz","Zoe","Gragas","Mundo","Jhin","Veigar","Orianna","Brand","RekSai","Camille","Rammus","Varus","Wukong","Hecarim","Zyra","Kaisa","Malphite","Rengar","Zilean","Pyke","Tristana","Zac","Sylas","Ziggs","Leona","MasterYi","Maokai","Warwick","Elise","Quinn","Blitzcrank","Volibear","Shaco","Lulu","Anivia","Azir","Swain","Gangplank","Karma","Amumu","Alistar","Jayce","Shen","Illaoi","Rumble","Sona","Sett","Kassadin","Qiyana","Graves","Ryze","Bard","Lux","Twitch","Darius","Nautilus","LeBlanc","Skarner","Ahri"];
  const data = {
    password,
    username,
    championList
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const res = await fetch('/user', options);
  const json = await res.json();
  return json.length > 0;
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

    }
  }
}
async function getNewSoloRandomBuild() {
  let playerChampionPool;
  if (userLoggedIn === true) {
    playerChampionPool = await getChampionList(activeUser)
  }
  else {
    playerChampionPool = activeUser.championList;
  }
  if (playerChampionPool.length > 0) {
    const championName = playerChampionPool[Math.floor(Math.random() * playerChampionPool.length)];
    const roleList = soloRoleCheck();
    const possibleRoles = [];
    let jungler = false;
    let support = false;
    let top = false;
    let mid = false;
    let adc = false;
    if (roleList[0] === false) {
      possibleRoles.push('jungle');
    }
    if (roleList[1] === false) {
      possibleRoles.push('support');
    }
    if (roleList[2] === false) {
      possibleRoles.push('top');
    }
    if (roleList[3] === false) {
      possibleRoles.push('mid');
    }
    if (roleList[4] === false) {
      possibleRoles.push('bot');
    }
    const selectedRole = possibleRoles[Math.floor(
        Math.random() * possibleRoles.length)];
    const buildNumber = await getRandomBuild(championName);
    document.getElementById("buildSelectedChampion").src = "images/champion/"+championName+".png";
    setSoloSummonerSpells(buildNumber, selectedRole, buildNumber);

    const allPossibleItems = await buildAllPossibleItemsList(buildNumber, championName);
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
    document.getElementById('buildRole').src = 'images/graphics/' + selectedRole + '.png';
    const possibleSpells = ["Q","W","E"];
    document.getElementById("buildSkill").src = "/images/spell/"+championName+possibleSpells[Math.floor(Math.random()*3)] +".png";
    randomizeRestOfTheItems(allPossibleItems, (remainingItems-1), boots);
    printSelectedItems();
    const keyStone = randomizeKeyStone(itemClasses[buildNumber].keyStones);
    const runeList = buildRunes(keyStone);
    printRunes(runeList[0], runeList[1], runeList[2], runeList[3], runeList[4],runeList[5]);
    document.getElementById(
        'buildName').innerHTML = itemClasses[buildNumber].name +" "+ championName;
    const itemSet = formJSONforItemSet();
    document.getElementById('buildInput').value = JSON.stringify(itemSet);
  }
  else {
    alert("Select at least one champion.")
  }

}
async function getNewTeamBuilds(buildIndex) {
  let name;
  if (buildIndex === 0) {
    username1 = document.getElementById("addBuildInput1").value;
    name = username1;
    if (await checkUsername(username1)) {
      let userChampionList;
      userChampionList = await getChampionList(username1);
      if (userChampionList.length > 4) {
        addBuild1();
        const role = availableTeamRoles[Math.floor(
            Math.random() * availableTeamRoles.length)];
        role1 = role;
        for (let i = 0; i < availableTeamRoles.length; i++) {
          if (availableTeamRoles[i] === role) {
            availableTeamRoles.splice(i, 1);
          }
        }
        await createOneNewTeamMemberBuild(userChampionList, buildIndex, role,
            name);
      } else {
        alert("Added player's champion pool is less than required.");
      }
    } else {
      alert("Username doesn't exist.");
    }
  }
  if (buildIndex === 1) {
    username2 = document.getElementById("addBuildInput2").value;
    name = username2;
    if (await checkUsername(username2)) {
      let userChampionList;
      userChampionList = await getChampionList(username2);
      if (userChampionList.length > 4) {
        addBuild2();
        const role = availableTeamRoles[Math.floor(
            Math.random() * availableTeamRoles.length)];
        console.log(role);
        role2 = role;
        for (let i = 0; i < availableTeamRoles.length; i++) {
          if (availableTeamRoles[i] === role) {
            availableTeamRoles.splice(i, 1);
          }
        }
        await createOneNewTeamMemberBuild(userChampionList, buildIndex, role,
            name);
      } else {
        alert("Added player's champion pool is less than required.");
      }
    } else {
      alert("Username doesn't exist.");
    }
  }
  if (buildIndex === 2) {
    username3 = document.getElementById("addBuildInput3").value;
    name = username3;
    if (await checkUsername(username3)) {
      let userChampionList;
      userChampionList = await getChampionList(username3);
      if (userChampionList.length > 4) {
        addBuild3();
        const role = availableTeamRoles[Math.floor(
            Math.random() * availableTeamRoles.length)];
        role3 = role;
        for (let i = 0; i < availableTeamRoles.length; i++) {
          if (availableTeamRoles[i] === role) {
            availableTeamRoles.splice(i, 1);
          }
        }
        await createOneNewTeamMemberBuild(userChampionList, buildIndex, role,
            name);
      } else {
        alert("Added player's champion pool is less than required.");
      }
    } else {
      alert("Username doesn't exist.");
    }
  }
  if (buildIndex === 3) {
    username4 = document.getElementById("addBuildInput4").value;
    name = username4;
    if (await checkUsername(username4)) {
      let userChampionList;
      userChampionList = await getChampionList(username4);
      if (userChampionList.length > 4) {
        addBuild4();
        const role = availableTeamRoles[Math.floor(
            Math.random() * availableTeamRoles.length)];
        role4 = role;
        for (let i = 0; i < availableTeamRoles.length; i++) {
          if (availableTeamRoles[i] === role) {
            availableTeamRoles.splice(i, 1);
          }
        }
        await createOneNewTeamMemberBuild(userChampionList, buildIndex, role,
            name);
      } else {
        alert("Added player's champion pool is less than required.");
      }
    } else {
      alert("Username doesn't exist.");
    }
  }
  if (buildIndex === 4) {
    username5 = document.getElementById("addBuildInput5").value;
    name = username5;
    if (await checkUsername(username5)) {
      let userChampionList;
      userChampionList = await getChampionList(username5);
      if (userChampionList.length > 4) {
        addBuild5();
        const role = availableTeamRoles[Math.floor(
            Math.random() * availableTeamRoles.length)];
        role5 = role;
        for (let i = 0; i < availableTeamRoles.length; i++) {
          if (availableTeamRoles[i] === role) {
            availableTeamRoles.splice(i, 1);
          }
        }
        await createOneNewTeamMemberBuild(userChampionList, buildIndex, role,
            name);
      } else {
        alert("Added player's champion pool is less than required.");
      }
    } else {
      alert("Username doesn't exist.");
    }
  }
}
async function createOneNewTeamMemberBuild(userChampionList, buildIndex, role, name) {
  console.log("available roles "  + availableTeamRoles);
  itemSetForJSON = [];
  let championName;
  let done = false;
  while (done === false) {
    championName = userChampionList[Math.floor(Math.random() * userChampionList.length)];
    if (takenChampion1 !== championName && takenChampion2 !== championName && takenChampion3 !== championName && takenChampion4 !== championName && takenChampion5 !== championName) {
      if(buildIndex === 0) {
        takenChampion1 = championName;
      }
      if(buildIndex === 1) {
        takenChampion2 = championName;
      }
      if(buildIndex === 2) {
        takenChampion3 = championName;
      }
      if(buildIndex === 3) {
        takenChampion4 = championName;
      }
      if(buildIndex === 4) {
        takenChampion5 = championName;
      }
      done = true;
    }
  }
  const buildNumber = await getRandomBuild(
      userChampionList[Math.floor(Math.random() * userChampionList.length)]);
  const allPossibleItems = await buildAllPossibleItemsList(buildNumber,
      championName, name);
  let remainingItems = 6;
  const boots = itemClasses[buildNumber].boots[Math.floor(
      Math.random() * (itemClasses[buildNumber].boots.length - 1))];
  const jungleItem = itemClasses[buildNumber].jgItems[Math.floor(
      Math.random() * (itemClasses[buildNumber].jgItems.length - 1))];
  const supportItem = itemClasses[buildNumber].spItems[Math.floor(
      Math.random() * (itemClasses[buildNumber].spItems.length - 1))];
  if (role === 1) {
    remainingItems--;
    itemSetForJSON.push(jungleItem);
    itemSetForJSON.push(boots);
  } else if (role === 3) {
    itemSetForJSON.push(supportItem);
  }
  setTeamSummonerSpells(buildIndex, role, buildNumber);
  randomizeRestOfTheItems(allPossibleItems, (remainingItems - 1), boots);
  printSelectedItemsForTeam(buildIndex);
  const keyStone = randomizeKeyStone(itemClasses[buildNumber].keyStones);
  const runeList = buildRunes(keyStone);
  printRunesForTeam(buildIndex, runeList[0], runeList[1], runeList[2], runeList[3], runeList[4], runeList[5]);
  document.getElementById('build' + (buildIndex + 1).toString() + 'Name').innerHTML = itemClasses[buildNumber].name +" "+ championName;
  document.getElementById("build"+(buildIndex+1).toString()+"Player").innerHTML = name;
  const itemSet = formJSONforItemSet();
  document.getElementById('build' + (buildIndex + 1).toString() + 'Input').value = JSON.stringify(itemSet);
  document.getElementById("champion"+(buildIndex + 1).toString()).src = "/images/champion/"+championName+".png";
  const possibleSpells = ["Q","W","E"];
  document.getElementById("teamSkill"+(buildIndex+1).toString()).src = "/images/spell/"+championName+possibleSpells[Math.floor(Math.random()*3)] +".png";
  if (role === 0) {
    document.getElementById("build"+(buildIndex+1).toString()+"Role").src = "/images/graphics/top.png"
  }
  if (role === 1) {
    document.getElementById("build"+(buildIndex+1).toString()+"Role").src = "/images/graphics/jungle.png"
  }
  if (role === 2) {
    document.getElementById("build"+(buildIndex+1).toString()+"Role").src = "/images/graphics/mid.png"
  }
  if (role === 3) {
    document.getElementById("build"+(buildIndex+1).toString()+"Role").src = "/images/graphics/support.png"
  }
  if (role === 4) {
    document.getElementById("build"+(buildIndex+1).toString()+"Role").src = "/images/graphics/bot.png"
  }
}
function getRandomNumbersForRunes(numberOfNumbers) {
  const listOfNumbers = [];
  for (let i = 0; i < numberOfNumbers; i++) {
    listOfNumbers.push((Math.floor(Math.random() * 3)) + 1);
  }
  return listOfNumbers;
}
function randomizeKeyStone(possibleKeyStones) {
  return possibleKeyStones[Math.floor(
      Math.random() * possibleKeyStones.length)];
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
async function getRandomBuild(championName) {
  const data = {
    champion: championName
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
  return possibleBuilds[Math.floor((Math.random() * (possibleBuilds.length)))];
}
async function buildAllPossibleItemsList(buildSetNumber, championName) {
  const data = {
    champion: championName
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

  let allPossibleItems = [];
  let combiner = [];
  combiner = itemClasses[buildSetNumber].mainItems;
  if (champion[0].isMana === 1) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].manaItems);
    combiner = allPossibleItems;
  }
  if (champion[0].Melee === 1) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].meleeItems);
    combiner = allPossibleItems;
  }
  if (champion[0].Ranged) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].rangerItems);
    combiner = allPossibleItems;
  }
  allPossibleItems = combiner.concat(itemClasses[buildSetNumber].apItems);
  combiner = allPossibleItems;
  if (champion[0].Enchanter === 1) {
    allPossibleItems = combiner.concat(itemClasses[buildSetNumber].healItems);
  }
  return allPossibleItems;
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
async function rerollTeamBuilds() {
  takenChampion1 = "";
  takenChampion2 = "";
  takenChampion3 = "";
  takenChampion4 = "";
  takenChampion5 = "";
  availableTeamRoles = [0,1,2,3,4];
  console.log(role1);
  if (role1 !== "undefined") {
    await getNewTeamBuilds(0);
    console.log("Rerolling 1");
  }
  console.log(role2);
  if (role2 !== "undefined") {
    console.log("Rerolling 2");
    await getNewTeamBuilds(1);
    console.log("Rerolling 2");
  }
  console.log(role3);
  if (role3 !== "undefined") {
    await getNewTeamBuilds(2);
    console.log("Rerolling 3");
  }
  console.log(role4);
  if (role4 !== "undefined") {
    await getNewTeamBuilds(3);
    console.log("Rerolling 4");
  }
  console.log(role5);
  if (role5 !== "undefined") {
    await getNewTeamBuilds(4);
    console.log("Rerolling 5");
  }

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
  for (let i = 0; i < 5; i++) {
    if (roleList[i] === false) {
      return false;
    }
  }
  return true;
}
function printSelectedItems() {
  for (let i = 0; i < 6; i++) {
    document.getElementById('item' + (i + 1).toString()).src = 'images/items/' +
        itemSetForJSON[i] + '.png';
  }

}
function printRunes(mainRune, mainLowerRunes, secondaryRuneType, secondaryRunes, statBonuses, keyStoneNumber) {
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
function printSelectedItemsForTeam(roleNumber) {
  for (let i = 0; i < 6; i++) {
    document.getElementById('item' + (roleNumber + 1).toString() +
        (i + 1).toString()).src = 'images/items/' + itemSetForJSON[i] + '.png';
  }

}
function setTeamSummonerSpells(buildIndex, role, buildNumber) {
  if (role === 0) {
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '2').src = 'images/spell/summonerTeleport.png';
  }
  if (role === 1) {
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '2').src = 'images/spell/summonerSmite.png';
  }
  if (role === 2) {
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '2').src = 'images/spell/summonerIgnite.png';
  }

  if (role === 3) {
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '2').src = 'images/spell/summonerHeal.png';
  }
  if (role === 4) {
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '1').src = 'images/spell/summonerFlash.png';
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '2').src = 'images/spell/summonerIgnite.png';
  }
  if (buildNumber === 11) {
    document.getElementById('teamSummonerSpell' + (buildIndex + 1).toString() +
        '1').src = 'images/spell/summonerGhost.png';
  }

}
function setSoloSummonerSpells(buildNumber, role, buildIndex) {
  console.log(role);
  if (role === "top") {
    document.getElementById("buildFirstSummonerSpell").src = 'images/spell/summonerFlash.png';
    document.getElementById("buildSecondSummonerSpell").src = 'images/spell/summonerTeleport.png';
    console.log("top");
  }
  if (role === "jungle") {
    document.getElementById("buildFirstSummonerSpell").src = 'images/spell/summonerFlash.png';
    document.getElementById("buildSecondSummonerSpell").src = 'images/spell/summonerSmite.png';
  }
  if (role === "mid") {
    document.getElementById("buildFirstSummonerSpell").src = 'images/spell/summonerFlash.png';
    document.getElementById("buildSecondSummonerSpell").src = 'images/spell/summonerIgnite.png';
  }

  if (role === "bot") {
    document.getElementById("buildFirstSummonerSpell").src = 'images/spell/summonerFlash.png';
    document.getElementById("buildSecondSummonerSpell").src = 'images/spell/summonerHeal.png';
  }
  if (role === "support") {
    document.getElementById("buildFirstSummonerSpell").src = 'images/spell/summonerFlash.png';
    document.getElementById("buildSecondSummonerSpell").src = "images/spell/summoner"+["Exhaust","Ignite"][Math.floor(Math.random()*2)]+".png";
  }
  if (buildIndex === 11) {
    document.getElementById("buildFirstSummonerSpell").src = 'images/spell/summonerGhost.png';
  }
}
function printRunesForTeam(roleNumber, mainRune, mainLowerRunes, secondaryRuneType, secondaryRunes, statBonuses, keyStoneNumber) {
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
function scrollFunction(id) {
  document.getElementById(id).scrollIntoView(true);
}
let pageTopButton = document.getElementById('pageTopButton');
window.onscroll = function() {
  toggleTopButton();
};
function toggleTopButton() {
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
let popupOpen = false;
document.getElementById('register').addEventListener('click', function() {
  popupOpen = true;
  registerPopupFunction();
});

function loginPopupFunction() {
  document.querySelector('.login-popup').style.display = 'flex';
}
function registerPopupFunction() {
  document.querySelector('.register-popup').style.display = 'flex';
}
function closeLoginPopupFunction() {
  document.querySelector('.login-popup').style.display = 'none';
  document.querySelectorAll(".password-input").forEach(item => {
    item.value = "";
  });
  popupOpen = false;
  passwordVisible = true;
  togglePassword();
}
function closeRegisterPopupFunction() {
  document.querySelector('.register-popup').style.display = 'none';
  document.querySelectorAll(".password-input").forEach(item => {
    item.value = "";
  });
  popupOpen = false;
  passwordVisible = true;
  togglePassword();
}
let passwordVisible = false;
function togglePassword() {
  if (passwordVisible === false) {
    passwordVisible = true;
    document.querySelectorAll(".eye-cross").forEach(item => {
      item.setAttribute("style", "display: block")
    });
    document.querySelectorAll(".password-input").forEach(item => {
      item.setAttribute("type", "text")
    });
  }
  else {
    passwordVisible = false;
    document.querySelectorAll(".eye-cross").forEach(item => {
      item.setAttribute("style", "display: none")
    });
    document.querySelectorAll(".password-input").forEach(item => {
      item.setAttribute("type", "password")
    });
  }
}
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
    document.getElementById("spacer").style.display = "none";
    document.querySelector(".role-buttons-container").style.display = "none";
  }
  if (tabName === "buildBox" && teamTabClicked === true) {
    document.querySelector(".role-buttons-container").style.display = "flex";
    setBuild1Idle();
    setBuild2Idle();
    setBuild3Idle();
    setBuild4Idle();
    setBuild5Idle();
  }
}
function buildScrollFunction() {
  if (team === true) {
    document.getElementById('goDiv').scrollIntoView();
  }
}
let build1Visible = false;
let build2Visible = false;
let build3Visible = false;
let build4Visible = false;
let build5Visible = false;
function setBuild1Idle() {
  if(build1Visible === true) {
    document.getElementById("build1").setAttribute("class", "team-build-idle")
  }
}
function setBuild2Idle() {
  if(build2Visible === true) {
    document.getElementById("build2").setAttribute("class", "team-build-idle")
  }
}
function setBuild3Idle() {
  if(build3Visible === true) {
    document.getElementById("build3").setAttribute("class", "team-build-idle")
  }
}
function setBuild4Idle() {
  if(build4Visible === true) {
    document.getElementById("build4").setAttribute("class", "team-build-idle")
  }
}
function setBuild5Idle() {
  if(build5Visible === true) {
    document.getElementById("build5").setAttribute("class", "team-build-idle")
  }
}
function addBuild1() {
  document.querySelector('#addBuildDiv1').style.display = 'none';
  let build1 = document.querySelector('#build1');
  build1.style.display = 'flex';
  build1.setAttribute('class', 'team-build slide-in');
  build1Visible = true;
}
function closeBuild1() {
  let addBuild1 = document.querySelector('#addBuildDiv1');
  let build1 = document.querySelector('#build1');
  build1.setAttribute('class', 'team-build slide-out');
  build1Visible = false;
  setTimeout(function() {
    build1.style.display = 'none';
    build1.setAttribute("class", "team-build");
    addBuild1.style.display = 'flex';
    addBuild1.setAttribute('class', 'flex-column fade-in');
  }, 500);
}
function addBuild2() {
  document.querySelector('#addBuildDiv2').style.display = 'none';
  let build2 = document.querySelector('#build2');
  build2.style.display = 'flex';
  build2.setAttribute('class', 'team-build slide-in');
  build2Visible = true;
}
function closeBuild2() {
  let addBuild2 = document.querySelector('#addBuildDiv2');
  let build2 = document.querySelector('#build2');
  build2.setAttribute('class', 'team-build slide-out');
  build2Visible = false;
  setTimeout(function() {
    build2.style.display = 'none';
    build2.setAttribute("class", "team-build");
    addBuild2.style.display = 'flex';
    addBuild2.setAttribute('class', 'flex-column fade-in');
  }, 500);
}
function addBuild3() {
  document.querySelector('#addBuildDiv3').style.display = 'none';
  let build3 = document.querySelector('#build3');
  build3.style.display = 'flex';
  build3.setAttribute('class', 'team-build slide-in');
  build3Visible = true;
}
function closeBuild3() {
  let addBuild3 = document.querySelector('#addBuildDiv3');
  let build3 = document.querySelector('#build3');
  build3.setAttribute('class', 'team-build slide-out');
  build3Visible = false;
  setTimeout(function() {
    build3.style.display = 'none';
    build3.setAttribute("class", "team-build");
    addBuild3.style.display = 'flex';
    addBuild3.setAttribute('class', 'flex-column fade-in');
  }, 500);
}
function addBuild4() {
  document.querySelector('#addBuildDiv4').style.display = 'none';
  let build4 = document.querySelector('#build4');
  build4.style.display = 'flex';
  build4.setAttribute('class', 'team-build slide-in');
  build4Visible = true;
}
function closeBuild4() {
  let addBuild4 = document.querySelector('#addBuildDiv4');
  let build4 = document.querySelector('#build4');
  build4.setAttribute('class', 'team-build slide-out');
  build4Visible = false;
  setTimeout(function() {
    build4.style.display = 'none';
    build4.setAttribute("class", "team-build");
    addBuild4.style.display = 'flex';
    addBuild4.setAttribute('class', 'flex-column fade-in');
  }, 500);
}
function addBuild5() {
  document.querySelector('#addBuildDiv5').style.display = 'none';
  let build5 = document.querySelector('#build5');
  build5.style.display = 'flex';
  build5.setAttribute('class', 'team-build slide-in');
  build5Visible = true;
}
function closeBuild5() {
  let addBuild5 = document.querySelector('#addBuildDiv5');
  let build5 = document.querySelector('#build5');
  build5.setAttribute('class', 'team-build slide-out');
  build5Visible = false;
  setTimeout(function() {
    build5.style.display = 'none';
    build5.setAttribute("class", "team-build");
    addBuild5.style.display = 'flex';
    addBuild5.setAttribute('class', 'flex-column fade-in');
  }, 500);
}

function profileDropdown() {
  if (!dropdownVisible) {
    dropdown.style.display = "flex";
    dropdown.setAttribute("class", "profile-dropdown flex-column drop-down");
    dropdownVisible = true;
    if (userLoggedIn) {
      loginButton.style.display = "none";
      logoutButton.style.display = "block";
    }
    else {
      loginButton.style.display = "block";
      logoutButton.style.display = "none";
    }
  }
  else {
    dropdown.setAttribute("class", "profile-dropdown");
    dropdown.style.display = "none";
    dropdownVisible = false;
    bodyClicked = false;
    dropdownClicked = false;
  }
}
function closeProfileDropdown() {
  if (bodyClicked && (!dropdownClicked || logoutClicked) && !popupOpen) {
    if (logoutClicked) {
      logoutButton.style.display = "none";
      loginButton.style.display = "block";
      userLoggedIn = false;
      profileName.innerHTML = "Guest"
    }
    dropdown.setAttribute("class", "profile-dropdown");
    dropdown.style.display = "none";
    dropdownVisible = false;
    bodyClicked = false;
    dropdownClicked = false;
    logoutClicked = false;
  }
  else {
    bodyClicked = false;
    dropdownClicked = false;
  }
}