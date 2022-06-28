window.addEventListener('load', ()=>{
	let twitter = "https://twiter.com/_mohammedsh7/"
	let instagram = "https://instagram.com/_mohammedsh7"
	let github = "https://github.com/MohammedShajahan7"
	let gitlab = "https://gitlab.com/MohammedShajahan7"

	social = [
		`<span class="command">github</span>     <span class="text"><a href="${github}" target="_blank">@MohammedShajahan7</a></span>`,
		`<span class="command">gitlab</span>     <span class="text"><a href="${gitlab}" target="_blank">@MohammedShajahan7</a></span>`,
		`<span class="command">instagram</span>  <span class="text"><a href="${instagram}" target="_blank">@_mohammedsh7</a></span>`,
		`<span class="command">twitter</span>    <span class="text"><a href="${twitter}" target="_blank">@_mohammedsh7</a></span>`,
	]

	projects = [
		{
			"id": 1,
			"name": "Moke travel",
			"source": "<a href=\"https://github.com/mohammedshajahan7/moke-travel\">Github</a>",
			"live": "<a href=\"https://github.com/mohammedshajahan7/moke-travel\">Demo</a>"
		},
		{
			"id": 2,
			"name": "Moke travel",
			"source": "<a href=\"https://github.com/mohammedshajahan7/moke-travel\">Github</a>",
			"live": "<a href=\"https://github.com/mohammedshajahan7/moke-travel\">Demo</a>"
		},
	]

	help = [
	    '<span class="command">about</span>       <span class="text">About me.</span>',
		'<span class="command">Contact</span>     <span class="text">How to react me.</span>',
		'<span class="command">Website</span>     <span class="text">My website</span>',
		'<span class="command">Projects</span>    <span class="text">List my prjects</span>',
		'<span class="command">social</span>      <span class="text">Display social networks</span>',
		'<span class="command">secret</span>      <span class="text">Find the password</span>',
		'<span class="command">projects</span>    <span class="text">View coding projects</span>',
		'<span class="command">help</span>        <span class="text">You obviously already know what this does</span>',
		'<span class="command">email</span>       <span class="text">Do not email me</span>',
		'<span class="command">clear</span>       <span class="text">Clear terminal</span>',
		'<span class="command">banner</span>      <span class="text">Display the header</span>',
	]
})