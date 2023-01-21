//add and remove of Work Experience

const t = [];
let cntWE=0;

let addNewWE = () =>{
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1");
    newNode.placeholder="Enter here";

    let weObj = document.getElementById("we");
    let weAddButtonObj = document.getElementById("weAddButton");
    weObj.insertBefore(newNode , weAddButtonObj);
    t[cntWE]=newNode;
    cntWE++;
};
let RemoveWE = () =>{
    if(cntWE==0){
        alert("You need atleast 1 Work Experience");
    }
    else{
        t[cntWE-1].remove();
        cntWE--;
    }
};

//add and remove of Academic Qualifications

const t1=[];
let cntAQ=0;

let addNewAQ = () =>{
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-1");
    newNode.placeholder="Enter here";

    let aqObj = document.getElementById("aq");
    let aqAddButtonObj = document.getElementById("aqAddButton");
    aqObj.insertBefore(newNode , aqAddButtonObj);
    t1[cntAQ]=newNode;
    cntAQ++;
};
let RemoveAQ = () =>{
    if(cntAQ==0){
        alert("Academic Qualifications cannot be blank");
    }
    else{
        t1[cntAQ-1].remove();
        cntAQ--;
    }
};

//add and remove of Certifications

const t2=[];
let cntCERT=0;

let addNewCERT = () =>{
    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("certField");
    newNode.classList.add("mt-1");
    newNode.placeholder="Enter here";

    let certObj = document.getElementById("cert");
    let certAddButtonObj = document.getElementById("certAddButton");
    certObj.insertBefore(newNode , certAddButtonObj);
    t2[cntCERT]=newNode;
    cntCERT++;
};
let RemoveCERT = () =>{
    if(cntCERT!=0){
        t2[cntCERT-1].remove();
        cntCERT--;
    }
};


//build

let build = () =>{

    //name
    let nameObj= document.getElementById('nameField').value;
    document.getElementById('nameT1').innerHTML=nameObj;
    document.getElementById('nameT2').innerHTML=nameObj;

    //contact no.
    let contactObj= document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML=contactObj;

    //mail
    let mailObj= document.getElementById('mailField').value;
    document.getElementById('mailT').innerHTML=mailObj;
    document.getElementById('mailT').setAttribute('href',"mailto:" + mailObj);

    //address
    let addressObj= document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML=addressObj;

    //git
    let gitObj= document.getElementById('gitField').value;
    document.getElementById('gitT').innerHTML=gitObj;
    document.getElementById('gitT').setAttribute('href',gitObj);

    //linkedin
    let lnObj= document.getElementById('lnField').value;
    document.getElementById('lnT').innerHTML=lnObj;
    document.getElementById('lnT').setAttribute('href',lnObj);

    //website
    let wbObj= document.getElementById('wbField').value;
    document.getElementById('webT').innerHTML=wbObj;
    document.getElementById('webT').setAttribute('href',wbObj);

    //objective
    let obObj= document.getElementById('obField').value;
    document.getElementById('objT').innerHTML= obObj;

    //Work Exp
    let weArray = document.getElementsByClassName("weField");
    let s1="";
    for(let idx of weArray){
        s1=s1+ `<li> ${idx.value} </li>`;
    }
    document.getElementById("weT").innerHTML= s1;

    //Acd Quali
    let aqArray = document.getElementsByClassName("aqField");
    let s2="";
    for(let idx of aqArray){
        s2=s2+ `<li> ${idx.value} </li>`;
    }
    document.getElementById("aqT").innerHTML= s2;

    //Certificates
    let certArray = document.getElementsByClassName("certField");
    let s3="";
    for(let idx of certArray){
        s3=s3+ `<li> ${idx.value} </li>`;
    }
    document.getElementById("certT").innerHTML= s3;

    //image
    let file=document.getElementById('imgField').files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend= function() {
        document.getElementById("imgT").src=reader.result;
    };

    //hiding resume-form
    document.getElementById("resume-form").style.display='none';

    //showing resume-template
    document.getElementById("resume-template").style.display='block';
};

//printRes

let printRes=()=>{
    window.print();
};