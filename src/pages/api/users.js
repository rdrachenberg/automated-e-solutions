import { createUser, deleteUser, getAllUsers, getUser, updateUser  } from "../../../prisma/user";

export default async function handle(req, res) {
    try {
        switch (req.method) {
            case 'GET': {
                if(req.query.id) {
                    // if we pass in a id param in the query, then get only that one record 
                    const id = req.query.id;
                    const user = await getUser(id);

                    return res.status(200).json(user);
                } else {
                    // if there is no id param in the query, then get all user records
                    const users = await getAllUsers();

                    return res.json(users);
                }
            }
            case 'POST': {
                // create a new user 
                const {email, name} = req.body;
                const user = await createUser(email, name);

                return res.json(user);
            }
            case 'PUT': {
                // update a user record
                const {id, ...updateData} = req.body; 
                const user = await updateUser(id, updateData);

                return res.json(user);
            }
            case 'DELETE': {
                // delete a user record
                const {id} = req.body;
                const user = await deleteUser(id);
                
                return res.json(user);
            }
                
            default:
                break;
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({...error, message: error.message});
    }
}