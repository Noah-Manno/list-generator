const Component = require('../lib/component.js')
const { formatDate } = require('../lib/date.js')

class Header extends Component {
    constructor(children) {
        super(children)
        this.date = formatDate(new Date())
    }
    render() {
        return `<header class="header"><h1>Todo Today</h1><p>${this.date}</p></header>`
    }
}

module.exports = Header;
