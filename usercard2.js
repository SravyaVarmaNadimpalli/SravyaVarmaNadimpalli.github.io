let dhonioldinfo ={
    imgurl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fakm-img-a-in.tosshub.com%2Findiatoday%2Fimages%2Fstory%2F202210%2Fmsdhonipresser_1200x768.jpeg%3FVersionId%3DdUcSATVVbuDf29HHu86kXCDJj88xWzQy%26size%3D690%3A388&tbnid=Zv7jEr8nsDCL-M&vet=10CBUQMyjaAWoXChMIyPDQ-sWx_wIVAAAAAB0AAAAAEAM..i&imgrefurl=https%3A%2F%2Fwww.indiatoday.in%2Fsports%2Fcricket%2Fstory%2Fms-dhoni-2011-world-cup-hairstyle-t20-world-cup-2007977-2022-10-03&docid=VqpY371CM7iBjM&w=690&h=388&q=ms%20dhoni&ved=0CBUQMyjaAWoXChMIyPDQ-sWx_wIVAAAAAB0AAAAAEAM", 
    name:"Mahendra Singh Dhoni",
    Description :"Captain"
}

let dhoniyounginfo = {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlYJXd9QNuYtydlutW00qlEwJsEgyd27RtcqXqRywjw&usqp=CAU&ec=48665701",
    name:"MSD",
    Description :"Indian Cricketer"
}
let isdhoniold = true;
let displayobject;
let flipdata = function(){
    if(isdhoniold == true){
        displayobject = dhoniyounginfo;
        isdhoniold = false;
    }
    else{
        displayobject = dhonioldinfo;
        isdhoniold = true;
    }
    document.getElementById("dhoni-img").src = displayobject.imgurl;
    document.getElementById("dhoni-name").innerHTML =displayobject.name;
    document.getElementById("dhoni-description").innerHTML = displayobject.Description;
}