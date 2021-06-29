const jajangprice = 10;
const jampongprice = 12;
const tansuYuk =22;
const jajangset = jajangprice*2 + tansuYuk -5;
const jjampongset = jampongprice*2 + tansuYuk -5;
const jjamjjaset = jajangprice + jampongprice + tansuYuk -5;
const InYishun = 5;

  const getprice = ( ) =>{

    //짜장면
    const countitem = document.querySelector(".countitem").value;
    const totalprice = jajangprice*countitem;
    document.querySelector(".priceshowing").innerHTML = "$"+totalprice;
      
      if(document.querySelector('.priceshowing').innerHTML === '$10'){
        document.querySelector('.customer_order').value = "JjaJang 1"}
      else if(document.querySelector('.priceshowing').innerHTML === '$20')
      {document.querySelector('.customer_order').value = "JjaJang 2"}
      else if(document.querySelector('.priceshowing').innerHTML === '$30')
      {document.querySelector('.customer_order').value = "JjaJang 3"}
      else if(document.querySelector('.priceshowing').innerHTML === '$40')
      {document.querySelector('.customer_order').value = "JjaJang 4"}
      else if(document.querySelector('.priceshowing').innerHTML === '$50')
      {document.querySelector('.customer_order').value = "JjaJang 5"}
      else {document.querySelector('.customer_order').value = ""}


    //짬뽕
    const countitem2 = document.querySelector(".countitem2").value;
    const totalprice2 = jampongprice*countitem2;
    document.querySelector(".priceshowing2").innerHTML = "$"+totalprice2;


      if(document.querySelector('.priceshowing2').innerHTML === '$12'){
        document.querySelector('.customer_order2').value = "JjamPpong 1"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$24')
      {document.querySelector('.customer_order2').value = "JjamPpong 2"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$36')
      {document.querySelector('.customer_order2').value = "JjamPpong 3"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$48')
      {document.querySelector('.customer_order2').value = "JjamPpong 4"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$60')
      {document.querySelector('.customer_order2').value = "JjamPpong 5"}
      else {document.querySelector('.customer_order2').value = ""}

    //탕수육
    const countitem3 = document.querySelector(".countitem3").value;
    const totalprice3 = tansuYuk*countitem3;
    document.querySelector(".priceshowing3").innerHTML = "$"+totalprice3;

    if(document.querySelector('.priceshowing3').innerHTML === '$22'){
      document.querySelector('.customer_order3').value = "TangSuYuk 1"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$44')
    {document.querySelector('.customer_order3').value = "TangSuYuk 2"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$66')
    {document.querySelector('.customer_order3').value = "TangSuYuk 3"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$88')
    {document.querySelector('.customer_order3').value = "TangSuYuk 4"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$110')
    {document.querySelector('.customer_order3').value = "TangSuYuk 5"}
    else {document.querySelector('.customer_order3').value = ""}

    //짜장셋
    const countitem4 = document.querySelector(".countitem4").value;
    const totalprice4 = jajangset*countitem4;
    document.querySelector(".priceshowing4").innerHTML = "$"+totalprice4;

    if(document.querySelector('.priceshowing4').innerHTML === '$37'){
      document.querySelector('.customer_order4').value = "JjaJang Set 1"}
    else if(document.querySelector('.priceshowing4').innerHTML === '$74')
    {document.querySelector('.customer_order4').value = "JjaJang Set 2"}
    else if(document.querySelector('.priceshowing4').innerHTML === '$111')
    {document.querySelector('.customer_order4').value = "JjaJang Set 3"}
    else if(document.querySelector('.priceshowing4').innerHTML === '$148')
    {document.querySelector('.customer_order4').value = "JjaJang Set 4"}
    else if(document.querySelector('.priceshowing4').innerHTML === '$185')
    {document.querySelector('.customer_order4').value = "JjaJang Set 5"}
    else {document.querySelector('.customer_order4').value = ""}


    //짬뽕셋

    const countitem5 = document.querySelector(".countitem5").value;
    const totalprice5 = jjampongset*countitem5;
    document.querySelector(".priceshowing5").innerHTML = "$"+totalprice5;

    if(document.querySelector('.priceshowing5').innerHTML === '$41'){
      document.querySelector('.customer_order5').value = "JjamPpong Set 1"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$82')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 2"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$123')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 3"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$164')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 4"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$205')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 5"}
    else {document.querySelector('.customer_order5').value = ""}

    //짬짜셋
    const countitem6 = document.querySelector(".countitem6").value;
    const totalprice6 = jjamjjaset*countitem6;
    document.querySelector(".priceshowing6").innerHTML = "$"+totalprice6;

    if(document.querySelector('.priceshowing6').innerHTML === '$39'){
      document.querySelector('.customer_order6').value = "JjamJja Set 1"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$78')
    {document.querySelector('.customer_order6').value = "JjamJja Set 2"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$117')
    {document.querySelector('.customer_order6').value = "JjamJja Set 3"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$156')
    {document.querySelector('.customer_order6').value = "JjamJja Set 4"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$195')
    {document.querySelector('.customer_order6').value = "JjamJja Set 5"}
    else {document.querySelector('.customer_order6').value = ""}


    

    //합친가격 및 디테일
    
    const sumup = totalprice + totalprice2 + totalprice3 +
                totalprice4 + totalprice5 + totalprice6;
    
    document.querySelector('.sumup').value = sumup;

    const sumup2 = totalprice + totalprice2 + totalprice3 +
    totalprice4 + totalprice5 + totalprice6;

    document.querySelector('.sumup2').value = sumup2;

    //수량 5개 이상 입력시 (for iphone)

    if(document.querySelector('.countitem').value > 5) {
      document.querySelector('.countitem').value = ""
      document.querySelector('.priceshowing').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem2').value > 5) {
      document.querySelector('.countitem2').value = ""
      document.querySelector('.priceshowing2').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem3').value > 5) {
      document.querySelector('.countitem3').value = ""
      document.querySelector('.priceshowing3').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
        
    if(document.querySelector('.countitem4').value > 5) {
      document.querySelector('.countitem4').value = ""
      document.querySelector('.priceshowing4').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
        
    if(document.querySelector('.countitem5').value > 5) {
      document.querySelector('.countitem5').value = ""
      document.querySelector('.priceshowing5').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem6').value > 5) {
      document.querySelector('.countitem6').value = ""
      document.querySelector('.priceshowing6').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
 

    //인사이드 리미트

    if(document.querySelector('.sumup').value < 25) {
      document.querySelector('.submit').disabled = true; 
      document.getElementById('Delivery_options').disabled = true;     
      document.querySelector('.next').disabled = true; 
   }else if(document.querySelector('.sumup').value >= 25) {
    document.querySelector('.submit').disabled = false;
    document.getElementById('Delivery_options').disabled = false;
    document.querySelector('.next').disabled = false;    
   }

}


function addDeliver() {

    if (document.getElementById("Delivery_options").value === "Within Yishun") {
      let totalfood = document.querySelector('.sumup').value
      let totalfood2 = parseInt(totalfood, 10)
      document.querySelector('.dsumup').value = 5;
      document.querySelector('.ssumup').value = `$${totalfood2 + 5}`;
    }
    else if (document.getElementById("Delivery_options").value === "Outside Yishun") {
      let totalfood = document.querySelector('.sumup').value
      let totalfood2 = parseInt(totalfood, 10)
      document.querySelector('.dsumup').value = 10; 
      document.querySelector('.ssumup').value = `$${totalfood2 + 10}`;
    }
    else if (document.getElementById("Delivery_options").value === "Pick Up") {
      let totalfood = document.querySelector('.sumup').value
      let totalfood2 = parseInt(totalfood, 10)
      document.querySelector('.dsumup').value = 0; 
      document.querySelector('.ssumup').value = `$${totalfood2}`;
    }
  }

document.querySelector('.next').addEventListener('click', ()=>{

  document.querySelector('.next').classList.toggle("clicked")
  document.querySelector('.submit').classList.toggle("clicked") 
  document.querySelector('.info').classList.toggle("clicked") 
  document.querySelector('.check').classList.toggle("clicked") 
  document.querySelector('.please').classList.toggle("clicked") 
  document.querySelector('.menus').classList.toggle("clicked")
  document.querySelector('.totalbox2').classList.toggle("clicked")
  document.querySelector('.ok').classList.toggle("clicked")
});

