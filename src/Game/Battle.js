var _ = require('lodash');

module.exports = function(friends, foes) {

  var friendIdx = 0;
  var foeIdx = 0;

  if(!friends[friendIdx] || !foes[foeIdx]) {
    return {
      friends: friends,
      foes: foes,
    }
  }

  while(friends[friendIdx].hp > 0 && foes[foeIdx].hp > 0) {
    foes[foeIdx].hp -= friends[friendIdx].attack;
    friends[friendIdx].hp -= foes[foeIdx].attack;

    if(friends[friendIdx].hp <= 0 && friends[friendIdx + 1]) {
      friendIdx += 1;
    }

    if(foes[foeIdx].hp <= 0 && foes[foeIdx + 1]) {
      foeIdx += 1;
    }
  }

  return {
    friends: _.filter(friends, function(friend) {
      return friend.hp > 0;
    }),
    foes: _.filter(foes, function(foe) {
      return foe.hp > 0;
    })
  }

}
