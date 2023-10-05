import React from "react"
import { getAllPosts } from "../../prisma/blog"
import BlogCard from "src/components/BlogDisplay"
import Image from "next/image"

const Blog = ({posts}) => {
    // console.log(posts)
    return (
        <div>
            <div className='bg-slate-300 p-8'>
                <Image src={'/misc/blog.jpg'} width={350} height={200} alt="blog" className='mx-auto rounded-xl' priority/>
            </div>
            
            <div className='text-lg mb-8'>
                {posts.map(post => {
                    return (
                        <div key={post.id} className='flex mt-4'>
                            <BlogCard key={post.id} post={post}/>
                        </div>)
                    
                })}
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ req }) => {
    const posts = await getAllPosts();

    const updatedPost = posts.map(post => ({
        ...post,
        updatedAt: post.updatedAt.toString(),
        createdAt: post.createdAt.toString()
    }))
    
    return {props: {posts: updatedPost}}
}

export default Blog