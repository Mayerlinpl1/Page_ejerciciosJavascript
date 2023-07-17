class Numeros{
    vuelto(){
        let cant= document.getElementById("cant").value
        let precio= document.getElementById("precio").value
        let pago= document.getElementById("pago").value
        let resp= document.getElementById("resp")
        let checkbox = document.getElementById('checkRobot')
        let isChecked = checkbox.checked
        let costo= document.getElementById("costo")
        let costoTo= document.getElementById("costoTo")
        let vuelto= document.getElementById("vuelto")
        let iva= document.getElementById("iva")
        console.log(cant)
        cant= parseInt(cant)
        precio= parseFloat(precio)
        pago= parseInt(pago)
        costo=parseFloat(costo)
        costoTo=parseFloat(costoTo)
        vuelto=parseFloat(vuelto)
        iva=12

        costo= cant+precio
        if (isChecked) {
            iva=(costo+costo*0.12)
            costoTo= (costo+iva)
            vuelto= Math.round(costoTo-pago)
        }
        else{
            vuelto=(pago-costo)
        }
        resp.textContent=`El vuelto es $ ${vuelto}`
    
    }
    multiplo(){
        let num= document.getElementById("num").value
        let mul= document.getElementById("multi").value
        let resp= document.getElementById("resp")
       // console.log(resp.textContent)
        num= parseInt(num)
        mul= parseInt(mul)
        if (num% mul==0) {
        resp.textContent = `${mul} es múltiplo de ${num}`
        } else {
            resp.textContent= `${mul} no es múltiplo de ${num}`
        }
    }
    
    divisores(){
        let c=1
        let nume= document.getElementById("nume").value
        let resp= document.getElementById("resp")
        console.log(nume)
        console.log(resp)
        let divisores=""
        nume= parseInt(nume)
        while(c< nume){
            if (nume %c==0){
                divisores=divisores+ "  " +c.toString()
            }
            c=c+1
        }
        resp.textContent=`Los divisores son: ${divisores}`

    }
    sumaDivisores(){
        let numb= document.getElementById("numb").value
        let resp= document.getElementById("resp")
        console.log(numb)
        console.log(resp)

        let divisores= ""
        numb=parseInt(numb)
        let c=1
        let acu= 0
        while(c< numb){
            if (numb % c ==0){
                acu=acu+c
                divisores=divisores+ " " +c.toString()
            }
            c=c+1
        }
        resp.textContent=`La suma de divisores es: ${acu}`
    }
    cantidadDivisores(){
        let numbb= document.getElementById("numbb").value
        let cd= document.getElementById("cd")
        let resp= document.getElementById("resp")

        console.log(numbb)
        console.log(resp)
        let c=1
        let divisores= ""
        numbb=parseInt(numbb)
        cd= 0
        while(c< numbb){
            if (numbb % c ==0){
                cd=cd+1
                divisores=divisores+ " " +c.toString()
            }
            c=c+1
        }
        resp.textContent=`La cantidad de divisores es: ${cd}`

    }
    //un número es perfecto cuando la suma de los divisores del número incluido el 1
    //y excluido el propio número es igual al número.
    perfecto(){
        let numer=document.getElementById("numer").value
        let resp= document.getElementById("resp")
        let r=0
        let c=1
        let ac=0
        numer=parseInt(numer)
        while (c<numer){
            r=(numer%c)
            if (r==0){
                console.log(c)
                ac=ac+c
            }
            c=c+1
        }
        console.log("suma divisores ", ac)
        if (ac==numer){
            resp.textContent=`${numer} es perfect`
        } else{
            resp.textContent= `${numer} no es perfect`
        }
    }
    // Son amigos cuando la suma de los divisores del primero
	// son iguales a la suma del segundo
    amigos(){
        let nume1=document.getElementById("nume1").value
        let nume2=document.getElementById("nume2").value
        let resp= document.getElementById("resp")
        let x=1
		let suma= 0
		while(x < nume1) {
            if (nume1 % x == 0) {
				suma = (suma + x)
            }
			x = x +1
        }
			if (suma == nume2) {
				resp.textContent= `Son amigos`
            }else{
				resp.textContent= `No son amigos`
            }
    }
    //Un número primo es aquel que solo es divisible por uno y por el mismo.
    primo(){
        let n= document.getElementById("n").value
        let cantidadDivis= document.getElementById("cantidadDivis")
        let divisor=1
        let resp= document.getElementById("resp")
        let c=1
        cantidadDivis=parseInt(cantidadDivis)
        divisor=parseInt(divisor)
        for (divisor = 1; divisor < n; divisor++) {
            if (n % divisor == 0) {
            cantidadDivis++;
            }
            c=c+1
        }
        
        if (cantidadDivis !=0) {
            resp.textContent=`El número ${n} es primo`
        } else {
            resp.textContent= `El número ${n} no es primo`
        }
    }
    //son primos gemelos si uno de ellos es igual al otro más dos unidades.
    primoGemelos(){
        let num= document.getElementById("num")
        let num1= document.getElementById("num1").value
        let num2=document.getElementById("num2").value
        num1=parseInt(num1)
        num2=parseInt(num2)

        function esPrimo(num) {
            if (num <=1) {
            return false;
            }
            if (num<=3){
                return true;
            }
            for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
            }
            return true;
        }
        if (esPrimo(num1) && esPrimo(num2)&& (num1-num2) !==2) {
            resp.textContent= `El ${num1} y ${num2} son primos gemelos`
            }else{
                resp.textContent=`El ${num1} y ${num2} no son primos gemelos`
            }
        }
        
    numeroInvertido(){
        let numerr=document.getElementById("numerr").value
            let numeroI = document.getElementById("numeroI")
            let resp= document.getElementById("resp")
            let resto= document.getElementById("resto")
            numeroI= 0
            while (numerr > 0) {
            resto = (numerr % 10)
            numerr = Math.trunc(numerr / 10)
            numeroI= numeroI+ resto.toString()
            }
                resp.textContent=`El número invertido es: ${numeroI}`
        }

    cantidadDigitos(){
        let nuu=document.getElementById("nuu").value
        let resp=document.getElementById("resp")
        let cantiD = 0;
        if (nuu === 0) {
            cantiD = 1;
    }
        while (nuu != 0) {
            nuu = Math.trunc(nuu / 10)
            cantiD++;
    }

    console.log("El número tiene " + cantiD + " dígitos.")
    resp.textContent= `El número tiene ${cantiD} dígitos`
}
    
    factorial(){
        let nu=document.getElementById("nu").value
        let resp=document.getElementById("resp")
        let acu=1
        while (nu>= 1){
            (acu*=nu)
            nu= (nu-1)
        }
        resp.textContent=`Es: ${acu}`

    }
    exponente(){
        let nuu=document.getElementById("nuu").value
        let exp=document.getElementById("exp").value
        let resp=document.getElementById("resp")
        
        let resultado = Math.pow(nuu, exp);
        
        resp.textContent=`El resultado de ${nuu} elevado a ${exp} es: ${resultado}`
    }
    
    tablaMultiplicar(){
        let numer=parseInt(document.getElementById("numer").value)
        let resp=document.getElementById("resp")
        let result
        let tabla= ""
        for (let i = 1; i <= 12; i++) {
        result=(numer*i)
        tabla += `${numer}  x ${i} = ${result} `
        tabla=tabla +"<br>"+i.toString()
    }
    
    resp.innerHTML = tabla
    }
    
    fibonac(){
        let a= 0, b=1, c=0, cont=2
        let n=parseInt(document.getElementById("n").value)
        let resp=document.getElementById("resp")
        resp.innerHTML=""
        let serie= a.toString()+"<br>"+b.toString()
        console.log(a,b)
        while (cont < n ){
            c=a+b
            console.log(c)
            serie= serie+"<br>"+c.toString()
            a=b
            b=c
            cont=cont+1
        }
        resp.innerHTML= serie
    }
}
const numero= new Numeros();
//numero.primo()
//numero.cantidadDigitos()