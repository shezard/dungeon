var _ = require('lodash');

module.exports = function(friends, foes) {

  var index = 0;

  if(!friends[index] || !foes[index]) {
    return {
      friends: friends,
      foes: foes,
    }
  }

  while(friends[index].hp && foes[index].hp) {
    foes[index].hp -= friends[index].attack;

    if(foes[index].hp) {
      friends[index].hp -= foes[index].attack;
    }
  }

  return {
    friends: _.filter(friends, function(friend) {
      return friend.hp;
    }),
    foes: _.filter(foes, function(foe) {
      return foe.hp;
    })
  }

}
