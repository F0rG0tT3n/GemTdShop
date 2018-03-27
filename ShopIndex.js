class ShopIndex {

  translate(aObj, onSale) {
    //console.log('kekekekeke: ' + aString.price);
    //console.log(aObj.id);
    if (aObj.id === 'b201711') {
      return 'LuckyBox - One free each day / 5 shells.';
    }

    var retString = '';
    if (onSale.toLowerCase() === aObj.id.toLowerCase()) {
      retString += '**';
    }

    if (aObj.id.charAt(0) === 'h') {
      retString += 'Hero - ' + this.getNameFromId(aObj.id);
      retString += ' - ' + this.capitalizeFirstLetter(aObj.rarity.toLowerCase().substr(0, aObj.rarity.length - 5));
    } else if (aObj.id.charAt(0) === 'e'){
      retString += 'Effect - ' + this.getNameFromId(aObj.id);
      retString += ' - ' + this.capitalizeFirstLetter(aObj.rarity.toLowerCase().substr(0, aObj.rarity.length - 7));
    } else if (aObj.id.charAt(0) === 'a'){
      retString += 'Ability - ' + this.getNameFromId(aObj.id);
      retString += ' - ' + this.capitalizeFirstLetter(aObj.rarity.toLowerCase().substr(0, aObj.rarity.length - 8));
    }

    if (onSale.toLowerCase() === aObj.id.toLowerCase()) {
      retString += ' - ' + Math.floor(aObj.price / 2) + ' shells.';
    } else {
      retString += ' - ' + aObj.price + ' shells.';
    }

    if (onSale.toLowerCase() === aObj.id.toLowerCase()) {
      retString += ' - ON SALE!**';
    }
    return retString;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getNameFromId(aId) {
    switch(aId.toLowerCase()) {
      case 'h000': return 'Riki';
      case 'h101': return 'Enchantress';
      case 'h102': return 'Puck';
      case 'h103': return 'Omniknight';
      case 'h104': return 'Wisp';
      case 'h105': return 'Ogre Magi';
      case 'h106': return 'Lion';
      case 'h107': return 'Keeper of The Light';
      case 'h108': return 'Rubick';
      case 'h109': return 'Jakiro';
      case 'h110': return 'Sand King';
      case 'h201': return 'Crystal Maiden';
      case 'h202': return 'Death Prophet';
      case 'h203': return 'Templar Assassin';
      case 'h204': return 'Lina';
      case 'h205': return 'Tidehunter';
      case 'h206': return 'Naga Siren';
      case 'h207': return 'Phoenix';
      case 'h208': return 'Dazzle';
      case 'h209': return 'Warlock';
      case 'h210': return 'Necrolyte';
      case 'h211': return 'Lich';
      case 'h212': return 'Furion';
      case 'h213': return 'Venomancer';
      case 'h214': return 'Kunkka';
      case 'h215': return 'Axe';
      case 'h216': return 'Slark';
      case 'h217': return 'Viper';
      case 'h218': return 'Tusk';
      case 'h219': return 'Abaddon';
      case 'h301': return 'Windrunner';
      case 'h302': return 'Phantom Assassin';
      case 'h303': return 'Sniper';
      case 'h304': return 'Sven';
      case 'h305': return 'Luna';
      case 'h306': return 'Mirana';
      case 'h307': return 'Nevermore';
      case 'h308': return 'Queen of Pain';
      case 'h309': return 'Juggernaut';
      case 'h310': return 'Pudge';
      case 'h311': return 'Shredder';
      case 'h312': return 'Slardar';
      case 'h313': return 'Antimage';
      case 'h314': return 'Bristleback';
      case 'h315': return 'Lycan';
      case 'h316': return 'Lone Druid';
      case 'h401': return 'Vengeful Spirit';
      case 'h402': return 'Invoker';
      case 'h403': return 'Alchemist';
      case 'h404': return 'Spectre';
      case 'h405': return 'Morphling';
      case 'h406': return 'Techies';
      case 'h407': return 'Chaos Knight';
      case 'h408': return 'Faceless Void';
      case 'h409': return 'Legion Commander';
      case 'h410': return 'Monkey King';
      case 'h411': return 'Razor';
      case 'h412': return 'Tinker';
      case 'h413': return 'Pangolier';
      case 'h414': return 'Dark Willow';

      case 'e101': return 'Devine';
      case 'e102': return 'Ruby';
      case 'e103': return 'Fireworks';
      case 'e104': return 'CrystalRift';
      case 'e105': return 'Cursed';
      case 'e106': return 'Poisonous';
      case 'e107': return 'Dire2012';
      case 'e108': return 'Dire2013';
      case 'e109': return 'EarthSpirit';
      case 'e110': return 'BlueStorm';
      case 'e111': return 'HappyTogether';
      case 'e112': return 'Gem';
      case 'e113': return 'Foggy';
      case 'e201': return 'Illusion';
      case 'e202': return 'KingGhosts';
      case 'e203': return 'Polycount';
      case 'e204': return 'BaneWard';
      case 'e205': return 'Fungal';
      case 'e206': return 'TI2012Blue';
      case 'e207': return 'TI2013Green';
      case 'e208': return 'TI2014Purple';
      case 'e209': return 'NeonButterfly';
      case 'e210': return 'WhirlingSparks';
      case 'e211': return 'Foggy';
      case 'e212': return 'Fantastic';
      case 'e301': return 'Highlight';
      case 'e302': return 'Shagbark';
      case 'e303': return 'Maiden';
      case 'e304': return 'Grass';
      case 'e305': return 'Blossoms';
      case 'e306': return 'Winter';
      case 'e307': return 'Lava';
      case 'e308': return 'FishBubble';
      case 'e309': return 'PurplePassion';
      case 'e310': return 'Snowfall';
      case 'e311': return 'VickedFlame';
      case 'e312': return 'FlyingCoins';
      case 'e313': return 'GloryTimes';
      case 'e314': return 'PurpleMeteor';
      case 'e315': return 'Nightmare';
      case 'e316': return 'Stars';
      case 'e317': return 'Love&Love';
      case 'e319': return 'ShiningStars';
      case 'e320': return 'Maelstrom';
      case 'e401': return 'RoshLava';
      case 'e402': return 'RoshFrost';
      case 'e403': return 'RoshGold';
      case 'e404': return 'RoshPlatinum';
      case 'e405': return 'Brilliant';
      case 'e406': return 'StarSapphire';
      case 'e407': return 'Sand&Rock';
      case 'e408': return 'DarkMoon';
      case 'e409': return 'Bloody';

      case 'a101': return 'Heal';
      case 'a102': return 'Evade';
      case 'a103': return 'Guard';
      case 'a105': return 'Revenge';
      case 'a201': return 'Sapphire';
      case 'a202': return 'Opal';
      case 'a203': return 'Diamond';
      case 'a204': return 'Ruby';
      case 'a205': return 'Emerald';
      case 'a206': return 'Aquamarine';
      case 'a207': return 'Topaz';
      case 'a208': return 'Amethyst';
      case 'a211': return 'Adjacent Swap';
      case 'a212': return 'StoneHenge';
      case 'a301': return 'Fast Shoot';
      case 'a302': return 'Crit';
      case 'a303': return 'Aim';
      case 'a304': return 'Hummer';
      case 'a306': return 'TimeLapse';
      case 'a307': return 'Fatal Bonds';
      case 'a308': return 'Ursol Whirl';
      case 'a401': return 'Swap';
      case 'a210': return 'Common Pray';
      case 'a305': return 'Flawless Pray';
      case 'a402': return 'Perfect Pray';
      case 'a403': return 'Candy Marker';

      default: return aObj.id.toString();
    }
  }
}

module.exports = ShopIndex;
