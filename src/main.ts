type Name = 'Wiggles'| 'Scrappy' | 'Munch';
type Type = 'Duck' | 'Rabbit' | 'Cat';

class Tamagotchi {

    private tamaHunger: number;
    private tamaHappy: number;
    public tamaName: string;
    public  tamaType: string;

    constructor(
        // public readonly tamaName: string,
        // public  tamaType: string,
    ){

        this.createTama();

        this.tamaName = this.randomName();
        this.tamaType = this.randomType();
        
        const h2TamaName = document.querySelector('#tamaName');
        h2TamaName.textContent = this.tamaName;

        const h4TamaType = document.querySelector('#tamaType');
        h4TamaType.textContent = this.tamaType;

        const tamaImg:HTMLImageElement = document.querySelector('#tamaImg');
        tamaImg.src = this.checkimg();

        setInterval(this.setHunger.bind(this), 10000);
        this.tamaHunger = 5;
        this.updateHunger();

        setInterval(this.setHappy.bind(this), 10000);
        this.tamaHappy = 5;
        this.updateHappy();
    } 
    //FUNKTIONER
    //Funktion för random namn
    public randomName(): Name {
        const random = Math.round(Math.random()*2);
        
        console.log(random);
        
        if(random === 0){
            return 'Wiggles';
        }else if(random === 1){
            return 'Scrappy';
        }else{
            return 'Munch';
        }
    }
    //Funktion för random type
    public randomType(): Type {
        const random = Math.round(Math.random()*2);
        
        console.log(random);
        
        if(random === 0){
            return 'Duck';
        }else if(random === 1){
            return 'Rabbit';
        }else{
            return 'Cat';
        }
    }

    //Funktion för hunger
    setHunger(){
        this.tamaHunger++;

        if(this.tamaHunger>=10){
            alert(`${this.tamaName} the ${this.tamaType} been taken away cause of neglect`);
            location.reload();
        }else{
            console.log('Hunger ökar: ', this.tamaHunger);
            
            this.updateHunger();
            
            return this.tamaHunger;
        }
    }
    //Funktion för Happy
    setHappy(){
        this.tamaHappy--;

        if(this.tamaHappy<=0){
            alert(`${this.tamaName} the ${this.tamaType} ran away cause of neglect`);
            location.reload();
        }else{
            console.log('Happy sjunker: ', this.tamaHappy);
            
            this.updateHappy();

            return this.tamaHappy;
        }
    }

    //Funktion för användaren
    giveFood(){
        if(this.tamaHunger<=0){
            console.log('sluta');
        }else{
            this.tamaHunger--;
            console.log('Give Food: ',this.tamaHunger);
    
            this.updateHunger();
            this.checkColorHunger();
        }       
    }

    play(){
        if(this.tamaHappy>=10){
            console.log('sluta');
        }else{
            this.tamaHappy++;
            console.log('Play with: ',this.tamaHappy);
    
            this.updateHappy();
            this.checkColorHappy();
        }
    }

    //Uppdatera STATS
    updateHappy(){
        
        const pHappy = document.querySelector('#happy');
        pHappy.textContent = '🏐' + this.tamaHappy.toString();

        this.checkColorHappy();
    }
    updateHunger(){
        const pHunger = document.querySelector('#hunger');
        pHunger.textContent = '🥪' + this.tamaHunger.toString();

        this.checkColorHunger();
    }

    //Skapa alla TamaElements
    createTama(){
        const section = document.querySelector('section');

        const tamaDiv = document.createElement('div');
        const tamaInfo = document.createElement('div');
        const h4TamaName = document.createElement('h4');
        const h4TamaType = document.createElement('h4');
        const tamaImg = document.createElement('img');
        const pHunger = document.createElement('p');
        const pHappy = document.createElement('p');
        const buttonFeed = document.createElement('button');
        const buttonPlay = document.createElement('button');

        tamaDiv.id = 'tamaDiv';
        tamaInfo.id = 'tamaInfo';
        h4TamaName.id = 'tamaName';
        h4TamaType.id = 'tamaType';
        tamaImg.id = 'tamaImg';
        pHunger.id = 'hunger';
        pHappy.id = 'happy';
        buttonFeed.id = 'feed';
        buttonPlay.id = 'play';

        buttonFeed.innerText = 'FEED';
        buttonPlay.innerText = 'PLAY';

        section.appendChild(tamaDiv);
        tamaDiv.appendChild(tamaInfo);
        tamaInfo.appendChild(h4TamaName);
        tamaInfo.appendChild(h4TamaType);
        tamaInfo.appendChild(tamaImg);
        tamaInfo.appendChild(pHunger);
        tamaInfo.appendChild(pHappy);
        tamaDiv.appendChild(buttonFeed);
        tamaDiv.appendChild(buttonPlay);
        
    }

    checkimg(){
        console.log(this.tamaType)
        if(this.tamaType == 'Duck'){
            return 'img/duck.png'
        }else if(this.tamaType == 'Rabbit'){
            return 'img/rabbit.png'
        }else{
            return 'img/cat.png'
        }
    }

    checkColorHunger(){
        const pHunger:HTMLElement = document.querySelector('#hunger');
        if(this.tamaHunger >= 7){
            pHunger.style.color = 'red';
        }else if(this.tamaHunger <= 3){
            pHunger.style.color = 'green';
        }else{
            pHunger.style.color = 'black';
        }
    }

    checkColorHappy(){
        const pHappy:HTMLElement = document.querySelector('#happy');
        if(this.tamaHappy <= 3){
            pHappy.style.color = 'red';
        }else if(this.tamaHappy>= 7){
            pHappy.style.color = 'green';
        }else{
            pHappy.style.color = 'black';
        }
    }
}

const tama1 = new Tamagotchi();
console.log(tama1.tamaName, tama1.tamaType);

const btn:HTMLButtonElement = document.querySelector('#feed');
btn.addEventListener("click", ()=>
{
    tama1.giveFood();
});

const btn2:HTMLButtonElement =document.querySelector('#play');
btn2.addEventListener('click', ()=> {
    tama1.play();
});

