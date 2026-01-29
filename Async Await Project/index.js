async function github() {

    try{
        const response= await fetch("https://api.github.com/users");

        if(!response.ok){
            throw new Error("Data is not present");
        }
        const data= await response.json();

        const parent=document.getElementById("first");

        for(let user of data){
            const element=document.createElement("div");
            element.classList.add("user");

            const image = document.createElement('img');
            image.src=user.avatar_url;

            const username=document.createElement('h2');
            username.textContent=user.login;

            const anchor=document.createElement('a');
            anchor.href=user.html_url;
            anchor.textContent="Visit Profile";

            element.append(image,username,anchor);
            parent.append(element);
            
        }
    }
    catch(error){
        console.log("error");
    }
    
}

github();