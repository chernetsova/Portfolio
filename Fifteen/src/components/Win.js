import salute from '../img/salute.gif'

const win = {
    data(){
        return{
            steps: 0,
            salute
        }
    },
    computed:{
        isVisible(){
            return this.steps === 15
        }
    },
    methods: {
        refresh(){
            this.steps = 0;
            this.$parent.$refs.field.numbs = [];
            this.$parent.$refs.field.coords = [];
            this.$parent.$refs.field.btn = [];
            this.$parent.$refs.field.winSteps.clear();
            this.$parent.$refs.field.createNumbs();
        }
    },
    template: `
                <div class="win-block" v-if="isVisible">
                    <h2 class="win-title">Вы победили !</h2>
                    <div class="win-img__block">
                        <img :src="salute" class="img-responsive" alt=""/>
                    </div>
                    <div class="win-btn__block">
                        <button class="win-btn" @click="refresh">Сыграть ешё раз</button>
                    </div>
                </div>
                `
};

export default win;