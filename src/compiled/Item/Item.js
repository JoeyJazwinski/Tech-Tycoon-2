'use strict';

var Item = function Item(props) {
    var displayItems = items.map(function (item, index) {
        return React.createElement(
            "div",
            { className: "itemContainer", key: index },
            React.createElement(
                "div",
                { className: "itemHighlights" },
                React.createElement("img", { className: "itemImage", src: "../../../art/sprites/moniter.png", height: "50", width: "50" }),
                React.createElement(
                    "span",
                    { className: "item itemName" },
                    item.name
                ),
                React.createElement(
                    "span",
                    { className: "item" },
                    "$",
                    item.price
                )
            ),
            React.createElement(
                "span",
                { className: "item" },
                item.description
            )
        );
    });

    return React.createElement(
        "div",
        { id: "itemsBox" },
        displayItems
    );
};

var domContainer = document.querySelector('#shopItems');
ReactDOM.render(React.createElement(Item, null), domContainer);