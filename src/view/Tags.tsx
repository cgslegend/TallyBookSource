import Layout from "../components/Layout";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";
import {Button} from "components/Button";
import {Center} from "components/Center";

const TagList = styled.ol`
  font-size: 16px;
  background: #ffffff;
>li{
  line-height: 20px;
  margin-left: 10px;
  box-shadow: inset 0 -2px 2px -2px rgba(0,0,0,0.5);
  >a{
    padding: 12px 16px 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
`


function Tags() {
    const {tags, addTag} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            <span>{tag.name}</span>
                            <Icon name="right"/>
                        </Link>
                    </li>)}
            </TagList>
            <Center>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;
