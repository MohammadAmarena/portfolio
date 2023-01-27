import translator from '../../src/assets/images/translator.png';
import shop from '../../src/assets/images/shpo.png';
import slider from '../../src/assets/images/slider.png';
import filterableTable from '../../src/assets/images/filterableTable.png';
import drum from "../../src/assets/images/drum.png";
import myImage from '../../src/assets/images/me.jpeg'
export const personData = [
    {
        firstName: "Mohammad",
        lastName: "Amaren",
        city: "Eberswalde",
        status: "active",
        image: myImage,
        description: 'A web developer who has a passion for technology, data reading and design I am enthusiastic and motivated to solve problems and ready for new challenges that I enjoy more',
        hobbys: ["Chess", "football"]
    }
];

export const projectsData = [
    {
    id: 1,
    name: "Languages translator",
    image: translator,
    tags: ["react", "sass", "typeScript"],
    source_code: "https://github.com/MohammadAmarena/Language-Translator-using-React-Hooks",
    demo: "https://mohammadamarena.github.io/Language-Translator-using-React-Hooks/",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
{
    id: 2,
    name: "Shop",
    image: shop,
    tags: ["html", "scss", "javaScript"],
    source_code: "https://github.com/MohammadAmarena/shopping-cart",
    demo: "https://mohammadamarena.github.io/shopping-cart/",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
{
    id: 4,
    name: "Image Slider",
    image: slider,
    tags: ["react", "scss", "javaScript"],
    source_code: "https://github.com/MohammadAmarena/imageSlider",
    demo: "https://image-slid.netlify.app/",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
{
    id: 5,
    name: "Filterable-table",
    image: filterableTable,
    tags: ["react", "scss", "javaScript"],
    source_code: "https://github.com/MohammadAmarena/filterableTable",
    demo: "...",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
{
    id: 6,
    name: "Drum Kit",
    image: drum,
    tags: ["html", "scss", "javascript"],
    source_code: "https://github.com/MohammadAmarena/drum-kit",
    demo: "...",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
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