// const slides = [
//     {
//         image: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },
//     {
//         image: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum.',
//     },
//     {
//         image: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         image: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
//     },
//     {
//         image: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
//     }
// ];

//-----------------------
//VueJS
//-----------------------

var app = new Vue(
    {
        el:'#app',
        data:{
            currentItem: 0,
            slideClock: null,
            slides:[
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
        },
        methods:{
            showNextElement: function(){
                //incremento la variabile che tiene la posizione della slide fino a quando non arriva alla fine, in quel caso la resetto a 0
                if (this.currentItem >= this.slides.length -1){
                    this.currentItem = 0;
                } else {
                    this.currentItem++;
                }
            },
            previousNextElement: function(){
                //come showNextElement, ma al contrario
                if (this.currentItem <= 0){
                    this.currentItem = this.slides.length - 1;
                } else {
                    this.currentItem--;
                }
            },
            thumbClick: function(currentIndex){
                //Imposto la variabile che tiene la posizione della slide con l'indice dell'immagine che ho cliccato
                this.currentItem = currentIndex;
            },
            startSlideClock: function(){
                this.slideClock = setInterval(this.showNextElement, 3000);
            },
            stopSlideClock: function(){
                //stoppo lo slider automatico
                clearInterval(this.slideClock);
            }
        },
        mounted: function(){
            //inizializzo lo slider automatico, ogni 3 secondi
            this.startSlideClock();
        }
    }
);
