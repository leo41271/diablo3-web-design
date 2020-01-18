// no use in project
var i = 0;
var ch1p1 =
  "Hero is sent to discover that the mystery of the falling star is a Stranger who cannot remember who or what he is. He recalls a sword in his possession that broke into 3 pieces that fall to Sanctuary in the vicinity of the Cathedral in Tristram.";
var ch1p2 =
  "The Hero then pursues all three pieces of the sword to reforge it only to have Deckard Cain realize the sword belongs to none other than Tyrael, the Archangel of Justice. Shortly thereafter, Cain is killed by the demoness Maghda, working under the Lesser Evil, Belial’s command. Maghda then proceeds to kidnap Tyrael and the Hero runs off to rescue him...";
var ch2p1 =
  "Upon arriving in Caldeum, the Hero learns of the turmoil surrounding the desert city. Their child ruler, Emperor Hakkan, has appeared to grow more and more troubled as of late, placing only trust in his suspicious new royal guards.";
var ch2p2 =
  "The heroes then move aid the city in its trouble by freeing the Iron Wolves and learning of what’s been happening around the Kingdom. Leah and Tyrael, in the meantime, go out in search of Leah’s mother who has been said to be hiding somewhere in Caldeum...";
var ch3p1 =
  "Azmodan’s armies are on the march. Leah’s visions and communication with Azmodan confirmed this. The Heroes and Tyrael work to secure Arreat’s defenses and advance the attack. After disarming Azmodan’s artillery, the Heroes take the fight to the Crater.";
var ch3p2 =
  "The Heroes descend into the depths of the Crater in search of the Heart of Sin, in order to call Azmodan out and stop his forces from pouring out into Sanctuary...";
var ch4p1 =
  "The Heroes arrive in time to see Tyrael arguing with Imperius. Imperius will not stand to see humans set foot in the High Heavens. He warns Tyrael of transgressing any further and takes off after Diablo to fight off the corruption taking root.";
var ch4p2 =
  "The Heroes and Tyrael push forward and rescue Itherael and Auriel from Diablo’s corruption, who then aid the Heroes in making their way to the Spire, fighting numerous Lesser Lords along the way, including the reincarnation of Izual...";
var ch5p1 =
  "t begins in Westmarch and ends in the Pandemonium Fortress. Malthael and his Reapers serve as the main antagonists, while Adria returns as a secondary antagonist.";
var ch5p2 =
  "you have to stop the demonic rituals that the reapers are doing on the townsfolk to kill them. This part of the act ends with the boss fight against a Maiden of Flame...";
var speed = 50;

function typeWriter() {
  if (i < ch1p1.length) {
    document.getElementById("demo").innerHTML += ch1p1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
