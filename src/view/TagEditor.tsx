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


type Params ={id:string}
const Topbar = styled.header`
display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: #ffffff;
`
const InputWrapper = styled.div`
background: #ffffff;
  
`
const TagEditor:React.FC = (props) => {
    const {findTag} = useTags()
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id as string));

    return(
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <Space/>
            <div>
                <InputWrapper>
                    <Input label = "标签名" type="text" placeholder="此处输入标签名"
                    value={tag.name}/>
                </InputWrapper>
            </div>

            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}
export {TagEditor}