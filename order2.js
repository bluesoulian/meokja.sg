const jajangprice = 10;
const jampongprice = 13;
const tansuYuk =22;
const jajangset = jajangprice*2 + tansuYuk -5;
const jjampongset = jampongprice*2 + tansuYuk -5;
const jjamjjaset = jajangprice + jampongprice + tansuYuk -5;
const doenjangjjigae = 10;
const budaejjigae = 13;
const banbanchicken = 18;
const whiterice = 1;
const radishipickle = 6;
const friedkimchi = 8;
const tteokgangjung = 3;
const tteokbokki = 18;
const emougtang = 12;
const bunsik = 35;
const tteokbokkiB = 32;
const UyukSsambap = 27.5;
const japchae = 25;
const buchujeon = 8;

  const getprice = ( ) =>{

    //우육쌈밥
    const countitem = document.querySelector(".countitem").value;
    const totalprice = Math.ceil(UyukSsambap*countitem);
    document.querySelector(".priceshowing").innerHTML = "$"+totalprice;
      
      if(document.querySelector('.priceshowing').innerHTML === '$28'){
        document.querySelector('.customer_order').value = "Uyuk 1"}
      else if(document.querySelector('.priceshowing').innerHTML === '$55')
      {document.querySelector('.customer_order').value = "Uyuk 2"}
      else if(document.querySelector('.priceshowing').innerHTML === '$83')
      {document.querySelector('.customer_order').value = "Uyuk 3"}
      else if(document.querySelector('.priceshowing').innerHTML === '$110')
      {document.querySelector('.customer_order').value = "Uyuk 4"}
      else if(document.querySelector('.priceshowing').innerHTML === '$138')
      {document.querySelector('.customer_order').value = "Uyuk 5"}
      else {document.querySelector('.customer_order').value = "-"}


    //잡채
    const countitem2 = document.querySelector(".countitem2").value;
    const totalprice2 = japchae*countitem2;
    document.querySelector(".priceshowing2").innerHTML = "$"+totalprice2;


      if(document.querySelector('.priceshowing2').innerHTML === '$25'){
        document.querySelector('.customer_order2').value = "JapChae 1"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$50')
      {document.querySelector('.customer_order2').value = "JapChae 2"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$75')
      {document.querySelector('.customer_order2').value = "JapChae 3"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$100')
      {document.querySelector('.customer_order2').value = "JapChae 4"}
      else if(document.querySelector('.priceshowing2').innerHTML === '$125')
      {document.querySelector('.customer_order2').value = "JapChae 5"}
      else {document.querySelector('.customer_order2').value = "-"}

    //부추전
    const countitem3 = document.querySelector(".countitem3").value;
    const totalprice3 = buchujeon*countitem3;
    document.querySelector(".priceshowing3").innerHTML = "$"+totalprice3;

    if(document.querySelector('.priceshowing3').innerHTML === '$8'){
      document.querySelector('.customer_order3').value = "BuChuJeon 1"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$16')
    {document.querySelector('.customer_order3').value = "BuChuJeon 2"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$24')
    {document.querySelector('.customer_order3').value = "BuChuJeon 3"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$32')
    {document.querySelector('.customer_order3').value = "BuChuJeon 4"}
    else if(document.querySelector('.priceshowing3').innerHTML === '$40')
    {document.querySelector('.customer_order3').value = "BuChuJeon 5"}
    else {document.querySelector('.customer_order3').value = "-"}

    // //짜장셋
    // const countitem4 = document.querySelector(".countitem4").value;
    // const totalprice4 = jajangset*countitem4;
    // document.querySelector(".priceshowing4").innerHTML = "$"+totalprice4;

    // if(document.querySelector('.priceshowing4').innerHTML === '$37'){
    //   document.querySelector('.customer_order4').value = "JjaJang Set 1"}
    // else if(document.querySelector('.priceshowing4').innerHTML === '$74')
    // {document.querySelector('.customer_order4').value = "JjaJang Set 2"}
    // else if(document.querySelector('.priceshowing4').innerHTML === '$111')
    // {document.querySelector('.customer_order4').value = "JjaJang Set 3"}
    // else if(document.querySelector('.priceshowing4').innerHTML === '$148')
    // {document.querySelector('.customer_order4').value = "JjaJang Set 4"}
    // else if(document.querySelector('.priceshowing4').innerHTML === '$185')
    // {document.querySelector('.customer_order4').value = "JjaJang Set 5"}
    // else {document.querySelector('.customer_order4').value = "-"}


    // //짬뽕셋

    // const countitem5 = document.querySelector(".countitem5").value;
    // const totalprice5 = jjampongset*countitem5;
    // document.querySelector(".priceshowing5").innerHTML = "$"+totalprice5;

    // if(document.querySelector('.priceshowing5').innerHTML === '$43'){
    //   document.querySelector('.customer_order5').value = "JjamPpong Set 1"}
    // else if(document.querySelector('.priceshowing5').innerHTML === '$86')
    // {document.querySelector('.customer_order5').value = "JjamPpong Set 2"}
    // else if(document.querySelector('.priceshowing5').innerHTML === '$129')
    // {document.querySelector('.customer_order5').value = "JjamPpong Set 3"}
    // else if(document.querySelector('.priceshowing5').innerHTML === '$172')
    // {document.querySelector('.customer_order5').value = "JjamPpong Set 4"}
    // else if(document.querySelector('.priceshowing5').innerHTML === '$215')
    // {document.querySelector('.customer_order5').value = "JjamPpong Set 5"}
    // else {document.querySelector('.customer_order5').value = "-"}

    // //짬짜셋
    // const countitem6 = document.querySelector(".countitem6").value;
    // const totalprice6 = jjamjjaset*countitem6;
    // document.querySelector(".priceshowing6").innerHTML = "$"+totalprice6;

    // if(document.querySelector('.priceshowing6').innerHTML === '$40'){
    //   document.querySelector('.customer_order6').value = "JjamJja Set 1"}
    // else if(document.querySelector('.priceshowing6').innerHTML === '$80')
    // {document.querySelector('.customer_order6').value = "JjamJja Set 2"}
    // else if(document.querySelector('.priceshowing6').innerHTML === '$120')
    // {document.querySelector('.customer_order6').value = "JjamJja Set 3"}
    // else if(document.querySelector('.priceshowing6').innerHTML === '$160')
    // {document.querySelector('.customer_order6').value = "JjamJja Set 4"}
    // else if(document.querySelector('.priceshowing6').innerHTML === '$200')
    // {document.querySelector('.customer_order6').value = "JjamJja Set 5"}
    // else {document.querySelector('.customer_order6').value = "-"}

    // //된장찌개
    // const countitem7 = document.querySelector(".countitem7").value;
    // const totalprice7 = doenjangjjigae*countitem7;
    // document.querySelector(".priceshowing7").innerHTML = "$"+totalprice7;

    // if(document.querySelector('.priceshowing7').innerHTML === '$10'){
    //   document.querySelector('.customer_order7').value = "DoenJangJjiGae 1"}
    // else if(document.querySelector('.priceshowing7').innerHTML === '$20')
    // {document.querySelector('.customer_order7').value = "DoenJangJjiGae 2"}
    // else if(document.querySelector('.priceshowing7').innerHTML === '$30')
    // {document.querySelector('.customer_order7').value = "DoenJangJjiGae 3"}
    // else if(document.querySelector('.priceshowing7').innerHTML === '$40')
    // {document.querySelector('.customer_order7').value = "DoenJangJjiGae 4"}
    // else if(document.querySelector('.priceshowing7').innerHTML === '$50')
    // {document.querySelector('.customer_order7').value = "DoenJangJjiGae 5"}
    // else {document.querySelector('.customer_order7').value = "-"}

    // //부대찌개
    // const countitem8 = document.querySelector(".countitem8").value;
    // const totalprice8 = budaejjigae*countitem8;
    // document.querySelector(".priceshowing8").innerHTML = "$"+totalprice8;

    // if(document.querySelector('.priceshowing8').innerHTML === '$13'){
    //   document.querySelector('.customer_order8').value = "BudaeJjiGae 1"}
    // else if(document.querySelector('.priceshowing8').innerHTML === '$26')
    // {document.querySelector('.customer_order8').value = "BudaeJjiGae 2"}
    // else if(document.querySelector('.priceshowing8').innerHTML === '$39')
    // {document.querySelector('.customer_order8').value = "BudaeJjiGae 3"}
    // else if(document.querySelector('.priceshowing8').innerHTML === '$52')
    // {document.querySelector('.customer_order8').value = "BudaeJjiGae 4"}
    // else if(document.querySelector('.priceshowing8').innerHTML === '$65')
    // {document.querySelector('.customer_order8').value = "BudaeJjiGae 5"}
    // else {document.querySelector('.customer_order8').value = "-"}

    // //반반치킨
    // const countitem9 = document.querySelector(".countitem9").value;
    // const totalprice9 = banbanchicken*countitem9;
    // document.querySelector(".priceshowing9").innerHTML = "$"+totalprice9;

    // if(document.querySelector('.priceshowing9').innerHTML === '$18'){
    //   document.querySelector('.customer_order9').value = "BanBan 1"}
    // else if(document.querySelector('.priceshowing9').innerHTML === '$36')
    // {document.querySelector('.customer_order9').value = "BanBan 2"}
    // else if(document.querySelector('.priceshowing9').innerHTML === '$54')
    // {document.querySelector('.customer_order9').value = "BanBan 3"}
    // else if(document.querySelector('.priceshowing9').innerHTML === '$72')
    // {document.querySelector('.customer_order9').value = "BanBan 4"}
    // else if(document.querySelector('.priceshowing9').innerHTML === '$90')
    // {document.querySelector('.customer_order9').value = "BanBan 5"}
    // else {document.querySelector('.customer_order9').value = "-"}

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
    else {document.querySelector('.customer_order12').value = "-"}

            //떡볶이
            const countitem16 = document.querySelector(".countitem16").value;
            const totalprice16 = tteokbokki*countitem16;
            document.querySelector(".priceshowing16").innerHTML = "$"+totalprice16;
        
            if(document.querySelector('.priceshowing16').innerHTML === '$18'){
              document.querySelector('.customer_order16').value = "tteokbokki 1"}
            else if(document.querySelector('.priceshowing16').innerHTML === '$36')
            {document.querySelector('.customer_order16').value = "tteokbokki 2"}
            else if(document.querySelector('.priceshowing16').innerHTML === '$54')
            {document.querySelector('.customer_order16').value = "tteokbokki 3"}
            else if(document.querySelector('.priceshowing16').innerHTML === '$72')
            {document.querySelector('.customer_order16').value = "tteokbokki 4"}
            else if(document.querySelector('.priceshowing16').innerHTML === '$90')
            {document.querySelector('.customer_order16').value = "tteokbokki 5"}
            else {document.querySelector('.customer_order16').value = "-"}
    

    //래디쉬 피클
    // const countitem13 = document.querySelector(".countitem13").value;
    // const totalprice13 = radishipickle*countitem13;
    // document.querySelector(".priceshowing13").innerHTML = "$"+totalprice13;

    // if(document.querySelector('.priceshowing13').innerHTML === '$6'){
    //   document.querySelector('.customer_order13').value = "RadishPickle 1"}
    // else if(document.querySelector('.priceshowing13').innerHTML === '$12')
    // {document.querySelector('.customer_order13').value = "RadishPickle 2"}
    // else if(document.querySelector('.priceshowing13').innerHTML === '$18')
    // {document.querySelector('.customer_order13').value = "RadishPickle 3"}
    // else if(document.querySelector('.priceshowing13').innerHTML === '$24')
    // {document.querySelector('.customer_order13').value = "RadishPickle 4"}
    // else if(document.querySelector('.priceshowing13').innerHTML === '$30')
    // {document.querySelector('.customer_order13').value = "RadishPickle 5"}
    // else {document.querySelector('.customer_order13').value = "-"}
    
    // //프라이드 김치
    // const countitem14 = document.querySelector(".countitem14").value;
    // const totalprice14 = friedkimchi*countitem14;
    // document.querySelector(".priceshowing14").innerHTML = "$"+totalprice14;

    // if(document.querySelector('.priceshowing14').innerHTML === '$8'){
    //   document.querySelector('.customer_order14').value = "FriedKimchi 1"}
    // else if(document.querySelector('.priceshowing14').innerHTML === '$16')
    // {document.querySelector('.customer_order14').value = "FriedKimchi 2"}
    // else if(document.querySelector('.priceshowing14').innerHTML === '$24')
    // {document.querySelector('.customer_order14').value = "FriedKimchi 3"}
    // else if(document.querySelector('.priceshowing14').innerHTML === '$32')
    // {document.querySelector('.customer_order14').value = "FriedKimchi 4"}
    // else if(document.querySelector('.priceshowing14').innerHTML === '$40')
    // {document.querySelector('.customer_order14').value = "FriedKimchi 5"}
    // else {document.querySelector('.customer_order14').value = "-"}

        // //떡강정
        // const countitem15 = document.querySelector(".countitem15").value;
        // const totalprice15 = tteokgangjung*countitem15;
        // document.querySelector(".priceshowing15").innerHTML = "$"+totalprice15;
    
        // if(document.querySelector('.priceshowing15').innerHTML === '$3'){
        //   document.querySelector('.customer_order15').value = "tteokgangjung 1"}
        // else if(document.querySelector('.priceshowing15').innerHTML === '$6')
        // {document.querySelector('.customer_order15').value = "tteokgangjung 2"}
        // else if(document.querySelector('.priceshowing15').innerHTML === '$9')
        // {document.querySelector('.customer_order15').value = "tteokgangjung 3"}
        // else if(document.querySelector('.priceshowing15').innerHTML === '$12')
        // {document.querySelector('.customer_order15').value = "tteokgangjung 4"}
        // else if(document.querySelector('.priceshowing15').innerHTML === '$15')
        // {document.querySelector('.customer_order15').value = "tteokgangjung 5"}
        // else {document.querySelector('.customer_order15').value = "-"}



        // //어묵탕
        // const countitem17 = document.querySelector(".countitem17").value;
        // const totalprice17 = emougtang*countitem17;
        // document.querySelector(".priceshowing17").innerHTML = "$"+totalprice17;
    
        // if(document.querySelector('.priceshowing17').innerHTML === '$12'){
        //   document.querySelector('.customer_order17').value = "emougtang 1"}
        // else if(document.querySelector('.priceshowing17').innerHTML === '$24')
        // {document.querySelector('.customer_order17').value = "emougtang 2"}
        // else if(document.querySelector('.priceshowing17').innerHTML === '$36')
        // {document.querySelector('.customer_order17').value = "emougtang 3"}
        // else if(document.querySelector('.priceshowing17').innerHTML === '$48')
        // {document.querySelector('.customer_order17').value = "emougtang 4"}
        // else if(document.querySelector('.priceshowing17').innerHTML === '$60')
        // {document.querySelector('.customer_order17').value = "emougtang 5"}
        // else {document.querySelector('.customer_order17').value = "-"}


        // //분식
        // const countitem18 = document.querySelector(".countitem18").value;
        // const totalprice18 = bunsik*countitem18;
        // document.querySelector(".priceshowing18").innerHTML = "$"+totalprice18;
    
        // if(document.querySelector('.priceshowing18').innerHTML === '$35'){
        //   document.querySelector('.customer_order18').value = "bunsikset 1"}
        // else if(document.querySelector('.priceshowing18').innerHTML === '$70')
        // {document.querySelector('.customer_order18').value = "bunsikset 2"}
        // else if(document.querySelector('.priceshowing18').innerHTML === '$105')
        // {document.querySelector('.customer_order18').value = "bunsikset 3"}
        // else if(document.querySelector('.priceshowing18').innerHTML === '$140')
        // {document.querySelector('.customer_order18').value = "bunsikset 4"}
        // else if(document.querySelector('.priceshowing18').innerHTML === '$175')
        // {document.querySelector('.customer_order18').value = "bunsikset 5"}
        // else {document.querySelector('.customer_order18').value = "-"}



    //합친가격 및 디테일
    
    const sumup = totalprice + totalprice2 + totalprice3 +
    totalprice12 + totalprice16;
    
    document.querySelector('.sumup').value = sumup;

    const sumup2 =totalprice + totalprice2 + totalprice3 +
    totalprice12 + totalprice16;

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
        
    // if(document.querySelector('.countitem4').value > 5) {
    //   document.querySelector('.countitem4').value = ""
    //   document.querySelector('.priceshowing4').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }
        
    // if(document.querySelector('.countitem5').value > 5) {
    //   document.querySelector('.countitem5').value = ""
    //   document.querySelector('.priceshowing5').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }
    // if(document.querySelector('.countitem6').value > 5) {
    //   document.querySelector('.countitem6').value = ""
    //   document.querySelector('.priceshowing6').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }
    // if(document.querySelector('.countitem7').value > 5) {
    //   document.querySelector('.countitem7').value = ""
    //   document.querySelector('.priceshowing7').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }
    // if(document.querySelector('.countitem8').value > 5) {
    //   document.querySelector('.countitem8').value = ""
    //   document.querySelector('.priceshowing8').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }
    // if(document.querySelector('.countitem9').value > 5) {
    //   document.querySelector('.countitem9').value = ""
    //   document.querySelector('.priceshowing9').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }

    if(document.querySelector('.countitem12').value > 5) {
      document.querySelector('.countitem12').value = ""
      document.querySelector('.priceshowing12').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }

    
    // if(document.querySelector('.countitem13').value > 5) {
    //   document.querySelector('.countitem13').value = ""
    //   document.querySelector('.priceshowing13').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }

    
    // if(document.querySelector('.countitem14').value > 5) {
    //   document.querySelector('.countitem14').value = ""
    //   document.querySelector('.priceshowing14').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }

    // if(document.querySelector('.countitem15').value > 5) {
    //   document.querySelector('.countitem15').value = ""
    //   document.querySelector('.priceshowing15').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }

    if(document.querySelector('.countitem16').value > 5) {
      document.querySelector('.countitem16').value = ""
      document.querySelector('.priceshowing16').innerHTML = ""
      document.querySelector('.sumup').value = ""
      document.querySelector('.sumup2').value = ""
    }

    // if(document.querySelector('.countitem17').value > 5) {
    //   document.querySelector('.countitem17').value = ""
    //   document.querySelector('.priceshowing17').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }

    
    // if(document.querySelector('.countitem18').value > 5) {
    //   document.querySelector('.countitem18').value = ""
    //   document.querySelector('.priceshowing18').innerHTML = ""
    //   document.querySelector('.sumup').value = ""
    //   document.querySelector('.sumup2').value = ""
    // }



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