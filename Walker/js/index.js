"use strict";

// ----- Const ----

const setUp = {
    rowsField: 5,
    colsField: 5,
    defaultPositionX: 2,
    defaulPositionY: 2,
    defaultDirection: 'right',
};

const girl = {
    x: null,
    y: null,
    direction: null,
    imgs:{default: 'img/girl.png', win: 'img/girlWin.png'},
    imgSrc: null,
    count: 0,
    status: 'play',

    getCoordinates(){
        return{
            x: this.x,
            y: this.y
        };
    },

    setCoordinates(point){
        this.x = point.x,
            this.y = point.y
    },

    init(startX, statrtY, statrtDirection){
        this.x = startX;
        this.y = statrtY;
        this.direction = statrtDirection;
    },

    makeStep(){
        const nextPoint = this.getNextPoint();

        this.x = nextPoint.x;
        this.y = nextPoint.y;

    },

    getNextPoint(){
        const point = {
            x: this.x,
            y: this.y
        };
        switch(this.direction){
            case 'up':
                point.y--;
                break;
            case 'down':
                point.y++;
                break;
            case 'right':
                point.x++;
                break;
            case 'left':
                point.x--;
                break;
            case 'upleft':
                point.x--; point.y--;
                break;
            case 'downleft':
                point.x--; point.y++;
                break;
            case 'downright':
                point.x++; point.y++;
                break;
            case 'upright':
                point.x++; point.y--;
                break;
        }
        return point;
    },

    toogleImg(){
        switch (this.status){
            case 'play': return this.imgSrc = this.imgs.default;
            case 'win': return this.imgSrc = this.imgs.win;
            default: return this.imgSrc = this.imgs.default;
        }
    },
};

const woolf = {
    x: null,
    y: null,
    imgs:{default: "img/woolf.png", win: "img/woolfWin.png"},
    imgSrc: null,
    styleWin: '#ac000e',
    count: 0,
    status: 'play',

    getCoordinates(){
        return[{
            x: this.x,
            y: this.y
        }];
    },

    setCoordinates(point){
        this.x = point.x,
            this.y = point.y
    },

    init(startX, statrtY){
        this.x = startX;
        this.y = statrtY;
    },

    toogleImg(){
        switch (this.status){
            case 'play': return this.imgSrc = this.imgs.default;
            case 'win': return this.imgSrc = this.imgs.win;
            default: return this.imgSrc = this.imgs.default;
        }
    },
};

const pies = {
    x: null,
    y: null,
    img: 'img/pies.png',
    cells: null,

    getCoordinates(){
        return[{
            x: this.x,
            y: this.y
        }];
    },

    setCoordinates(point){
        this.x = point.x,
            this.y = point.y
    },

    init(startX, statrtY){
        this.x = startX;
        this.y = statrtY;
    }

};

const game = {
    setUp,
    girl,
    woolf,
    pies,
    containerElement: null,
    cellsElement: null,
    cellsGirl: null,

    run(){
        this.init();
        this.render();

        setInterval(() => {
            if(this.canGirlStep()){
            this.girl.makeStep();
            this.render();
        }
    }, 500);
    },

    init(){
        this.girl.init(
            this.setUp.defaultPositionX,
            this.setUp.defaulPositionY,
            this.setUp.defaultDirection);

        this.woolf.setCoordinates(this.getFreeCoordinates());

        this.pies.setCoordinates(this.getFreeCoordinates());

        this.containerElement = document.getElementById('field-game');

        this.initCells();

        this.initEventHandlers();

    },

    getFreeCoordinates(){
        const exclude = [this.girl.getCoordinates(), ...this.woolf.getCoordinates(), ...this.pies.getCoordinates()];
        while (true) {
            const rndPoint = {
                x: Math.floor(Math.random() * this.setUp.defaultPositionX),
                y: Math.floor(Math.random() * this.setUp.defaulPositionY)
            };
            if(!exclude.some(exPoint => rndPoint.x === exPoint.x && rndPoint.y === exPoint.y)){
                return rndPoint;
            }
        }
    },

    initCells(){
        this.containerElement.innerHtml = '';
        this.cellsElement = [];
        this.cellsGirl = [];
        for (var row = 0; row < this.setUp.rowsField; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);
            for (var cols = 0; cols < this.setUp.colsField; cols++) {
                const td = document.createElement('td');
                if(row === this.woolf.y && cols === this.woolf.x){
                    this.cellsElement[`xWoolf=${this.woolf.x}_yWoolf=${this.woolf.y}`]=td;
                }
                else if(row === this.girl.y && cols === this.girl.x){
                    this.cellsElement[`xGirl=${this.girl.x}_yGirl=${this.girl.y}`]=td;
                }
                else if(row === this.pies.y && cols === this.pies.x){
                    this.cellsElement[`xPies=${this.pies.x}_yPies=${this.pies.y}`]=td;
                }
                tr.appendChild(td);

            }
        }
    },

    initEventHandlers(){
        document.addEventListener('keydown', event => this.keyDownHandler(event));
    },

    keyDownHandler(event){
        switch(event.code){
            case('ArrowUp'):
                return this.girl.direction = 'up';
                break;
            case('ArrowDown'):
                return this.girl.direction = 'down';
                break;
            case('ArrowLeft'):
                return this.girl.direction = 'left';
                break;
            case('ArrowRight'):
                return this.girl.direction = 'right';
                break;
            case('KeyA'):
                return this.girl.direction = 'upleft';
                break;
            case('KeyZ'):
                return this.girl.direction = 'downleft';
                break;
            case('KeyX'):
                return this.girl.direction = 'downright';
                break;
            case('KeyD'):
                return this.girl.direction = 'upright';
                break;
        }
    },

    canGirlStep(){
        const nextPoint = this.girl.getNextPoint();

        return nextPoint.x >= 0 &&
            nextPoint.x < this.setUp.colsField &&
            nextPoint.y  >= 0 &&
            nextPoint.y < this.setUp.rowsField;
    },

    isWin(){
        return this.girl.x === this.pies.x && this.girl.y === this.pies.y;
    },

    isLosin(){
        return this.girl.x === this.woolf.x && this.girl.y === this.woolf.y;
    },

    renderGirl(){
        const GirlImg = document.createElement('img');
        GirlImg.src = this.girl.imgSrc;

        const GirlCell = this.containerElement.rows[`${this.girl.y}`].cells[`${this.girl.x}`];
        GirlCell.appendChild(GirlImg);
        this.cellsElement[`xGirl=${this.girl.x}_yGirl=${this.girl.y}`] = GirlCell;
    },

    renderWoolf(){
        const woolflImg = document.createElement('img');
        woolflImg.src = this.woolf.imgSrc;

        const woolfCell = this.containerElement.rows[`${this.woolf.y}`].cells[`${this.woolf.x}`];
        woolfCell.appendChild(woolflImg);
        this.cellsElement[`xWoolf=${this.woolf.x}_yWoolf=${this.woolf.y}`] = woolfCell;
    },

    renderPies(){
        const piesImg = document.createElement('img');
        piesImg.src = this.pies.img;

        const piesCell = this.containerElement.rows[`${this.pies.y}`].cells[`${this.pies.x}`];
        piesCell.appendChild(piesImg);
        this.cellsElement[`xWoolf=${this.pies.x}_yWoolf=${this.pies.y}`] = piesCell;
    },

    getStatusGame(){
        if(this.isWin()){
            this.girl.status = 'win';
            this.girl.toogleImg();
            this.girl.count += 6;
            this.renderWoolf();
            this.renderGirl();
            this.woolf.setCoordinates(this.getFreeCoordinates());
        }
        else if (this.isLosin()){
            this.woolf.status = 'win';
            this.woolf.toogleImg();
            this.woolf.count += this.girl.count;
            this.girl.count = 0;
            this.renderWoolf();
            this.renderPies();
            this.woolf.setCoordinates(this.getFreeCoordinates());
            this.pies.setCoordinates(this.getFreeCoordinates());
        }
        else{
            this.girl.status = 'play';
            this.woolf.status = 'play';
            this.girl.toogleImg();
            this.woolf.toogleImg();
            this.renderGirl();
            this.renderWoolf();
            this.renderPies();
        }
    },

    cleanRender(){
        for(var key in this.cellsElement){
            if(this.cellsElement[key].innerHTML.length > 0){
                this.cellsElement[key].innerHTML = "";
            }
        }
    },

    render(){
        this.cleanRender();
        this.getStatusGame();

        const CountGirl = document.getElementById('countGirl');
        CountGirl.innerHTML = this.girl.count;

        var CountWoolf = document.getElementById('countWoolf');
        CountWoolf.innerHTML = this.woolf.count;
    },
};

window.addEventListener('load', () => game.run());