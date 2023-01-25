import translator from '../../src/assets/images/translator.png';
import shop from '../../src/assets/images/shpo.png';
import slider from '../../src/assets/images/slider.png';
import filterableTable from '../../src/assets/images/filterableTable.png';
import drum from "../../src/assets/images/drum.png";

export const personData = [
    {
        firstName: "Mohammad",
        lastName: "Amaren",
        city: "Eberswalde",
        status: "active",
        image: "../images/me.jpeg",
        hobbys: ["Chess", "football"]
    }
];

export const projectsData = [
    {
    id: 1,
    name: "Languages translator",
    image: translator,
    tags: ["html", "sass", "javaScript", "pugjs"],
    source_code: "https://github.com/MohammadAmarena/Language-Translator-using-React-Hooks",
    demo: "https://mohammadamarena.github.io/Language-Translator-using-React-Hooks/"
    },
    {
    id: 2,
    name: "Shop",
    image: shop,
    tags: ["html", "css-modules", "javaScript"],
    source_code: "https://github.com/MohammadAmarena/shopping-cart",
    demo: "https://mohammadamarena.github.io/shopping-cart/"
    },
    {
    id: 4,
    name: "Image Slider",
    image: slider,
    tags: ["html", "bootstrap"],
    source_code: "https://github.com/MohammadAmarena/imageSlider",
    demo: "..."
    },
    {
    id: 5,
    name: "Filterable-table",
    image: filterableTable,
    tags: ["html", "bootstrap"],
    source_code: "https://github.com/MohammadAmarena/filterableTable",
    demo: "..."
    },
    {
    id: 6,
    name: "Drum Kit",
    image: drum,
    tags: ["html", "bootstrap"],
    source_code: "https://github.com/MohammadAmarena/drum-kit",
    demo: "..."
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
		level: 80
	},
	{
		type: "BOOTSTRAP",
		level: 70
	},
	{
		type: "SASS",
		level: 85
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