import lighthouselabs from "./images/lighthouselabs.jpg";
import {
	FaHome,
	FaFileAlt,
	FaChalkboardTeacher,
	FaUserFriends,
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
} from "react-icons/fa";

export const exp = [
	{
		id: 1,
		organization: "Lighthouse Labs",
		image: "https://i.ibb.co/3MR7txT/lighthouselabs.jpg",
		desc:
			" Lighthouse Labs full-time programs: 12 weeks, 12 hours a day; the most intensive, immersive, accelerated courses; Main stacks includes HTML, CSS, REACT, RUBY&RAIL, CYPRESS, pgSQL",
		date: "2020",
	},
	{
		id: 2,
		organization: "FLIR IIS",
		image: "https://i.ibb.co/51GvXmL/FLIR-Systems-Logo-wine.png",
		desc:
			"Current | Started working as Production Team Lead in FLIR IIS - major responsibilies includes: training new operators to do testing, optical assembly, soldering; help manager to achieve production schedule; Solving minor technical issues",
		date: "2016 - Current",
	},
	{
		id: 3,
		organization: "Point Grey Research",
		image: "https://i.ibb.co/QMC4FDC/xjigzmyc10ivj3em6kzd.png",
		desc: `Started working as a testing operator in PGR - a developer of machine vision cameras for use in industrial, retial. mapping and other advanced imaging applications. Major task is to test all kinds of cameras manufacuring company.`,
		date: "2014",
	},
	{
		id: 4,
		organization: "Simon Fraser University",
		image: "https://i.ibb.co/HYmr2wB/SFU.png",
		desc: "Graduated with a Bachelor degree in Economics",
		date: "2020",
	},
];

export const reference = [
	{
		id: 1,
		images: "https://i.ibb.co/HYmr2wB/SFU.png",
		name: "William Yu",
		title: "Production Manager",
		quote:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium unde necessitatibus est non commodi. Doloribus iure nihil explicabo dolore fugiat autem dolorum provident soluta sunt, maxime impedit consectetur exercitationem nemo",
	},
	{
		id: 2,
		images: "https://i.ibb.co/HYmr2wB/SFU.png",
		name: "Shahil Prasad",
		title: "Senior Operator in FLIR IIS",
		quote:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium unde necessitatibus est non commodi. Doloribus iure nihil explicabo dolore fugiat autem dolorum provident soluta sunt, maxime impedit consectetur exercitationem nemo",
	},
	{
		id: 3,
		images: "https://i.ibb.co/HYmr2wB/SFU.png",
		name: "Steven Chan",
		title: "Supervisor",
		quote:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium unde necessitatibus est non commodi. Doloribus iure nihil explicabo dolore fugiat autem dolorum provident soluta sunt, maxime impedit consectetur exercitationem nemo",
	},
];

export const sidebar = [
	{ id: 1, url: "/", text: "home", icon: <FaHome /> },
	{ id: 2, url: "/experience", text: "experience", icon: <FaFileAlt /> },
	{ id: 3, url: "/project", text: "projects", icon: <FaChalkboardTeacher /> },
	{ id: 4, url: "/reference", text: "reference", icon: <FaUserFriends /> },
];
export const social = [
	{
		id: 1,
		url: "https://www.twitter.com",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: "https://www.twitter.com",
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: "https://www.twitter.com",
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: "https://www.twitter.com",
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: "https://www.twitter.com",
		icon: <FaSketch />,
	},
];
