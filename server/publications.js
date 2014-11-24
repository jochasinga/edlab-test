Meteor.publish('mocks', function() {
    return Mocks.find();
});
