export default class TelefonoConCamara{
    private camara:boolean;
    private botonCamara:boolean;
    constructor(){

    };

    public getCamara():void{
        if (this.camara) {
            this.camara = false;
        } else {
            this.camara = true;
        };
    };

    public getBotonCamara():void{
        if (this.botonCamara){
            this.botonCamara=false;
        }else{
            this.botonCamara=true;
        };
    };

    public getSacarFoto():void{
       while(this.camara==true){
        if(this.botonCamara==true){
            console.log("Has capturado un momento");
        }

        }

    };

};