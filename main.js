var app = new Vue({
    el: '#root',
    data: {
        image: [
            'https://source.unsplash.com/random/200x880/?landscape',
            'https://source.unsplash.com/random/200x880/?landscape,city',
            'https://source.unsplash.com/random/200x880/?landscape,japann',
            'https://source.unsplash.com/random/200x880/?landscape,rome'
        ],
        setIndex: 0,
        skip: null,
    },
    methods: {
        nextImage: function(){
            if(this.setIndex == this.image.length-1){
                this.setIndex = 0
            } else {
                this.setIndex++
            }
        },
        previousImage: function(){
            if(this.setIndex == 0){
                this.setIndex = this.image.length-1
            } else{
                this.setIndex--
            }
        }
    },
    mounted(){
        this.skip = setInterval(this.nextImage, 3000)        
    }
}
)