import Layout from "../components/Layout";
import React, {useState} from "react";
import {TagSection} from "./Money/TagSection";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";


type Category = ('-'|'+');
function Money() {
    const [selected,setSelected] = useState(
        {
            tagIds:[] as number [],
            note: '',
            category:'-'as Category,
            amount : 0
        }
    )
    return (
        <Layout>
            <div className="MyLayout">
                <TagSection value = {selected.tagIds}
                onChange={(tags) =>setSelected(
                    {...selected,tagIds: tags}
                )}/>
                <NoteSection value = {selected.note}
                            onChange={(note)=>{setSelected({
                                ...selected,
                                note: note
                            })}}/>
                <CategorySection value = {selected.category}
                                onChange = {(category)=>{
                                    setSelected({
                                        ...selected,category: category
                                    })
                                }}/>
                <NumberPadSection value = {selected.amount}
                                    onChange = {(amount)=>{
                                        setSelected({
                                            ...selected,amount: amount
                                        })
                                    }}/>
            </div>
        </Layout>
    );
}
export default Money;