const Header = require('../lib/header.js')
const { formatDate } = require('../lib/date.js')

describe('Header', () => {
    it('should return the correct string of HTML when the render() method is called', () => {
        const html = `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`
        const header = new Header();
        expect(header.render()).toEqual(html)
    });
});