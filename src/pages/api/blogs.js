import { getAllPosts, getPost, createPost, updatePost, deletePost } from "../../../prisma/blog";

export default async function handle(req, res) {
    try {
        switch (req.method) {
            case 'GET': {
                if(req.query.id) {
                    // if we pass in a id param in the query, then get only that one record 
                    const id = req.query.id;
                    const post = await getPost(id);

                    return res.status(200).json(post);
                } else {
                    // if there is no id param in the query, then get all user records
                    const post = await getAllPosts();

                    return res.json(post);
                }
            }
            case 'POST': {
                // create a new user 
                const {author, title, content} = req.body;
                const post = await createPost(author, title, content);

                return res.json(post);
            }
            case 'PUT': {
                // update a user record
                const {id, ...updateData} = req.body; 
                const post = await updatePost(id, updateData);

                return res.json(post);
            }
            case 'DELETE': {
                // delete a user record
                const {id} = req.body;
                const post = await deletePost(id);
                
                return res.json(post);
            }
                
            default:
                break;
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({...error, message: error.message});
    }
}