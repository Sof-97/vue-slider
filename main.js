var app = new Vue({
    el: '#root',
    data: {
        image: [
            'https://source.unsplash.com/random/1920x1080/?landscape',
            'https://source.unsplash.com/random/1920x1080/?landscape,city',
            'https://source.unsplash.com/random/1920x1080/?landscape,japann',
            'https://source.unsplash.com/random/1920x1080/?landscape,rome'
        ],
        setIndex: 0,
        clock: null,
    },
    methods: {
        clockBoom: function(){
            this.clock = setInterval(this.nextImage, 3000)
        },
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
        },
        select: function(i){
            this.setIndex = i
            clearInterval(this.clock)
            this.clockBoom()
        }
    },
    mounted(){
        this.clockBoom()
    }
}
)