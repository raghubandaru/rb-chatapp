const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Raghu',
            room: 'Node course'
        }, {
            id: '2',
            name: 'Pruthvi',
            room: 'React course'
        }, {
            id: '3',
            name: 'Prasad',
            room: 'Node course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '1234',
            name: 'Raghu',
            room: 'The coders'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove an user if id exists', () => {
        var res = users.removeUser('1');
        
        expect(res).toNotContain(users.users);
        expect(users.users.length).toBe(2);
    });

    it('should not remove an user if id doesn\'t exist', () => {
        var res = users.removeUser('22');

        expect(res).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user if id exists', () => {
        var res = users.getUser('3');

        expect(res.name).toBe('Prasad');
    });

    it('should return empty if id doesn\'t exist', () => {
        var res = users.getUser('4');

        expect(res).toNotExist();
    });

    it('should return names for Node course', () => {
        var userList = users.getUserList('Node course');

        expect(userList).toEqual(['Raghu', 'Prasad']);
    });
    
    it('should return names for React course', () => {
        var userList = users.getUserList('React course');

        expect(userList).toEqual(['Pruthvi']);
    });
});