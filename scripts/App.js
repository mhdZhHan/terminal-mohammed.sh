window.addEventListener('load', ()=>{
    const APP = document.querySelector('#terminal')
    const delay = ms => new Promise(res=>setTimeout(res, ms))

    APP.addEventListener('keypress', async(event)=>{
        if(event.key == "Enter"){
            await delay(150)
            commander()
            removeInput()
            await delay(150)
            newLine()
        }
    })

    APP.addEventListener('click', (event)=>{
        document.querySelector("input").focus()
    })

    async function openTerminal(){
        // trueValue("start")
        // createText("Welcome to my terminal")
        // await delay(500)
        createText("Starting server...")
        await delay(500)
        createText("You can give different commands")

        addCommand("help", "--  For help")
        addCommand("clear", "--  Clear the terminal")
        await delay(500)

        newLine()
    }

    function newLine(){
        const p = document.createElement("p")
        p.setAttribute("class", "path")

        let path = `[<span class="user">guest</span><span class="at">@</span>mohammed.sh<span class="tilde"> ~</span>]$`
        p.innerHTML = path

        const div = document.createElement("div")
        div.setAttribute("class", "type")

        const input = document.createElement("input")

        div.append(p)
        div.append(input)
        APP.append(div)
        input.focus()
    }


    function removeInput(){
        const div = document.querySelector(".type")
        APP.removeChild(div)
    }


    async function commander(){
        const value = document.querySelector("input").value
        switch (value) {
            case "banner":
                trueValue(value)
                createText("404 banner not found. :)")
            case "help":
                trueValue(value)
                createList(help)
                break
            case "social":
                trueValue(value)
                createList(social)
                break
            case "about":
                trueValue(value)
                createText("Hi ! I'm Mohammed 👋")
                createText("A 21st century kid, Mostly hacks on FOSS enthusiast, GNU/Linux user, Blogger & Noob Programer :)")
                break
            case "secret":
                trueValue(value)
                addCommand("sudo", "Only use if you\'re admin")
                break
            case "sudo":
                trueValue(value)
                createText("Oh no, you're not admin...")
                break
            case "contact":
                trueValue(value)
                createText("Contact me own the way.. soon")
                break
            case "website":
                trueValue(value)
                createText("Opening mohammed.sh...")
                newTab("https://mohammedsh.com")
                break
            case "projects":
                trueValue(value)
                createTable(projects)
                break
            case "github":
                trueValue(value)
                createText("Opening Github...")
                newTab("https://github.com/MohammedShajahan7")
                break
            case "gitlab":
                trueValue(value)
                createText("Opening Gitlab...")
                newTab("https://gitlab.com/MohammedShajahan7")
                break
            case "instagram":
                trueValue(value)
                createText("Opening Instagram...")
                newTab("https://instagram.com/_mohammedsh7")
                break
            case "twitter":
                trueValue(value)
                createText("Opening Twitter...")
                newTab("https://twiter.com/_mohammedsh7/")
                break
            case "clear":
                document.querySelectorAll("p").forEach((event)=>{
                  event.parentNode.removeChild(event)
                })
                document.querySelectorAll("section").forEach((event)=>{
                    event.parentNode.removeChild(event)
                })
                document.querySelectorAll("ul").forEach((event)=>{
                    event.parentNode.removeChild(event)
                })
                document.querySelectorAll("table").forEach((event)=>{
                    event.parentNode.removeChild(event)
                })
                break
            default:
                falseValue(value)
                createText(`${value}: command not found. Try 'help' to get started.`)
                break
        }
    }

    function trueValue(value){
        if(!value){
            value = ""
        }
        const p = document.createElement("p")
        p.setAttribute("class", "path")
    
        let path = `[<span class="user">guest</span><span class="at">@</span>mohammed.sh<span class="tilde"> ~</span>]$`
        p.innerHTML = path
    
        const div = document.createElement("section")
        div.setAttribute("class", "type2")
    
        const message = document.createElement("h2")
        message.setAttribute("class", "success")
        message.textContent = `${value}`
    
        div.append(p)
        div.append(message)
        APP.append(div)
    }

    function falseValue(value){
        const p = document.createElement("p")
        p.setAttribute("class", "path")
    
        // let path = `[guest@mohammed.sh <span class="tilde">~</span>]$`
        let path = `[<span class="user">guest</span><span class="at">@</span>mohammed.sh<span class="tilde"> ~</span>]$`
        p.innerHTML = path
    
        const div = document.createElement("section")
        div.setAttribute("class", "type2")
    
        const message = document.createElement("h2")
        message.setAttribute("class", "error")
        message.textContent = `${value}`
    
        div.append(p)
        div.append(message)
        APP.append(div)
    }

    function newTab(link) {
        setTimeout(function() {
          window.open(link, "_blank");
        }, 500);
    }

    function createText(text, classname){
        const p = document.createElement("p")
        p.innerHTML = text
        APP.appendChild(p)
    }

    function addCommand(command, text){
        const p = document.createElement("p")
        p.setAttribute("class", "command")
        p.innerHTML = `${command}<br/><span class="text">${text}</span>`
        APP.appendChild(p)
    }

    function createList(command, style){
        const ul = document.createElement("ul")
        ul.setAttribute("class", "commands")
        command.forEach((item, index)=>{
            const li = document.createElement("li")
            li.innerHTML = item
            ul.appendChild(li)
        })
        APP.appendChild(ul)
    }

    function createTable(command){
        const table = document.createElement("table")
        table.setAttribute("class", "soft_table")
        command.forEach((item)=>{
            tableData = `
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Live</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.source}</td>
                        <td>${item.live}</td>
                    </tr>
                </tbody>
            `
            table.innerHTML = tableData
        })
        APP.appendChild(table)
    }

    openTerminal()
})