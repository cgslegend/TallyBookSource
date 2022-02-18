import styled from "styled-components";
import React from "react";
import {useTags} from "../../hooks/useTags";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 240px;
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

type Props = { value: number[]; onChange: (selected: number[]) => void }
const TagSection: React.FC<Props> = (props) => {
    const {tags, addTag} = useTags();
    const selectedTagIds = props.value
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId))
            //若 tag 已被选择，则复制所有没有被选中的tag作为新的 selectedTag
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => {
                        onToggleTag(tag.id)
                    }}
                        className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>{tag.name}</li>)}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagSection};