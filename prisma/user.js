import prisma from "./prisma";

// read functionality 
// get all the users in the db 
export const getAllUsers = async () => {
    const users = await prisma.user.findMany({});
    return users
}

// get a single user record
export const getUser = async id => {
    const user = await prisma.user.findUnique({
        where: {id}
    });
    return user 
}

// create
export const createUser = async (email, name) => {
    const user = await prisma.user.create({
        data: {
            email,
            name
        }
    })

    return user 
}

// update 
export const updateUser = async (id, updateData) => {
    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            ...updateData
        }
    })
    
    return user
}

// delete 
export const deleteUser = async id => {
    const user = await prisma.user.delete({
        where: {
            id
        }
    })

    return user
}