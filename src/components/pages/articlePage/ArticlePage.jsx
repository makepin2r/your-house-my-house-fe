import React, { useEffect, useState } from "react";
import { StMainVis, StArticleWrapper, StArticleHeader, StArticle, StBookmarkButton, StArticleSideBar } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import TaggedImage from "./taggedImage/TaggedImage";
import { getArticlePage } from "../../../api/article";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const ArticlePage = () => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticlePage(1) 
            .then((res) => {
                setArticle(res.data.findArticle);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log("article.tags[0]", article);
    return (
        <>
            <StMainVis>
                <img
                    src={article?.coverImage}
                    alt=""
                />
            </StMainVis>
            <StArticleWrapper>
                <StArticleHeader>
                    <h2>{article?.title}</h2>
                    <div>
                        <div>
                            <img src="/assets/images/img-avatar.png" alt="" />
                        </div>
                        <p>{article?.nickname}</p>
                    </div>
                </StArticleHeader>
                <StArticle>
                    {/* 👇 Test용 TaggedImage */}
                    {
                        article !== null &&
                        <TaggedImage key={1} tags={article.tags[0]} />
                    }
                    {article !== null &&
                    ReactHtmlParser(article.content, {
                        transform: (node, index) => {
                            if(node.type === 'tag' && node.name === 'img') {
                                return <TaggedImage key={index + 1} tags={article.tags[index]} />
                            }
                        }
                    })}
                </StArticle>
                <StArticleSideBar>
                    <StBookmarkButton>
                        <FontAwesomeIcon icon={faBookmark} />
                    </StBookmarkButton>
                </StArticleSideBar>
            </StArticleWrapper>
        </>
    );
};

export default ArticlePage;
