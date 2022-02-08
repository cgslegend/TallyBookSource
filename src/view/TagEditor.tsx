import React from "react";
import {useTags} from "../useTags";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Center} from "../components/Center";
import {Space} from "../components/Space";


type Params = { id: string }
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: #ffffff;
`
const InputWrapper = styled.div`
  background: #ffffff;
  padding: 0 14px;

`
const TagEditor: React.FC = (props) => {
    const {findTag, updateTag} = useTags()
    let {id:idString} = useParams<Params>();
    const tag = findTag(parseInt(idString as string));

    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <Space/>
            <div>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="此处输入标签名"
                           value={tag.name}
                           onChange={(e) => {
                               updateTag(tag.id, {name: e.target.value})
                           }}/>
                </InputWrapper>
            </div>

            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}
export {TagEditor}