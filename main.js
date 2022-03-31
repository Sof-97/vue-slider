var app = new Vue({
    el: '#root',
    data: {
        image: [
            'https://source.unsplash.com/random/1520x880/?landscape',
            'https://source.unsplash.com/random/1520x880/?landscape,city',
            'https://source.unsplash.com/random/1520x880/?landscape,japann',
            'https://source.unsplash.com/random/1520x880/?landscape,rome'
        ],
        setIndex: 0,
        skip: null,
    },
    methods: {
        autoSkip: function() {
            this.skip = setInterval(checkImage, 1000)
        },

        checkImage: function(){
            if(setIndex == this.image.lenght-1){
                setIndex = 0; 
            } else {
                setIndex++
            }
            console.log(Skip);
        }

        
    }
}
)