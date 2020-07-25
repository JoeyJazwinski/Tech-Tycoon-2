'use strict';

const Item = (props) => {
    const displayItems = items.map((item, index) => {
        return (
            <div className="itemContainer" key={index}>
                <div className="itemHighlights">
                    <img className="itemImage" src="../../../art/sprites/moniter.png" height="50" width="50" />
                    <span className="item itemName">{item.name}</span>
                    <span className="item">${item.price}</span>
                </div>
                <span className="item">{item.description}</span>
            </div>        
        );
    });

    return (
        <div id="itemsBox">
            {displayItems}
        </div>
    );
};


const domContainer = document.querySelector('#shopItems');
ReactDOM.render(<Item />, domContainer);

