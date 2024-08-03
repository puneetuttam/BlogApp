import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container,PostCard } from "../components";
const AllPosts = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPost(posts.documents);
            }
        });
    });
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p2 w-14">
                            <PostCard post={post}></PostCard>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AllPosts;
