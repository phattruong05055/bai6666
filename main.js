 const navUtems = [
    {
        name:" Item 1",
        children:["Item 1.1","Item 1.2","Item 1.3",]
    },
    {
        name:" Item 2",
        children:[
                "Item 1.1",
                "Item 1.2",
                "Item 1.3",
                "Item 1.1",
                "Item 1.2",
                "Item 1.3"
        ]
    },
    {
        name:" Item 3",
    },
    {
        name:" Item 4",
    },
    {
        name:" Item 5",
    },
 ];

window.onload = function(){
    let i = 0;
    for(Utems of navUtems){
        document.getElementsByClassName("menu")[0].innerHTML+=
        `<span id = "submenu">`+Utems.name+`
            <ul class="Num"></ul>
        </span>`;
            if(Utems.children){
                for(let item of Utems.children){
                    document.getElementsByClassName("Num")[i].innerHTML+=`<li>`+ item +`</li>`
                }i++;
            }
        }           
    }



