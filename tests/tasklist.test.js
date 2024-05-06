const TaskList = require('../lib/tasklist.js')

describe('Task List', () => {
    it('should return the correct string of HTML when the render() method is called', () => {
        const text = 'Hello World'
        const html = `<li class="tasks-item">Hello World</li>`
        const item = new TaskListItem([text]);
        expect(item.render()).toEqual(html)
    });
});