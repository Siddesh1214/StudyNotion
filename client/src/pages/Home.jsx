import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighLightText from "../components/core/HomePage/HighLightText";
import Button from "../components/core/HomePage/Buttton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguages from "../components/core/HomePage/LearningLanguages";
import InstructorImg from '../assets/Images/Instructor.png'
import Reviews from "../components/core/HomePage/Reviews";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";


function Home() {
	return (
		<div className="">
			{/* section 1 */}
			<div className="relative mx-auto flex flex-col items-center text-white justify-between gap-[1rem] w-10/12">
			{/* <span className="text-white text-4xl">disha shinde</span> */}

				<Link to={"/signup"}>
					<div className="group mx-auto mt-10 rounded-full text-richblack-200 font-bold bg-richblack-800  transition-all duration-200 hover:scale-90 w-fit">
						<div className="flex items-center gap-3 px-5 py-2 transition-all duration-200 group-hover:bg-richblack-900 border-4 rounded-lg ">
							<p>Become an Instructor</p>
							<FaArrowRight />
						</div>
					</div>
				</Link>

				<div className="text-center text-4xl font-semibold mt-7">
					{/* Empower Your Future With{" "}
					<HighLightText text={"Coding Skills"}></HighLightText> */}

					Empower Your Future With
                <HighLightText text={"Coding Skills"} />
				</div>

				<div className="text-lg font-bold text-richblack-300 mx-auto w-[90%] text-center">
					With our online coding courses, you can learn at your own pace, from
					anywhere in the world, and get access to a wealth of resources,
					including hands-on projects, quizzes, and personalized feedback from
					instructors.
				</div>

				<div className="flex flex-row gap-7 mt-2">
					<Button active={true} linkto={"/signup"}>
						{" "}
						Learn More{" "}
					</Button>
					<Button active={false} linkto={"/login"}>
						{" "}
						Book a Demo{" "}
					</Button>
				</div>

				<div className="shadow-blue-200 shadow-md my-7 mx-3 w-[100%]  relative">
					{/* <div className="grad2 absolute bg-white  -top-10 w-[800px]"></div> */}
					<video muted loop autoPlay className="">
						<source src={Banner} type="video/mp4" />
					</video>
					{/* <div className='bg-white h-[100%] w-full absolute bottom-5 left-5 '></div> */}
				</div>

				{/* code section 1 */}
				<div className="relative ">
					{/* <div className=" h-[300px] w-[300px] absolute bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 top-[10%] right-[10%] blur-sm rounded-[45%] z-[1]"></div> */}

					<CodeBlocks
						position={"lg:flex-row"}
						heading={
							<div className="text-4xl font-semibold">
								Unlock your
								<HighLightText text={" coding potential "} />
								with our online courses
							</div>
						}
						subheading={
							"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
						}
						ctabtn1={{
							text: "try it yourself",
							linkto: "/signup",
							active: true,
						}}
						ctabtn2={{
							text: "learn more",
							linkto: "/login",
							active: false,
						}}
						// codeblock={`<<!DOCTYPE html> \n <html>\n <head><title>Example</title>`}
						codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
						codeColor={`text-yellow-50`}
						backGradient={
							<div className="codeblock1-bg absolute left-[760px]"></div>
						}
					/>
				</div>

				{/* code section 2 */}
				<div className="relative">
					{/* <div className='codeblock-backgrnd-grad-2 w-[25%] h-[12%] '></div> */}
					<CodeBlocks
						position={"lg:flex-row-reverse"}
						heading={
							<div className="text-4xl font-semibold ">
								Start to learn
								<HighLightText text={"coding in seconds"} />
								{/* <HighLightText text={''} /> */}
							</div>
						}
						subheading={`Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.`}
						ctabtn1={{
							text: "continue lesson",
							linkto: "/signup",
							active: true,
						}}
						ctabtn2={{
							text: "learn more",
							linkto: "/login",
							active: false,
						}}
						// codeblock={`<<!DOCTYPE html> \n <html>\n <head><title>Example</title>`}
						codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
						codeColor={`text-yellow-50`}
						backGradient={
							<div className="codeblock2-bg absolute left-14"></div>
						}
					/>
				</div>

				<ExploreMore></ExploreMore>
			</div>

			{/* section 2 */}
			<div className="bg-pure-greys-5 text-richblack-700 flex flex-col gap-20 ">
				<div className="homepage-bg h-[318px] flex justify-center items-center">
					{/* <h1>Good</h1> */}
					<div className="w-[10/12] max-w-maxContent flex items-center gap-5 mx-auto">
						<Button active={true} linkto={"/signup"}>
							<div className="flex items-center gap-2">
								Explore Full Catlog
								<FaArrowRight />
							</div>
						</Button>
						<Button active={false} linkto={"/signup"}>
							<div className="flex items-center">Learn More</div>
						</Button>
					</div>
				</div>
				<div className="flex flex-col gap-20 ">
					<div className="flex w-10/12 max-w-maxContent mx-auto items-center justify-between  mt-16 gap-[5rem]">
						<div className="text-4xl font-semibold text-richblue-900 w-[45%] ">
							Get the skills you need for a{" "}
							<HighLightText text={"job that is in demand"}></HighLightText>
						</div>
						<div className="flex flex-col gap-10 w-[40%] items-start">
							<p className="text-[16px]">
								The modern StudyNotion is the dictates its own terms. Today, to
								be a competitive specialist requires more than professional
								skills.
							</p>
							<Button className="w-20" active={true} linkto={"/signup"}>
								<div className="w-20">Learn More</div>
							</Button>
						</div>
					</div>

					<TimeLineSection></TimeLineSection>
					<LearningLanguages></LearningLanguages>
				</div>
			</div>

			{/* section 3*/}
			<div className='w-10/12 relative mx-auto flex flex-col gap-16 py-24 lg:flex-row'>
				<img  src={InstructorImg} alt="" className="shadow-white shadow-[-20px_-20px_0_0] lg:w-[50%]"/>
				<div className="flex flex-col gap-5 lg:justify-center">
					<div className='font-semibold text-3xl flex gap-3 text-white'>
						Become an <HighLightText text={'instructor'}></HighLightText>
					</div>
					<p className='text-richblack-100'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
					<Button className='w-20' active={true} linkto={"/signup"}>
						<div className='flex items-center gap-3'>
							Start Teaching Today
							<FaArrowRight />
						</div>
					</Button>
				</div>
			</div>
			<Reviews></Reviews>

			
			{/* section 4 */}
			<Footer></Footer>
		</div>
	);
}

export default Home;
