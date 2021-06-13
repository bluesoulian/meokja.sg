
const jajangprice = 10;
const jampongprice = 15;
const tansuYuk =23;
const jajangset = jajangprice*2 + tansuYuk -5;
const jjampongset = jampongprice*2 + tansuYuk -5;
const jjamjjaset = jajangprice + jampongprice + tansuYuk -5;

  const getprice = () =>{

    //delivery fee

    //pick up

    const countitemP = document.querySelector(".countitemP").value;
    const totalpriceP = 0*countitemP;
    document.querySelector(".priceshowingP").innerHTML = totalpriceP+"$";

    if(document.querySelector('.priceshowingP').innerHTML === '0$'){
      document.querySelector('.customer_orderP').value = ""}
    else {document.querySelector('.customer_orderP').value = ""}

    //outside

    const countitemO = document.querySelector(".countitemO").value;
    const totalpriceO = 10*countitemO;
    document.querySelector(".priceshowingO").innerHTML = totalpriceO+"$";

    if(document.querySelector('.priceshowingO').innerHTML === '10$'){
      document.querySelector('.customer_orderO').value = "Outside"}
    else {document.querySelector('.customer_orderO').value = ""}

    //inside 

    const countitemY = document.querySelector(".countitemY").value;
    const totalpriceY = 5*countitemY;
    document.querySelector(".priceshowingY").innerHTML = totalpriceY+"$";

    if(document.querySelector('.priceshowingY').innerHTML === '5$'){
      document.querySelector('.customer_orderY').value = "YesYishun"}
    else {document.querySelector('.customer_orderY').value = ""}


    //짜장면
    const countitem = document.querySelector(".countitem").value;
    const totalprice = jajangprice*countitem;
    document.querySelector(".priceshowing").innerHTML = totalprice+"$";
   
      if(document.querySelector('.priceshowing').innerHTML === '10$'){
        document.querySelector('.customer_order').value = "Jajang1"}
      else if(document.querySelector('.priceshowing').innerHTML === '20$')
      {document.querySelector('.customer_order').value = "Jajang2"}
      else if(document.querySelector('.priceshowing').innerHTML === '30$')
      {document.querySelector('.customer_order').value = "Jajang3"}
      else if(document.querySelector('.priceshowing').innerHTML === '40$')
      {document.querySelector('.customer_order').value = "Jajang4"}
      else if(document.querySelector('.priceshowing').innerHTML === '50$')
      {document.querySelector('.customer_order').value = "Jajang5"}
      else {document.querySelector('.customer_order').value = ""}

    //짬뽕
    const countitem2 = document.querySelector(".countitem2").value;
    const totalprice2 = jampongprice*countitem2;
    document.querySelector(".priceshowing2").innerHTML = totalprice2+"$";

      if(document.querySelector('.priceshowing2').innerHTML === '15$'){
        document.querySelector('.customer_order2').value = "Jjamppong1"}
      else if(document.querySelector('.priceshowing2').innerHTML === '30$')
      {document.querySelector('.customer_order2').value = "jjamppong2"}
      else if(document.querySelector('.priceshowing2').innerHTML === '45$')
      {document.querySelector('.customer_order2').value = "jjamppong3"}
      else if(document.querySelector('.priceshowing2').innerHTML === '60$')
      {document.querySelector('.customer_order2').value = "Jjampong4"}
      else if(document.querySelector('.priceshowing2').innerHTML === '75$')
      {document.querySelector('.customer_order2').value = "Jjampong5"}
      else {document.querySelector('.customer_order2').value = ""}

    //탕수육
    const countitem3 = document.querySelector(".countitem3").value;
    const totalprice3 = tansuYuk*countitem3;
    document.querySelector(".priceshowing3").innerHTML = totalprice3+"$";

    if(document.querySelector('.priceshowing3').innerHTML === '23$'){
      document.querySelector('.customer_order3').value = "tangsuyuk1"}
    else if(document.querySelector('.priceshowing3').innerHTML === '46$')
    {document.querySelector('.customer_order3').value = "tansuyuk2"}
    else if(document.querySelector('.priceshowing3').innerHTML === '69$')
    {document.querySelector('.customer_order3').value = "tansuyuk3"}
    else if(document.querySelector('.priceshowing3').innerHTML === '92$')
    {document.querySelector('.customer_order3').value = "tansuyuk4"}
    else if(document.querySelector('.priceshowing3').innerHTML === '115$')
    {document.querySelector('.customer_order3').value = "tansuyuk5"}
    else {document.querySelector('.customer_order3').value = ""}

    //짜장셋
    const countitem4 = document.querySelector(".countitem4").value;
    const totalprice4 = jajangset*countitem4;
    document.querySelector(".priceshowing4").innerHTML = totalprice4+"$";

    if(document.querySelector('.priceshowing4').innerHTML === '38$'){
      document.querySelector('.customer_order4').value = "jjajangset1"}
    else if(document.querySelector('.priceshowing4').innerHTML === '76$')
    {document.querySelector('.customer_order4').value = "jjajangset2"}
    else if(document.querySelector('.priceshowing4').innerHTML === '114$')
    {document.querySelector('.customer_order4').value = "jjajangset3"}
    else if(document.querySelector('.priceshowing4').innerHTML === '152$')
    {document.querySelector('.customer_order4').value = "jjajangset4"}
    else if(document.querySelector('.priceshowing4').innerHTML === '190$')
    {document.querySelector('.customer_order4').value = "jjajangset5"}
    else {document.querySelector('.customer_order4').value = ""}


    //짬뽕셋
    const countitem5 = document.querySelector(".countitem5").value;
    const totalprice5 = jjampongset*countitem5;
    document.querySelector(".priceshowing5").innerHTML = totalprice5+"$";

    if(document.querySelector('.priceshowing5').innerHTML === '48$'){
      document.querySelector('.customer_order5').value = "jjamppongset1"}
    else if(document.querySelector('.priceshowing5').innerHTML === '96$')
    {document.querySelector('.customer_order5').value = "jjamppongset2"}
    else if(document.querySelector('.priceshowing5').innerHTML === '144$')
    {document.querySelector('.customer_order5').value = "jjamppongset3"}
    else if(document.querySelector('.priceshowing5').innerHTML === '192$')
    {document.querySelector('.customer_order5').value = "jjamppongset4"}
    else if(document.querySelector('.priceshowing5').innerHTML === '240$')
    {document.querySelector('.customer_order5').value = "jjamppongset5"}
    else {document.querySelector('.customer_order5').value = ""}

    //짬짜셋
    const countitem6 = document.querySelector(".countitem6").value;
    const totalprice6 = jjamjjaset*countitem6;
    document.querySelector(".priceshowing6").innerHTML = totalprice6+"$";

    if(document.querySelector('.priceshowing6').innerHTML === '43$'){
      document.querySelector('.customer_order6').value = "jjamjjaset1"}
    else if(document.querySelector('.priceshowing6').innerHTML === '86$')
    {document.querySelector('.customer_order6').value = "jjamjjaset2"}
    else if(document.querySelector('.priceshowing6').innerHTML === '129$')
    {document.querySelector('.customer_order6').value = "jjamjjaset3"}
    else if(document.querySelector('.priceshowing6').innerHTML === '172$')
    {document.querySelector('.customer_order6').value = "jjamjjaset4"}
    else if(document.querySelector('.priceshowing6').innerHTML === '215$')
    {document.querySelector('.customer_order6').value = "jjamjjaset5"}
    else {document.querySelector('.customer_order6').value = ""}
    

    //합친가격 및 디테일

    
    
    let sumup = totalpriceY + totalpriceP + totalpriceO +
                totalprice + totalprice2 + totalprice3 +
                totalprice4 + totalprice5 + totalprice6;
                
    
    document.querySelector('.sumup').value = sumup;

    //인사이드
}


function passvalue(){
  const invoice = document.querySelector('.customer_order').value; 
  localStorage.setItem("jjajang", invoice);
  return false;
}

function passvalue2(){
  const invoice2 = document.querySelector('.customer_order2').value;
  localStorage.setItem("jjamppong", invoice2)
  return false;
}

