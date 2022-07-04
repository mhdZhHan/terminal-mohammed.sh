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
                break
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
                createText("Hi ! I'm Mohammed 👋", "line_height")
                createText("A 21st century kid, Mostly hacks on FOSS enthusiast, GNU/Linux user, Blogger & Noob Programer :)", "line_height")
                break
            case "whoami":
                trueValue(value)
                createText("The paradox of “Who am I?” is: we never know, but, we constantly find out.", "line_height")
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
            case "email":
                trueValue(value)
                createText("Opening mailto: hello.mohammedshajahan@gmail.com")
                newTab("mailto:hello.mohammedshajahan@gmail.com")
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
            case "linkedin":
                trueValue(value)
                createText("Opening Linkedin...")
                newTab("https://www.linkedin.com/in/mohammedshajahan/")
                break
            case "telegram":
                trueValue(value)
                createText("Opening Telegram...")
                newTab("https://t.me/mohammed_shajahan")
                break
            case "clear":
                clearTerminal("p")
                clearTerminal("section")
                clearTerminal("ul")
                clearTerminal("table")
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
        p.setAttribute("class", classname ? classname: "")
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

    // createTable for list projects
    function createTable(command){
        const table = document.createElement("table")
        table.setAttribute("class", "soft_table")

        // table head start
        const thead = document.createElement("thead")
        const trhead = document.createElement("tr")
        const theadValues = ["Name", "Source", "Live"]
        theadValues.forEach((item)=>{
            const th = document.createElement("th")
            th.textContent = item
            trhead.appendChild(th)
        })
        thead.appendChild(trhead)
        table.appendChild(thead)
        // table head end

        // table body start
        const tbody = document.createElement("tbody")
        command.forEach((item)=>{
            const trbody = document.createElement("tr")
            trbody.innerHTML = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.source}</td>
                    <td>${item.live}</td>
                </tr>
            `
            tbody.appendChild(trbody)
        })
        table.appendChild(tbody)
        // table body end

        // table footer start
        const tfoot = document.createElement("tfoot")
        const trtfoot = document.createElement("tr")
        const tdtfoot = document.createElement("td")
        const attributes = {
            colspan: "3",
            class: "line_height",
            style: "text-align: center;",
        }
        Object.keys(attributes).forEach(attr => tdtfoot.setAttribute(attr, attributes[attr]))
        tdtfoot.textContent = "Still curating... most projects are offline, on Gitlab, GitHub, or confidential."
        trtfoot.appendChild(tdtfoot)
        tfoot.appendChild(trtfoot)
        table.appendChild(tfoot)
        // table footer end

        APP.appendChild(table)
    }

    function clearTerminal(element){
        document.querySelectorAll(element).forEach((event)=>{
            event.parentNode.removeChild(event)
        })
    }

    openTerminal()
})
