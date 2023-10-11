import { useState } from "react"

const BlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [nowDate, setNowDate] = useState(new Date());
    const [author, setAuthor] = useState('Nick K');
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        
    };

    const handleSubmit = e => {
        e.preventDefault();

        console.log(title);
        console.log(content);
        

        const data = JSON.stringify({
            author,
            title,
            content,
            createdAt: nowDate,
            updatedAt: nowDate
        });
        
        console.log(data)

        fetch('/api/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            
            body: data,
        }).then((res) => {
            console.log(res)
            if(res.status === 200) {
                window.location.href= '/success'
            } else {
                setErrors([res.statusText]);
            }
        }).catch((error) => {
            setErrors(error.message)
        })

        
        console.log(data)

    }

    return (
        <div className='max-w-[70%] mx-auto p-8'>
            <div>
                <label className="block mb-1" htmlFor="title">Title</label>
                <input className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="What is the title of the post?"/>
            </div>
            <div>
                <label className="block mb-1" htmlFor="forms-labelOverInputCode">Post</label>
                <textarea className="w-full h-80 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <div className='place-items-end justify-end justify-items-end content-end items-end flex'>
                <button className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700" onClick={handleSubmit}>Post</button>
            </div>
        </div>
    )
}

export default BlogPost