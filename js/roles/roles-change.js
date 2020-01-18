const role_barb = document.getElementById("role-barb");
const role_sader = document.getElementById("role-sader");
const role_monk = document.getElementById("role-monk");
const role_dh = document.getElementById("role-dh");
const role_wd = document.getElementById("role-wd");
const role_wizard = document.getElementById("role-wizard");
const role_necro = document.getElementById("role-necro");

// ...................????????????????????????????????????????????
// How to get a dom element in a new window?
// https://stackoverflow.com/questions/15880468/how-to-get-a-dom-element-in-a-new-window
// Window open() Method
// https://www.w3schools.com/jsref/met_win_open.asp

// document.getElementById from another page? 這個很不錯 但還不到具體我要的
// http://www.dynamicdrive.com/forums/showthread.php?67448-document-getElementById-from-another-page
// https://stackoverflow.com/questions/982717/how-do-i-get-the-entire-pages-html-with-jquery
// https://stackoverflow.com/questions/12899047/how-to-use-javascript-to-access-another-pages-elements
// https://stackoverflow.com/questions/7567181/jquery-get-different-page-elements

function role_intro(userChoice) {
  // document.getElementById("content").innerHTML =
  //   '<object type="text/html" data="./roles.html" ></object>';
  const intro_img = document.querySelector(".left > img");
  const intro_h2 = document.querySelector(".right > h2");
  const intro_li1 = document.getElementById("right-content-li1");
  const intro_li2 = document.getElementById("right-content-li2");
  const intro_li3 = document.getElementById("right-content-li3");
  const intro_see_more = document.getElementById("right-content-a");
  switch (userChoice) {
    case "role-barb":
      // console.log(document_role.URL);
      intro_img.src = "./images/role/barb-male.jpg";
      intro_img.alt = "野蠻人";
      intro_h2.innerHTML = `野蠻人`;
      intro_li1.innerHTML = `野蛮人是从来不惧怕近身战的野蛮的流浪者。强大的撼地践踏、跳跃攻击和双持横斩让他们的敌人还没挪步就被斩杀成碎块，或让试图临阵脱逃者被顺势砍翻在地。`;
      intro_li2.innerHTML = `感谢他们强壮的身体，尽管他们都是用沉重而巨大的武器，野蛮人却可以在近战中通过武器和距离支配一切。野蛮人对战争的威胁一点也不陌生，他们经常要面对数个敌人，给予或得到无数伤口，这比他们试图追杀一个目标要频繁得多。`;
      intro_li3.innerHTML = `野蛮人的攻击主要是以近战为主。他们的武器挥动速度极快，并可以瞬间削弱敌人的耐力，而他们使用更缓慢却更强大的震地攻击时，足以撼动千军万马并击破强敌厚重的铠甲。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/barbarian/";
      // change the src of an img tag
      // https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
      // src 是以當前開的網頁來找的 注意路徑
      // a change link href
      // https://stackoverflow.com/questions/4365246/how-to-change-href-of-a-tag-on-button-click-through-javascript
      break;
    case "role-sader":
      intro_img.src = "./images/role/sader-male.jpg";
      intro_img.alt = "聖教軍";
      intro_h2.innerHTML = `聖教軍`;
      intro_li1.innerHTML = `圣教军永远捍卫信仰与律令。他们堪称是活生生的堡垒，穿着坚不可摧的盔甲并手持庇御之盾穿越眼前的敌阵，留下恶魔在炙热中闷燃烧尽。`;
      intro_li2.innerHTML = `尽管战火无情，圣教军仍然义无反顾，依靠神圣魔法与坚实护甲来取得胜利。训练有素的圣教军擅长卸除对方的攻击劲道，对于猛烈轰击往往不屑一顾。但危急时，他们也能放弃速度与行动力以酝酿足以承受攻击的无穷后劲。`;
      intro_li3.innerHTML = `足以碎骨的连枷与厚实的盾牌相当适合进行近身作战，但是圣教军杀敌的本事并不局限于这个距离。当这些具有神圣能量的勇士加入战局，也能以熊熊烈焰与眩目强光，惩罚不服从审判的敌人。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/crusader/";
      break;
    case "role-monk":
      intro_img.src = "./images/role/monk-male.jpg";
      intro_img.alt = "武僧";
      intro_h2.innerHTML = `武僧`;
      intro_li1.innerHTML = `武僧是神圣的战士，他们把神力通过强大的意志力转化为他们的武器。不管是治疗、防护真言还是带有神圣之力的攻击，武僧都是信手拈来。`;
      intro_li2.innerHTML = `技巧高超的武僧可以赤手空拳或者使用一系列简单的武器来打出他们迅速的攻击。在实战中，他们注重机动性而非蛮力。他们在战场中进出自如，避免激烈的互殴拖延之战。`;
      intro_li3.innerHTML = `武僧的进攻主要专注于近战攻击。他们可以对单个敌人造成巨大的伤害，也可以使用掌击、腿法带来的元素力量对短距离内的敌人造成范围攻击。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/monk/";
      break;
    case "role-dh":
      intro_img.src = "./images/role/DH-female.jpg";
      intro_img.alt = "狩魔獵人";
      intro_h2.innerHTML = `狩魔獵人`;
      intro_li1.innerHTML = `猎魔人是无情的复仇者，任何被盯上的目标都会瞬间被她们从远处狙杀。她们会远离危险，并依靠手里的弓弩、致命的陷阱和弹幕将这个世界一切可憎的生物消灭殆尽。`;
      intro_li2.innerHTML = `对敌人进行带有爆炸物的扫射，从天而降的箭雨和各种爆破的处理方式，猎魔人最擅长的就是消灭成群结队的敌人。猎魔人有着百步穿杨的精准度，可以从远处轻松狙杀强壮的怪物，可以在远处精准地狙击并在有敌人靠近时全身而退。`;
      intro_li3.innerHTML = `但猎魔人更加专注于远程战斗，对近战武器的技术掌握有限，一旦被包围将处于十分危险的局势。翻滚和跳跃，致残和减速这样的逃生技能，如同任何猎人的弓箭一般犀利。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/demon-hunter/";
      break;
    case "role-wd":
      intro_img.src = "./images/role/WD-male.jpg";
      intro_img.alt = "巫醫";
      intro_h2.innerHTML = `巫醫`;
      intro_li1.innerHTML = `巫医是召唤亡灵和邪恶生物来为他们而战的灵魂战士。他们的身边满是僵尸和毒虫，巫医可以随意使用会爆炸的颅骨，流淌酸毒的云雾和可怕的诅咒来攻击他们的敌人。`;
      intro_li2.innerHTML = `受能力的影响，让敌人在被控制中痛苦而缓慢地死去是巫医的拿手好戏。他们可以得心应手地对敌人进行攻击或者诅咒减速，以及群体控制，并用自己饥饿的宠物们将敌人吞噬尽矣。巫医可以在战场上点燃火焰或者放毒，缓慢地吞噬靠近的敌人的生命。`;
      intro_li3.innerHTML = `虽然有些巫医会避免近战以强化他们的宠物和避免敌人近身，他们也有和敌人直接交火的战斗能力。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/witch-doctor/";
      break;
    case "role-wizard":
      intro_img.src = "./images/role/wizard-female.jpg";
      intro_img.alt = "秘術師";
      intro_h2.innerHTML = `秘術師`;
      intro_li1.innerHTML = `魔法师放弃了多数魔法使用者所认可的安全的方法，是以自己身体作为奥术能量容器的叛逆的施法者。她们操作任何力量来瓦解、点燃或冻住她们的敌人，她们也可以控制时间和光线来传送、创造强大的幻象和折射攻击。`;
      intro_li2.innerHTML = `法师抓住魔杖和法杖来强化她们不是特别熟练的魔法，将敌人轰杀并同时争取能量和必要的时间来施放更加华丽而具有毁灭性的奥术魔法。`;
      intro_li3.innerHTML = `除了个别例外，魔法师通常都远离危险而保持一定距离。就如同一台活的炮台一样，魔法师非常擅长远距离的攻击。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/wizard/";
      break;
    case "role-necro":
      intro_img.src = "./images/role/necro-femalejpg.jpg";
      intro_img.alt = "死靈法師";
      intro_h2.innerHTML = `死靈法師`;
      intro_li1.innerHTML = `对拉斯玛的祭司而言，死亡只是生命中最自然的一部分。他们并不追求延缓死亡那无可避免的降临，而是以无畏的态度面对它。`;
      intro_li2.innerHTML = `他们唯一的目标是维持光明与黑暗力量间的平衡，因为当平衡被打破时，人类将面临极度危险的局面。`;
      intro_li3.innerHTML = `尽管有人辱骂他们，把他们称为死灵法师或是异教徒，但拉斯玛的祭司们仍一如既往地强大。他们隐秘地工作，施展他们独有的死亡法术，维护庇护之地的平衡。`;
      intro_see_more.href = "https://tw.diablo3.com/zh/class/necromancer/";
      break;
  }
}

function main() {
  role_barb.addEventListener("click", () => role_intro("role-barb"));
  role_sader.addEventListener("click", () => role_intro("role-sader"));
  role_monk.addEventListener("click", () => role_intro("role-monk"));
  role_dh.addEventListener("click", () => role_intro("role-dh"));
  role_wd.addEventListener("click", () => role_intro("role-wd"));
  role_wizard.addEventListener("click", () => role_intro("role-wizard"));
  role_necro.addEventListener("click", () => role_intro("role-necro"));
}

main();
