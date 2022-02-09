import Layout from "../components/Layout";
import React, { useState} from "react";
import {TagSection} from "./Money/TagSection";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {useRecords} from "../hooks/useRecords";
import styled from "styled-components";


type Category = ('-'|'+');
const CategoryWrapper = styled.div`
background: #c4c4c4;
`
const defaultFormData = {
    tagIds:[] as number [],
    note: '',
    category:'-'as Category,
    amount : 0
}
function Money() {
    const [selected,setSelected] = useState(defaultFormData);
   const {addRecord} = useRecords()
    const onChange = (obj:Partial<typeof selected>)=>{
       setSelected({...selected,...obj});
    };
    const submit = ()=>{
        if(addRecord(selected)){
            alert('保存成功');
            setSelected(defaultFormData)
        }

    };
    return (
        <Layout>
            <div className="MyLayout">
                <TagSection value = {selected.tagIds}
                onChange={tagIds => onChange({tagIds})}/>
                <NoteSection value = {selected.note}
                            onChange={note =>onChange({note})}/>
                <CategoryWrapper>
                    <CategorySection value = {selected.category}
                                     onChange = {category =>onChange({category})}/>
                </CategoryWrapper>

                <NumberPadSection value = {selected.amount}
                                    onChange = {amount => onChange({amount})}
                                    onOK={submit}/>
            </div>
        </Layout>
    );
}
export default Money;