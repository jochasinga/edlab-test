Template.mocksList.helpers({
    mocks: function () {
        return Mocks.find();
    }
});

Template.mockItem.events({
    attributes: function() {
        if (count === 1) {
            return {
                "data--0-center-top": "opacity: 0; transform: translate(0px, 50px);",
                "data--100-center-top": "opacity: 0; transform: translate(0px, 50px);"
            }
        }
        else if (count === 2) {
            return {
                "data--50-center-top": "opacity: 0; transform: translate(0px, 50px);",
                "data--150-center-top": "opacity: 0; transform: translate(0px, 50px);"
            }
        }
        else if (count === 3) {
            return {
                "data--100-center-top": "opacity: 0; transform: translate(0px, 50px);",
                "data--200-center-top": "opacity: 0; transform: translate(0px, 50px);"
            }
        }
    }
});
