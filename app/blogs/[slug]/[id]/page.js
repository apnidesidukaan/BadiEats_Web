"use client";

import React from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import { useFetchBlogsById } from "../../../controllers/blogs";
import NavbarMega from "../../../components/NavbarMega";
import Footer from "../../../components/Footer";

//================================================================
export default function BlogDetailPage() {
  const { slug, id } = useParams(); // dynamic route: /blogs/[slug]/[id]

  const { blog } = useFetchBlogsById(id)



  // const formattedDate = new Date(blog?.createdAt).toISOString().split("T")[0];
  // console.log('formattedDate', formattedDate);

  //================================================================
  return (
    <>
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.excerpt || blog?.title} />
        <meta name="keywords" content={blog?.seo?.keywords?.join(", ")} />
      </Head>
      <NavbarMega />
      <div className="w-full bg-white">
        {/* Cover image */}
        <div className="w-full h-72 md:h-[400px] relative">
          <img
            src={blog?.coverImageUrl ? blog?.coverImageUrl : "/news.png"}
            alt={blog?.title}
            className="object-cover w-full h-full rounded-b-3xl"
          />
        </div>

        {/* Content container */}
        <div className="max-w-4xl mx-auto px-6 md:px-0 py-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {blog?.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
            <span>🖊️ {blog?.author}</span>
            {/* <span>📅 {formattedDate}</span> */}
          </div>

          <div
            className="prose prose-xl  text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />


          {blog?.tags?.length > 0 && (
            <div className="mt-10">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {blog?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
