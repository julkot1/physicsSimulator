export default class Vector{
    constructor(color){
        this.color=color;
        this.lenght=0;
        this.lenghtFunction = ()=>0;
        this.show = true;
    }
    update(p, body){
       if(this.show){
            const {x,y} = body.position;
            this.lenght = this.lenghtFunction()
            p.push();
            p.noStroke();
            p.fill(this.color);
            p.translate(x,y)
            p.rotate(body.angle);
            p.rect(0,0, this.lenght, 4);
            if(this.lenght>0)p.triangle( this.lenght, -8, this.lenght, 10,this.lenght+10, 0);
            if(this.lenght<0)p.triangle( this.lenght, -8, this.lenght, 10,this.lenght-10, 0);
            p.pop();
       }
    }
    setLength(lenghtFunction){
        this.lenghtFunction = lenghtFunction;
    }
}