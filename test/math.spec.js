const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
    //hooks - eviar repetição

    beforeEach(function(){
        value = 0;
    })

    it('Soma dois numeros', function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        })
     // equal significa validar      
    });

    it('Muliplique dois numeros', function(){ // only - somente este teste, skip - pula este teste.
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });
});