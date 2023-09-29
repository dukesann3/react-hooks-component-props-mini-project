import React from "react";
import Article from "./Article";

export default function ArticleList({posts}){
    return(
        <main>
            {posts.map((post) => {
                const {id, title, date, preview} = post;
                return <Article key={id} title={title} data={date} preview={preview}/>
            })}
        </main>
    )
}