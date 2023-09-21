const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator
    it('should return 3', () => {
        return expect(calc(3).v).to.equal(3);
    });

    it('should return 8 as the sum for 3 plus 5', () => {
        return expect(calc(3).add(5).v).to.equal(8);
    });

    it('should return 1 as the difference for 3 minus 2', () => {
        return expect(calc(3).minus(2).v).to.equal(1);
    });

    it('should return 2 as the root of 4', () => {
        return expect(calc(4).sqrt().v).to.equal(2);
    });

    it('should return 30 as the product of 3 times 10', () => {
        return expect(calc(3).times(10).v).to.equal(30);
    });

    it('should return 5 as the fraction of 10 divided by 2', () => {
        return expect(calc(10).divide(2).v).to.equal(5);
    });

    it('should return 0 as the remainder of 10 mod 5', () => {
        return expect(calc(10).modulo(5).v).to.equal(0);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => calc(5).divide(0)).to.throw('Division by 0 is not possible!');
    });

    it('should throw an error when calculating square root of a negative number', () => {
        expect(() => calc(-3).sqrt()).to.throw('Square root of a negative value cannot be determined!');
    });

    it('should return 24 as the result for 3 plus 4 minus 3 times 6', () => {
        return expect(calc(3).add(4).minus(3).times(6).v).to.equal(24);
    });
});