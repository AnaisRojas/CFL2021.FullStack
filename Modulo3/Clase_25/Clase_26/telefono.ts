

export default class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;
    private msg:boolean;
    private numero:number;

    public constructor(estaPrendido: boolean, bateriaActual: number, linternaPrendida: boolean) {
        
    };
    public getEstaPrendido(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        };
    };

    public getMandarMensaje(msg:boolean,numero:number):boolean{ 


    }

    public getHacerLlamada():void{

    }

    public getPrenderApagar():void{

    }


};