import React from "react";
import { FooterLink2 } from "../../data/footer-links";

import Logo from "../../assets/Logo/Logo-Full-Light.png";

import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resources = [
	"Articles",
	"Blog",
	"Chart Sheet",
	"Code Challenges",
	"Docs",
	"Projects",
	"Videos",
	"Workspaces",
];

const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

function Footer() {
	return (
		<div className="bg-richblack-800">
			<div>
				<div className="w-10/12 flex flex-col mx-auto py-10 lg:flex-row">
					<div className="flex">
						<div className="flex flex-col justify-centre gap-1 text-white w-[70%] lg:ml-10">
							<img
								className="w-[80%] h-8 mb-1 md:w-32 lg:w-48 "
								src={Logo}
								alt="logo"
							/>
							<h1 className="font-semibold">Company</h1>
							<div className="flex flex-col gap-1 font-[14px] text-richblack-50">
								<span>About</span>
								<span>Careers</span>
								<span>Affiliates</span>
							</div>
							<div className="flex gap-3 my-2 text-lg">
								<FaFacebook />
								<FaGoogle />
								<FaTwitter />
								<FaYoutube />
							</div>
						</div>
						<div className="w-[60%] lg:mx-[20rem]">
							<h1 className="text-white font-semibold mb-1">Resources</h1>
							<div className="flex flex-col gap-2 ">
								{Resources.map((elem, i) => (
									<p key={i} className="text-richblack-50 text-[14px]">
										{elem}
									</p>
								))}
							</div>
							<h1 className="text-white font-semibold mt-6">Support</h1>
							<span className="text-richblack-50 text-[14px]">Help Centre</span>
						</div>
					</div>

					<div className="flex flex-col gap-5 lg:ml-10">
						<div className="flex flex-col gap-2">
							<h1 className="text-white font-semibold">Plans </h1>
							<div className="flex flex-col gap-1">
								{Plans.map((elem, i) => (
									<div className="text-richblack-50 text-[14px]" key={i}>
										{elem}
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="text-white font-semibold">Community </h1>
							<div className="flex flex-col gap-1">
								{Community.map((elem, i) => (
									<div className="text-richblack-50 text-[14px]" key={i}>
										{elem}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="lg:w-[50%] flex flex-wrap flex-row justify-between w-10/12 mx-auto lg:pl-5 gap-8">
				{FooterLink2.map((ele, i) => {
					return (
						<div key={i} className="w-[48%] lg:w-[30%] mb-7">
							<h1 className="text-white font-semibold text-[16px]">
								{ele.title}
							</h1>
							<div className="flex flex-col gap-2 mt-2 text-richblack-50">
								{ele.links.map((link, index) => {
									return (
										<div
											key={index}
											className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
										>
											<Link to={link.link}>{link.title}</Link>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Footer;
