 function myfunc(){
    var metas = document.getElementsByTagName('meta');
    sitesrc = document.getElementById("sitesrc");
btn = document.getElementById("btn");
btn.style.display = "none";
 sitesrc.style.display = "none";
 
for (i=0; i<metas.length; i++) { 
  if(metas[i].getAttribute("name") == "title"){   
     var title_data =metas[i].getAttribute("content"); 
       var title_id =document.getElementById("keywords");
       title_id.innerHTML ="<b>Keywords: </b>"+ title_data;
  }
  if(metas[i].getAttribute("name") == "keywords"){   
     var keywords_data =metas[i].getAttribute("content"); 
       var keywords_id =document.getElementById("keywords");
       keywords_id.innerHTML ="<b>Keywords: </b>"+ keywords_data;
  }
   if (metas[i].getAttribute("name") == "description") { 
     var desc_data = metas[i].getAttribute("content"); 
      var desc_id = document.getElementById("description");
      desc_id.innerHTML ="<b>Description: </b>" + desc_data;
   } 
  if(metas[i].getAttribute("property") == "og:title"){   
     var ogtitle_data =metas[i].getAttribute("content"); 
       var ogtitle_id =document.getElementById("og:title");
       ogtitle_id.innerHTML ="<b>OG Title: </b>"+ ogtitle_data;
  }
   if (metas[i].getAttribute("property") == "og:description") { 
     var ogdesc_data = metas[i].getAttribute("content"); 
      var ogdesc_id = document.getElementById("og:description");
      ogdesc_id.innerHTML ="<b>OG Description: </b>" + ogdesc_data;
   } 
  

 }
 }
