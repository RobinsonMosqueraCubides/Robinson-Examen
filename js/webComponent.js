export class pagina2 extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.selecionador();
        this.contador = 1;
        this.suma = 0;
        this.array2 =['Aplicación Android','Aplicación iOS','Aplicación Windows Phone','Aplicación Android + iOS'];
        this.array3 =['Interfaz sencilla','Interfaz personalizada','Interfaz replicada de la web', 'No necesito diseño'];
        this.array4 = ['Aplicación gratuita con publicidad','Aplicación de pago','Compras dentro de la app','Otros / No lo sé todavía'];
        this.array5 =['Sí, con redes sociales y email','Sí, con email','No','No lo sé todavía'];
    }
    render(){
        this.innerHTML=`
        <style>@import url(../css/webComponent.css);</style><section class = "contenedor"><section class = "titulo"><h1 id="pregunta">Que nivel de calidad estas buscando?</h1></section><br>
        <section class = "card"><div id="img1"><img src="storage/image/answer-1-1.png" alt=""><p id="txt1">Calidad optima</p></div><div id="img2"><img src="storage/image/answer-1-2.png" alt=""><p id="txt2">Buena relacion calidad/precio</p></div><div id="img3"><img src="storage/image/answer-1-3.png" alt=""><p id="txt3">no me importa la calidad</p></div><div id="img4"></div></section></section>`
    }
    selecionador(){
        
        this.querySelector('#img1').addEventListener('click',()=>{
            this.sumador('img1');
            this.creador();
        })
        this.querySelector('#img2').addEventListener('click',()=>{
            this.sumador('img2');
            this.creador();
        })
        this.querySelector('#img3').addEventListener('click',()=>{
            this.sumador('img3');
            this.creador();
        })
        this.querySelector('#img4').addEventListener('click',()=>{
            this.sumador('img4');
            this.creador();
        })
    }
    creador(){
        this.contador +=1;
        if (this.contador == 5){
            this.paginaFinal();
        }else{
        let name1, name2, name3, name4;
        switch (this.contador) {
            case 2:
                name1 = this.array2[0];
                name2 = this.array2[1];
                name3 = this.array2[2];
                name4 = this.array2[3];
                break;
            case 3:
                name1 = this.array3[0];
                name2 = this.array3[1];
                name3 = this.array3[2];
                name4 = this.array3[3];
                break;
            case 4:
                name1 = this.array4[0];
                name2 = this.array4[1];
                name3 = this.array4[2];
                name4 = this.array4[3];
                break;
            case 5:
                name1 = this.array5[0];
                name2 = this.array5[1];
                name3 = this.array5[2];
                name4 = this.array5[3];
                break;
            default:
                break;
        }
        let imagen1=this.querySelector('#img1');
        let imagen2=this.querySelector('#img2');
        let imagen3=this.querySelector('#img3');
        let imagen4=this.querySelector('#img4');
        imagen1.innerHTML=`<img src="storage/image/answer-${this.contador}-1.png" alt=""><p>${name1}</p>`;
        imagen2.innerHTML=`<img src="storage/image/answer-${this.contador}-2.png" alt=""><p>${name2}</p>`;
        imagen3.innerHTML=`<img src="storage/image/answer-${this.contador}-3.png" alt=""><p>${name3}</p>`;
        imagen4.innerHTML=`<img src="storage/image/answer-${this.contador}-4.png" alt=""><p>${name4}</p>`;
    }
    }
    sumador(z){
        let nombre = this.querySelector(`#${z}`);
        let y = nombre.querySelector('p').textContent;
        switch (y) {
            case 'Calidad optima':
                this.suma +=300000;
                break;
            case 'Buena relacion calidad':
                this.suma +=380000;
                break
            case 'no me importa la calidad':
                this.suma +=200000;
                break
            case this.array2[0]:
                this.suma +=200000;
                break
            case this.array2[1]:
                this.suma +=300000;
                break
            case this.array2[2]:
                this.suma +=800000;
                break
            case this.array2[3]:
                this.suma +=350000;
                break
            case this.array3[0]:
                this.suma +=500000;
                break
            case this.array3[1]:
                this.suma +=100000;
                break
            case this.array3[2]:
                this.suma +=800000;
                break
            case this.array3[3]:
                this.suma +=300000;
                break
            case this.array4[0]:
                this.suma +=600000;
                break
            case this.array4[1]:
                this.suma +=100000;
                break
            case this.array4[2]:
                this.suma +=200000;
                break
            case this.array4[3]:
                this.suma +=3500000;
                break       
            case this.array5[0]:
                this.suma +=200000;
                break
            case this.array5[1]:
                this.suma +=1500000;
                break
            case this.array5[2]:
                this.suma +=0;
                break
            case this.array5[3]:
                this.suma += 3500000;
                break
            default:
                break;
        }
    }
    paginaFinal(){
        let cont = this.querySelector('.contenedor');
        cont.innerHTML = `<h3>El costo estimado de tu app es</h3><br><h1>${this.suma}</h1><br><br><button id="btnTerminar">Empezar</button>`
    }

}
customElements.define('mi-componenete',pagina2);