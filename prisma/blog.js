import prisma from "./prisma";

// read functionality 
// get all the posts in the db 
export const getAllPosts = async () => {
    const posts = await prisma.blogPost.findMany({});
    return posts
}

// get a single post record
export const getPost = async id => {
    const post = await prisma.blogPost.findUnique({
        where: {id}
    });
    return post 
}

// create
export const createPost = async (author, title, content) => {
    const post = await prisma.blogPost.create({
        data: {
            author,
            title,
            content
        }
    })

    return post 
}

// update 
export const updatePost = async (id, updateData) => {
    const post = await prisma.blogPost.update({
        where: {
            id
        },
        data: {
            ...updateData
        }
    })
    
    return post
}

// delete 
export const deletePost = async id => {
    const post = await prisma.blogPost.delete({
        where: {
            id
        }
    })

    return post
}