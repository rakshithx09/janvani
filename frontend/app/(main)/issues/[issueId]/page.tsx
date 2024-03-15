import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
    name: string
    stargazers_count: number
}

interface Post {
    id: number;
    title: string;
    description: string;
    image?: string;
    complaintType: 'association' | 'group' | 'individual';
    department: 'engineering' | 'public health' | 'revenue' | 'town planning';
    userId: number;
    createdAt: number;
}



export async function getServerSideProps({ params }: { params: { issueId: string } }) {
    const { issueId } = params;
    const res = await fetch(`https://api.example.com/posts/${issueId}`);
    const postData = await res.json() as Post;

    const commentsResponse = await fetch(`https://api.example.com/posts/${issueId}`);
    const comments = await commentsResponse.json() as Post;

    return { props: { postData, comments } };
}

export default function page({ postData, comments }: { postData: Post, comments: { userId: string, content: string }[] }) {
    return (
        <>
            <div>
                <h1>{postData.title}</h1>

                <p>
                    {postData.department}
                </p>

                <div>
                    <span>{postData.complaintType}</span>
                    <span>{postData.department}</span>
                    <span>{postData.createdAt}</span>
                </div>
            </div>

            <div>
                {comments.map((comment) => {
                    return (
                        <div>
                            <p>{comment.content}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}