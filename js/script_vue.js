new Vue({
	el: '#vue-content',
	data: {
		items: [
            "<a href='index.html'>Home</a>", 
            "<a href='about.html'>About</a>", 
            "<a href='services.html'>Services</a>", 
            "<a href='contact.html'>Contact</a>"
        ]
	}
});

new Vue({
	el: '#vue-perks',
	data: {
		htmlTech: ["XHTML, ", "HTML5 "],
		cssTech: ["CSS3, ", "BootStrap, ", "SASS/LESS "],
        JSTech: ["Vanilla JavaScript, ", "GulpJS, ", "VueJS, ", "NunjucksJS, ", "JQuery "]
	}
});

new Vue({
	el: '#vue-dev',
	data: {
		textReveal: true,
		consider: ["Cross-browser compatibility, ", "Page load speed, ", "Code validation, ", "Tabless and CSS design, ", "Clean consistent design, ", "Social networking ", "Newsletter Templates (eMailer)"]
	},

	methods: {

	}
});

new Vue({
	el: '#vue-sidebar',
	data: {
		items: [
            "<a href='index.html'>Home</a>", 
            "<a href='about.html'>About</a>", 
            "<a href='services.html'>Services</a>", 
            "<a href='contact.html'>Contact</a>"
        ],
        portfolio: [
            "<a target='_blank' href='https://github.com/zackneron?tab=repositories'>Github Links</a>", 
            "<a target='_blank' href='http://www.kathwaycity.byethost11.com/'>Kath Way</a>", 
            "<a target='_blank' href='http://www.arc-en-ciel.byethost14.com/'>Arc En Ciel</a>"
        ]
	}
});