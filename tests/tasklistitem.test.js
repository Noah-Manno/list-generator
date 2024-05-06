const TaskListItem = require('../lib/tasklistitem.js')

describe('Task List Item', () => {
    it('should return the correct string of HTML when the render() method is called', () => {
        const text = 'Hello World'
        const html = `<li class="tasks-item">Hello World</li>`
        const item = new TaskListItem([text]);
        expect(item.render()).toEqual(html)
    });

    it('should render a priority task', () => {
        const text = "Goodbye World"
        const html = '<li class="tasks-item tasks-item-priority">Goodbye World</li>';
        const item = new TaskListItem([text], true)
        expect(item.render()).toEqual(html)
    })
});