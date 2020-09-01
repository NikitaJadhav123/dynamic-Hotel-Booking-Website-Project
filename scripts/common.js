let displayHeaderTemplate = () => {
   let headerTemplate = `<img class="imgstyle" src="assests/images/logo.png" alt="logo"/>  
   <button type="button" 
   style="margin-right: 2%; right: 0%;margin-top: 10px;text-decoration: none;position: absolute;" 
   class="btn btn-light" data-toggle="modal" data-target="#loginModal">
  LOGIN
</button>

<div class="modal" id="loginModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header" id="loginModal">
      <h5 class="modal-title" id="idLoginModal">Please Login</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button> </div> 
     

      <!-- Modal body -->
      <div class="modal-body">
      <form method="GET" action="index.html">
          <div class="form-group" style="display:flex; flex-direction:column; ">
          <li class="listSty">
          <label class="labelSty" for="username">Username:</label>
          <input class="inputSty" type="text" name="username" id="username" placeholder="Enter Username" required/></li>
          <br />
          <li class="listSty">
          <label class="labelSty" for="password">Password:</label>
          <input class="inputSty" type="password" name="password" id="password" placeholder="Enter Password" required/></li>
          <br />
          </form>
      
      </div>

      <!-- Modal footer -->
      <div class="modal-footer" style="display:flex; justify-content:center;">
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="login">Login</button>
      </div>

    </div>
  </div>
</div>`;
   document.getElementById('header').innerHTML = headerTemplate;
};
displayHeaderTemplate();



let displayFooterTemplate = () => {
    let footerTemplate = `
    <div class="iconSty"> 
    <a href="https://www.facebook.com" target="_blank" style="text-decoration: none;" > 
    <img class="footerimg" src="assests/images/facebook.png"> </a>

    <a href="https://www.instagram.com" target="_blank" style="text-decoration: none;"> 
    <img class="footerimg" src="assests/images/instagram.png"> </a>
        
    <a href="https://twitter.com" target="_blank" style="text-decoration: none;"> 
    <img class="footerimg" src="assests/images/twitter.png"> </a>
    </div> 
    </br> 
        
    <p class="copyrightSty">© 2020 ROOM SEARCH PVT. LTD.</p>
    <button type="button" style="bottom:18%; margin-left: 4%; text-decoration: none; position: absolute; "
     class="btn btn-info" data-toggle="modal" data-target="#contactModal">
    Contact Us
 </button>
 
 <div class="modal" id="contactModal">
   <div class="modal-dialog">
     <div class="modal-content">
 
       <!-- Modal Header -->
       <div class="modal-header" id="contactModal">
       <h5 class="modal-title" id="idContactModal">Get in touch</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
       </button> </div> 
      
 
       <!-- Modal body -->
       <div class="modal-body">
       <form method="GET" action="index.html">
           <div class="form-group" style="display:flex; flex-direction:column; ">
           <form method="GET" action="index.html" autocomplete="off">
           <span>Thank you for reaching out!!!</span>
           <span>Please enter your email and we will get back to you</span></br></br>
           <li class="listSty" style="justify-content:flex-start;"> 
           <label for="username">Email:</label>
           <input type="email" name="email" id="email" placeholder="Enter your email id" required/></li>
           
        
        </form>
       
       </div>
 
       <!-- Modal footer -->
       <div class="modal-footer" style="display:flex;">
         <button type="button" class="btn btn-primary" data-dismiss="modal" id="contact">Submit</button>
       </div>
 
     </div>
   </div>
 </div>
 `;
    document.getElementById('footer').innerHTML = footerTemplate;
 };
 displayFooterTemplate();