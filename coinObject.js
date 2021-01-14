const coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2) 
    },
    toString: function() {
        let coinSide = 'Heads';
        
        if(coin.state === 1){
            coinSide = 'Tails';
        }
        
        return coinSide;
    },
    toHTML: function() {
        const image = document.createElement('img');
        let getImagePath = 'images/coinHead.png';
        if(this.state === 1){
            getImagePath = 'images/coinTails.png';
        }
        image.setAttribute('src',getImagePath);
        return image;
    }
};

function display20Flips() {
    const results = [];
    for(let i = 1; i <= 20; i++){
        coin.flip();
        const textContainer = document.createElement('p')
        textContainer.innerText = coin.toString();
        results.push(coin.state);
        document.body.appendChild(textContainer);
    }
    return results;
}

function display20Images() {
    const results = [];
    for(let i = 1; i <= 20; i++){
        coin.flip();
        results.push(coin.state);
        document.body.appendChild(coin.toHTML());
    }
    return results;
}

display20Flips();
display20Images();