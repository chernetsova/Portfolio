const fieldItem = {
    props: ['numb'],
    computed: {
        isVisible(){
            return this.numb.number !== 0
        }
    },
    template: `
                <button 
                class="btn" 
                v-if="isVisible" 
                @click="$emit('moveItem', numb)">{{numb.number}}</button>
            `
};

const field = {
    data(){
        return {
            rowsField: 4,
            colsField: 4,
            numbs: [],
            coords: [],
            btn: [],
            winSteps: new Set()
        }
    },
    components: {
        fieldItem
    },
    methods:{
        createNumbs(){

            let amountField = this.rowsField * this.colsField;
            while (this.numbs.length < amountField) {

                const el = Math.floor(Math.random() * amountField);
                const point = {
                    x: Math.floor(Math.random()  * (this.rowsField+1 - 1) + 1),
                    y: Math.floor(Math.random() * (this.rowsField+1 - 1) + 1)
                };
                if (!this.numbs.some(numb => el === numb) && !this.coords.some(exPoint => point.x === exPoint.x && point.y === exPoint.y))
                {
                    this.numbs.push(el);
                    this.coords.push({x: point.x, y: point.y});
                    this.btn.push({number: el, x: point.x, y: point.y});
                }

            }

        },
        moveItem(numb){

            for(let item of this.btn){
                if(item.number === 0){
                    if(Math.abs(numb.x - item.x) + Math.abs(numb.y - item.y) !== 1) return;
                    item.number = numb.number;
                    numb.number = 0;

                }
            }


            setInterval(() => {
                const cellFifteen = document.getElementsByClassName("cell-fifteen");
                for(let i=0; i<cellFifteen.length; i++){
                    if(i == +cellFifteen[i].innerText-1){
                        this.winSteps.add(cellFifteen[i].innerText);
                    }
                    else{
                        this.winSteps.delete(cellFifteen[i].innerText);
                    }
                }
                this.$parent.$refs.win.steps=this.winSteps.size;

                console.log(this.winSteps);

            },100);

        }

    },
    mounted(){
        this.createNumbs();
    },
    template: `
                <table class="table">
                    <tbody>
                        <tr v-for="row in rowsField">
                            <td v-for="cols in colsField" class="cell-fifteen">
                                <fieldItem 
                                v-for="numb of btn" 
                                :key="numb.number" 
                                :numb="numb"
                                v-if="numb.x===row && numb.y===cols"
                                @moveItem="moveItem"></fieldItem>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `
};

export default field;