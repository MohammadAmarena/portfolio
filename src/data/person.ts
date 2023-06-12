import translator from '../../src/assets/images/translator.png';
import shop from '../../src/assets/images/shpo.png';
import slider from '../../src/assets/images/slider.png';
import filterableTable from '../../src/assets/images/filterableTable.png';
import drum from "../../src/assets/images/drum.png";
import myImage from '../../src/assets/images/myImage.png'
import toDoApp from '../../src/assets/images/toDoApp.png'
import fitness from '../../src/assets/images/fitness.png'
export const personData = [
    {
        firstName: "Mohammad",
        lastName: "Amaren",
        city: "Eberswalde",
        status: "active",
        image: myImage,
        description: 'As a web developer, I specialize in creating custom websites that are tailored to meet the specific needs of my clients. With a focus on clean, efficient code and responsive design, I strive to deliver intuitive and visually compelling websites that help my clients achieve their business goals.',
        hobbys: ["Chess", "football"]
    }
];

export const projectsData = [
    {
    id: 1,
    name: "Fitness Studio",
    image: fitness,
    tags: ["typeScript", "react", "express", "mongoDB", "node.js", "socket.io", "scss", "nodeMailer", "cloudinary", "paypal", "mailgun", "bomotstrap", "bcryptjs"],
    source_code: "https://github.com/MohammadAmarena/xbody",
    demo: "",
    description: "A web site designed for a fitness studio that incorporates an e-commerce shop."
},
    {
    id: 2,
    name: "Languages translator",
    image: translator,
    tags: ["react", "scss", "typeScript"],
    source_code: "https://github.com/MohammadAmarena/Language-Translator-using-React-Hooks",
    demo: "https://mohammadamarena.github.io/Language-Translator-using-React-Hooks/",
    description: "Convert written material from one or more 'source languages' into the 'target language', making sure that the translated version conveys the meaning of the original as clearly as possible."
},
{
	id: 3,
	name: "ToDo App",
	image: toDoApp,
	tags: ["typescript", "scss", "react"],
	source_code: "https://github.com/MohammadAmarena/todoApp",
	demo: "https://todo-app-steel-eight.vercel.app/",
	description: "ToDo App is generally used to maintain our day-to-day tasks or list everything that we have to do, and the least important tasks at the bottom. It is helpful in planning our daily schedules."
	},
	{
	id: 4,
	name: "Image Slider",
	image: slider,
	tags: ["react", "scss", "javaScript"],
	source_code: "https://github.com/MohammadAmarena/imageSlider",
	demo: "https://image-slid.netlify.app/",
	description: "A feature used on websites to display multiple images in a single space. With a button to toggle image descriptions, view additional context without cluttering the display."
},
/* {
    id: 4,
    name: "Shop",
    image: shop,
    tags: ["html", "scss", "javaScript"],
    source_code: "https://github.com/MohammadAmarena/shopping-cart",
    demo: "https://mohammadamarena.github.io/shopping-cart/",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
}, */
{
    id: 5,
    name: "Filterable-table",
    image: filterableTable,
    tags: ["react", "scss", "javaScript"],
    source_code: "https://github.com/MohammadAmarena/filterableTable",
    demo: "...",
    description: "Filterable tables streamline displayed data by allowing users to search, filter, users can selectively show or hide specific items to streamline the displayed data"
},
{
    id: 6,
    name: "Drum Kit",
    image: drum,
    tags: ["html", "scss", "javascript"],
    source_code: "https://github.com/MohammadAmarena/drum-kit",
    demo: "...",
    description: "A drum kit can refer to a physical set of instruments or a virtual instrument software or app that simulates the sound and experience of playing a physical drum kit."
    }
];

export const skillsData = [
    {
        type: "JAVASCRIPT",
        level: 85
    },
    {
        type: "REACT",
        level: 80
    },
    {
        type: "TYPESCRIPT",
        level: 70
    },
	{
		type: "HTML",
		level: 90
	},
	{
		type: "CSS",
		level: 85
	},
	{
		type: "BOOTSTRAP",
		level: 70
	},
	{
		type: "SASS",
		level: 80
	},
	{
        type: "NODE.JS",
		level: 75
	},
    {
        type: "EXPRESS.JS",
        level: 80
    },
	{
		type: "MONGODB",
		level: 70
	},
	{
		type: "MONGOOSE",
		level: 75
	},
	{
		type: "GIT",
		level: 80
	}
];

export const colorsData = {
	bar: {
		hue: 32,
		saturation: 50,
		level: {
			minimum: 30,
			maximum: 70
		}
	},
	title: {
		text: {
			hue: 45,
			saturation: {
				minimum: 30,
				maximum: 70
			},
			level: 50
		},
		background: {
			hue: 30,
			saturation: {
				minimum: 30,
				maximum: 70
			},
			level: {
				minimum: 0,
				maximum: 50
			}
		}
	}
};