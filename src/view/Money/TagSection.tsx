import styled from "styled-components";
import React, {useState} from "react";
const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
>ol{
  margin: 0 -12px;
  >li{
    background: #d9d9d9;
    border-radius: 18px;
    display: inline-block;
    padding: 4px 18px;
    font-size: 14px;
    margin: 8px 12px;
    &.selected{
      background: #f60;
    }
  }
}
  >button{
    background: none;
    border: none;
    border-bottom: 1px solid #333;
   color: #666;
    margin-top: 8px;
    padding: 2px 4px ;
  }
`;

const TagSection: React.FC = (props)=>{
    const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
    const [selectedTags,setSelectedTags] = useState<string[]>([]);
    const onAddTag = () =>{
        const tagName = window.prompt('新的标签名称是');
       if (tagName !== null){
           setTags([...tags,tagName])
       }
    };
        const onToggleTag = (tag:string)=> {
            const index = selectedTags.indexOf(tag);
            if (index >= 0 ){
                setSelectedTags(selectedTags.filter(t => t!== tag))
                //若 tag 已被选择，则复制所有没有被选中的tag作为新的 selectedTag
            }else {
                setSelectedTags([...selectedTags,tag])
            }
        }
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                <li key={tag} onClick={() => {onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0? 'selected':''}>{tag}</li>)}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagSection};