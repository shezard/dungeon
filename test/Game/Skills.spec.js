var Skills = require('../../src/Game/Skills');

describe('Skills', function() {

  it('should trigger error on invalid skill id', function() {

    var skills = Skills();

    expect(function() {
      skills.addTo({
        skills: ['invalid skills']
      });
    }).toThrow(new Error('invalid skill id: invalid skills'));

  });

});
