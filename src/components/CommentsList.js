import React from "react";

export  const CommentsList = ({ comments }) => {
    return (
        <>
            <h3 className="sm:text-2xl text-xl font-bold mt-6 mb-4">Comments</h3>
            {comments.map((comment, key) => (
                <div className="mb-4" key={key}>
                    <h4 className="font-bold">{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </>
    );
}