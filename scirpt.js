var requst=new XMLHttpRequest();
requst.open("get","https://www.anapioficeandfire.com/api/books/1")
requst.send();
requst.onload=function(){
   var data=JSON.parse(requst.response);
   console.log(data);
   //console.log(`authername:${data.authors} no of pages:${data.numberOfPages} book isbn :${data.isbn} publisher${data.publisher}`);
  let res= data.filter((element)=>element.region==="asia");
  console.log(res);
  // for(i=0;)


}
