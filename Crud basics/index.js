let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts')

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();

  

});

let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "post cannot be blank"
        console.log('failure');
    }
    else{
        msg.innerHTML = "Successfully posted"
        console.log("success")
          acceptData(); // calling the function of storing data


    }
};

// storing data

let data = {} ;

let acceptData = ()=>{
    data["text"] = input.value;   // to push data into let data[] = {}
    console.log(data);
    creatPost();// calling function to show data on screen
};

let creatPost = ()=>{
    posts.innerHTML += `
     <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;

  input.value = ''  // to reset form to its original state
};



let deletePost = (e)=>{
    e.parentElement.parentElement.remove(); 

};

let editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
     e.parentElement.parentElement.remove(); 

    
};


