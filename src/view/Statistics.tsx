import Layout from "../components/Layout";
import {CategorySection} from "./Money/CategorySection";
import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
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
const Header = styled.h3`
font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getName} = useTags()
    const hash: { [key: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category)

    selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY年MM月DD日');
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })

    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.map(([date, records]) => <div key={Math.random()}>
                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r => {
                        return <Item key={Date.parse(r.createdAt)}>
                            <div className="tags" key={Math.random()}>
                                {r.tagIds.map(tagId => <span key={Math.random()}>{getName(tagId)}</span>)
                                    .reduce((result, span, index, array) =>
                                        result.concat(index < array.length - 1 ? [span, ','] : [span]), [] as ReactNode[])
                                }

                            </div>
                            {r.note && <div key={Math.random()} className="note">
                                {r.note}
                            </div>}
                            <div key={Math.random()} className="amount">
                                ￥{r.amount}
                            </div>
                            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}

                        </Item>
                    })
                    }
                </div>
            </div>)
            }
        </Layout>
    );
}

export default Statistics;