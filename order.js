const jajangprice = 10;
const jampongprice = 13;
const tansuYuk =22;
const jajangset = jajangprice*2 + tansuYuk -5;
const jjampongset = jampongprice*2 + tansuYuk -5;
const jjamjjaset = jajangprice + jampongprice + tansuYuk -5;
const doenjangjjigae = 10;
const budaejjigae = 13;
const dosirak = 10;
const doenjangjjigaeset = doenjangjjigae + dosirak - 5;
const budaejjigaeset = budaejjigae + dosirak -5;
const whiterice = 1;


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


      if(document.querySelector('.priceshowing2').innerHTML === '$13'){
        document.querySelector('.customer_order2').value = "JjamPpong 1"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$26')
      {document.querySelector('.customer_order2').value = "JjamPpong 2"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$39')
      {document.querySelector('.customer_order2').value = "JjamPpong 3"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$52')
      {document.querySelector('.customer_order2').value = "JjamPpong 4"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$65')
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

    if(document.querySelector('.priceshowing5').innerHTML === '$43'){
      document.querySelector('.customer_order5').value = "JjamPpong Set 1"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$86')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 2"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$129')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 3"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$172')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 4"}
    else if(document.querySelector('.priceshowing5').innerHTML === '$215')
    {document.querySelector('.customer_order5').value = "JjamPpong Set 5"}
    else {document.querySelector('.customer_order5').value = ""}

    //짬짜셋
    const countitem6 = document.querySelector(".countitem6").value;
    const totalprice6 = jjamjjaset*countitem6;
    document.querySelector(".priceshowing6").innerHTML = "$"+totalprice6;

    if(document.querySelector('.priceshowing6').innerHTML === '$40'){
      document.querySelector('.customer_order6').value = "JjamJja Set 1"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$80')
    {document.querySelector('.customer_order6').value = "JjamJja Set 2"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$120')
    {document.querySelector('.customer_order6').value = "JjamJja Set 3"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$160')
    {document.querySelector('.customer_order6').value = "JjamJja Set 4"}
    else if(document.querySelector('.priceshowing6').innerHTML === '$200')
    {document.querySelector('.customer_order6').value = "JjamJja Set 5"}
    else {document.querySelector('.customer_order6').value = ""}

    //된장찌개
    const countitem7 = document.querySelector(".countitem7").value;
    const totalprice7 = doenjangjjigae*countitem7;
    document.querySelector(".priceshowing7").innerHTML = "$"+totalprice7;

    if(document.querySelector('.priceshowing7').innerHTML === '$10'){
      document.querySelector('.customer_order7').value = "DoenJangJjiGae 1"}
    else if(document.querySelector('.priceshowing7').innerHTML === '$20')
    {document.querySelector('.customer_order7').value = "DoenJangJjiGae 2"}
    else if(document.querySelector('.priceshowing7').innerHTML === '$30')
    {document.querySelector('.customer_order7').value = "DoenJangJjiGae 3"}
    else if(document.querySelector('.priceshowing7').innerHTML === '$40')
    {document.querySelector('.customer_order7').value = "DoenJangJjiGae 4"}
    else if(document.querySelector('.priceshowing7').innerHTML === '$50')
    {document.querySelector('.customer_order7').value = "DoenJangJjiGae 5"}
    else {document.querySelector('.customer_order7').value = ""}

    //부대찌개
    const countitem8 = document.querySelector(".countitem8").value;
    const totalprice8 = budaejjigae*countitem8;
    document.querySelector(".priceshowing8").innerHTML = "$"+totalprice8;

    if(document.querySelector('.priceshowing8').innerHTML === '$13'){
      document.querySelector('.customer_order8').value = "BudaeJjiGae 1"}
    else if(document.querySelector('.priceshowing8').innerHTML === '$26')
    {document.querySelector('.customer_order8').value = "BudaeJjiGae 2"}
    else if(document.querySelector('.priceshowing8').innerHTML === '$39')
    {document.querySelector('.customer_order8').value = "BudaeJjiGae 3"}
    else if(document.querySelector('.priceshowing8').innerHTML === '$52')
    {document.querySelector('.customer_order8').value = "BudaeJjiGae 4"}
    else if(document.querySelector('.priceshowing8').innerHTML === '$65')
    {document.querySelector('.customer_order8').value = "BudaeJjiGae 5"}
    else {document.querySelector('.customer_order8').value = ""}

    //도시락
    const countitem9 = document.querySelector(".countitem9").value;
    const totalprice9 = dosirak*countitem9;
    document.querySelector(".priceshowing9").innerHTML = "$"+totalprice9;

    if(document.querySelector('.priceshowing9').innerHTML === '$10'){
      document.querySelector('.customer_order9').value = "BabSang 1"}
    else if(document.querySelector('.priceshowing9').innerHTML === '$20')
    {document.querySelector('.customer_order9').value = "BabSang 2"}
    else if(document.querySelector('.priceshowing9').innerHTML === '$30')
    {document.querySelector('.customer_order9').value = "BabSang 3"}
    else if(document.querySelector('.priceshowing9').innerHTML === '$40')
    {document.querySelector('.customer_order9').value = "BabSang 4"}
    else if(document.querySelector('.priceshowing9').innerHTML === '$50')
    {document.querySelector('.customer_order9').value = "BabSang 5"}
    else {document.querySelector('.customer_order9').value = ""}

    //된장찌개 세트
    const countitem10 = document.querySelector(".countitem10").value;
    const totalprice10 = doenjangjjigaeset*countitem10;
    document.querySelector(".priceshowing10").innerHTML = "$"+totalprice10;

    if(document.querySelector('.priceshowing10').innerHTML === '$15'){
      document.querySelector('.customer_order10').value = "DoenJangJjiGae Set 1"}
    else if(document.querySelector('.priceshowing10').innerHTML === '$30')
    {document.querySelector('.customer_order10').value = "DoenJangJjiGae Set 2"}
    else if(document.querySelector('.priceshowing10').innerHTML === '$45')
    {document.querySelector('.customer_order10').value = "DoenJangJjiGae Set 3"}
    else if(document.querySelector('.priceshowing10').innerHTML === '$60')
    {document.querySelector('.customer_order10').value = "DoenJangJjiGae Set 4"}
    else if(document.querySelector('.priceshowing10').innerHTML === '$75')
    {document.querySelector('.customer_order10').value = "DoenJangJjiGae Set 5"}
    else {document.querySelector('.customer_order10').value = ""}


    //부대찌개 세트
    const countitem11 = document.querySelector(".countitem11").value;
    const totalprice11 = budaejjigaeset*countitem11;
    document.querySelector(".priceshowing11").innerHTML = "$"+totalprice11;

    if(document.querySelector('.priceshowing11').innerHTML === '$18'){
      document.querySelector('.customer_order11').value = "BudaeJjiGae Set 1"}
    else if(document.querySelector('.priceshowing11').innerHTML === '$36')
    {document.querySelector('.customer_order11').value = "BudaeJjiGae Set 2"}
    else if(document.querySelector('.priceshowing11').innerHTML === '$54')
    {document.querySelector('.customer_order11').value = "BudaeJjiGae Set 3"}
    else if(document.querySelector('.priceshowing11').innerHTML === '$72')
    {document.querySelector('.customer_order11').value = "BudaeJjiGae Set 4"}
    else if(document.querySelector('.priceshowing11').innerHTML === '$90')
    {document.querySelector('.customer_order11').value = "BudaeJjiGae Set 5"}
    else {document.querySelector('.customer_order11').value = ""}

    //공깃밥
    const countitem12 = document.querySelector(".countitem12").value;
    const totalprice12 = whiterice*countitem12;
    document.querySelector(".priceshowing12").innerHTML = "$"+totalprice12;

    if(document.querySelector('.priceshowing12').innerHTML === '$1'){
      document.querySelector('.customer_order12').value = "WhiteRice 1"}
    else if(document.querySelector('.priceshowing12').innerHTML === '$2')
    {document.querySelector('.customer_order12').value = "WhiteRice 2"}
    else if(document.querySelector('.priceshowing12').innerHTML === '$3')
    {document.querySelector('.customer_order12').value = "WhiteRice 3"}
    else if(document.querySelector('.priceshowing12').innerHTML === '$4')
    {document.querySelector('.customer_order12').value = "WhiteRice 4"}
    else if(document.querySelector('.priceshowing12').innerHTML === '$5')
    {document.querySelector('.customer_order12').value = "WhiteRice 5"}
    else {document.querySelector('.customer_order12').value = ""}

    //합친가격 및 디테일
    
    const sumup = totalprice + totalprice2 + totalprice3 +
    totalprice4 + totalprice5 + totalprice6 + totalprice7 +
    totalprice8 + totalprice9 + totalprice10 + totalprice11 +
    totalprice12;
    
    document.querySelector('.sumup').value = sumup;

    const sumup2 = totalprice + totalprice2 + totalprice3 +
    totalprice4 + totalprice5 + totalprice6 + totalprice7 +
    totalprice8 + totalprice9 + totalprice10 + totalprice11 +
    totalprice12;

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
    if(document.querySelector('.countitem7').value > 5) {
      document.querySelector('.countitem7').value = ""
      document.querySelector('.priceshowing7').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem8').value > 5) {
      document.querySelector('.countitem8').value = ""
      document.querySelector('.priceshowing8').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem9').value > 5) {
      document.querySelector('.countitem9').value = ""
      document.querySelector('.priceshowing9').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem10').value > 5) {
      document.querySelector('.countitem10').value = ""
      document.querySelector('.priceshowing10').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem11').value > 5) {
      document.querySelector('.countitem11').value = ""
      document.querySelector('.priceshowing11').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }
    if(document.querySelector('.countitem12').value > 5) {
      document.querySelector('.countitem12').value = ""
      document.querySelector('.priceshowing12').innerHTML = ""
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

//if click email address show

const ebtn = document.querySelector('.ebtn')
const email = document.querySelector('.email')

ebtn.addEventListener('click', ()=>{
  email.innerHTML = "jungga.meokjasg@gmail.com"
})