const onClick=()=> {
    let a = forma.width.value;
    forma.width.value = a;
    let b = forma.height.value;
    forma.height.value = b;
    let c = forma.numb.value;
    forma.numb.value = c;

    if (forma.elements[3].checked) 
    forma.price.value = a * b * c * 2;
    if (forma.elements[4].checked) 
    forma.price.value = a * b * c * 3;

}