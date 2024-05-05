const Component = require('../lib/component.js')

class TaskListItem extends Component {
    constructor(children, priority = false) {
        super(children)
        this.priority = priority;
    }
    render() {
        let classNames ='tasks-item';
        if (this.priority) {
            classNames += ' tasks-item-priority';
        }
        return `<li class="${classNames}">${this.renderInnerHTML()}</li>`
    }
}

module.exports = TaskListItem;