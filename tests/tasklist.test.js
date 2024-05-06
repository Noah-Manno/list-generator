const TaskList = require('../lib/tasklist.js')
const TaskListItem = require('../lib/tasklistitem.js')
describe('Task List', () => {
    it('should render ul with tasks', () => {
       const taskItems = [
        new TaskListItem(['one']),
        new TaskListItem(['two'], true),
        new TaskListItem(['three'])
       ];
       const html = '<ul class="tasks"><li class="tasks-item">one</li><li class="tasks-item tasks-item-priority">two</li><li class="tasks-item">three</li></ul>'
       const list = new TaskList(taskItems);
       expect(list.render()).toEqual(html)
    });
});