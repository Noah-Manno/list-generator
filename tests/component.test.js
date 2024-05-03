const Component = require('../lib/component.js');

describe('Component', () => {
    it('should throw error if render() method is called', () => {
        const component = new Component();
        const error = new Error('Child class must implement render() method.')
        expect(component.render).toThrow(error);
    });
});