"use client";
import React from "react";
import Project from "../components/project/project";
import Institution from "../components/institution/Institution";
import Team from "../components/team/team";
import Hero from "../components/header/Hero";
import Blog from "../components/blog/Blog";
import ContactUs from "../components/contactUs/ContactUs";
import Jobs from "./jobs/page";
import Blogs from "./blogs/page";
import AboutUs from "./aboutUs/page";
import AllTeam from "./team/page";
import Products from "./products/page";
import Services from "./servicess/page";
import BlogDetails from "./blogs/blogdetails/page";
import QuestionnaireForm from "./customerRequest/page";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out transform">
        <Institution />
        <Project />
        <Team />
        <Blog />
        <ContactUs />
        {/* <Products /> */}
        {/* <Services />
      {/* <AboutUs /> */}
        {/* <BlogDetails /> */}
        {/* <QuestionnaireForm /> */}
      </main>
    </>
  );
}
