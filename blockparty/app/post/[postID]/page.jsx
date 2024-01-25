import Post from "../../components/post"
export default function Page({ params }) {
    return <Post postData={params.postID}/>
}