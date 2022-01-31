import Layout from "../components/Layout";
import {useTags} from "useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

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
const Button = styled.button`
font-size:18px;
  border: none;
  padding: 8px 12px;
  background: #767676;
  border-radius: 4px;
  color :#ffffff;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 44px 0;
`
function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag=>
                <li key={tag}>
                    <Link to = {'/tags/'+tag}>
                    <span>{tag}</span>
                    <Icon name="right"/>
                    </Link>
                </li>)}
            </TagList>
            <Center><Button>新增标签</Button></Center>

        </Layout>
    );
}
export default Tags;