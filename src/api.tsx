
export interface IComment {
id: string,
body: string,
username: string,
userId: string,
parentId: string,
createdAt: string,
currentId?: string
}

export const ApiComments = async () => {
    return ( 
        [
            {
                'id': '151e346',
                'body': 'First comment',
                'username': 'Jack',
                // 'userId': '151e346',
                'parentId': null,
                'createdAt': '2021-08-16T23:00:33.010+02:00'
            },
            {
                'id': '4164d62',
                'body': 'Second comment',
                'username': 'John',
                // 'userId': '4164d62',
                'parentId': null,
                'createdAt': '2021-08-16T23:00:33.010+02:00'
            },
            {
                'id': '20453c8',
                'body': 'First comment first child',
                'username': 'John',
                // 'userId': '4164d62',
                'parentId': '151e346',
                'createdAt': '2021-08-16T23:00:33.010+02:00'
            },
            {
                'id': '130b303',
                'body': 'Second comment second child',
                'username': 'John',
                // 'userId': '4164d62',
                'parentId': '4164d62',
                'createdAt': '2021-08-16T23:00:33.010+02:00'
            },
            {
                'id': '151e3465',
                // 'id': '20453c8',
                'body': 'Third comment',
                'username': 'Pavlo',
                // 'userId': '151e3465',
                // 'parentId':'151e346',
                'parentId': '20453c8',
                // 'parentId': '130b303',
                'createdAt': '2021-08-16T23:00:33.010+02:00'
            },
            {
                'id': '151e3466',
                // 'id': '20453c8',
                'body': 'Fourth comment',
                'username': 'ИванушкО',
                // 'userId': '151e3465',
                // 'parentId':'151e346',
                'parentId': '151e3465',
                // 'parentId': '130b303',
                'createdAt': '2021-08-16T23:00:33.010+02:00'
            },
        ]
    );
}
 
// export default Api;