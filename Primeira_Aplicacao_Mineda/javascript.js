new Vue({
    el: '#app',
    data: {
    message: '',
    lista: [],
    cont: 0
    },
    
    methods: {
        Pega_dado(event){
            this.message=event.target.value;
        },
        insereLista() {
        if (this.message.length>0){
            this.lista.push(this.message);
        }
        else{
            alert('Digite algo para inserir na lista');
        }
        
        },
        clickDelete(index){
            elemento=this.lista[index];
            for (var i = 0;i<this.lista.length;i++){
                if(index==0){
                    this.lista.splice(0,1);
                    break;
                }
                if (this.lista[i]==elemento){
                    this.lista.splice(i,i);
                    break;
                }
            }
        }
    }
})