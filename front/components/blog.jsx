import React from 'react'
import {text} from "./popUpTextBlock";

const blogText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a type specimen book. It has survived 
not only five centuries, but`;


export const Blog = (props) => {
    return (
        <div className={"blog"} id={"BLOG"}>
            <div className={'innerBlog'}>
                <div>CLUB BLOG</div>
                <div>{blogText}</div>
                <div onClick={() => props.click(text.substring(0, 400))}>LEARN MORE</div>
            </div>
        </div>
    )
};