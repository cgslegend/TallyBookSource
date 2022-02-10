import Layout from "../components/Layout";
import {CategorySection} from "./Money/CategorySection";
import React, {useState} from "react";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";

const CategoryWrapper = styled.div`
background: #ffffff;
`
const Item = styled.div`
 display: flex;
  justify-content: space-between;
  background: #ffffff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
  }

`
function Statistics() {
    const [category,setCategory]= useState<'-'|'+'>('-');
    const {records}= useRecords();
    const {getName} = useTags()
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value = {category}
                                 onChange = {value =>setCategory(value)}/>
            </CategoryWrapper>

            <div>
                {records.map(r =>{
                    return <Item key={Date.parse(r.createdAt)}>
                        <div className="tags">
                            {r.tagIds.map(tagId =><span key={Date.parse(r.createdAt)}>{getName(tagId)}</span>)}
                        </div>
                        {r.note && <div className="note">
                            {r.note}
                        </div>}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                        {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}

                    </Item>
                })
                }
            </div>

        </Layout>
    );
}
export default Statistics;