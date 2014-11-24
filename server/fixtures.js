if (Mocks.find().count() === 0) {
    Mocks.insert({
        count: 1,
        title: 'Mock #1',
        url: 'http://mock-1.com',
        likes: 0,
        comments: 0
    });

    Mocks.insert({
        count: 2,
        title: 'Mock #2',
        url: 'http://mock-2.com'
        likes: 0,
        comments: 0
    });

    Mocks.insert({
        count: 3,
        title: 'Mock #3',
        url: 'http://mock-3.com',
        likes: 0,
        comments: 0
    });
}



