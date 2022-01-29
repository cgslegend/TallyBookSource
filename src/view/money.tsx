import Layout from "../components/Layout";
import React from "react";
import {TagSection} from "./Money/TagSection";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";

function Money() {
    return (
        <Layout>
            <div className="MyLayout">
                <TagSection/>
                <NoteSection/>
                <CategorySection/>
                <NumberPadSection/>
            </div>
        </Layout>
    );
}
export default Money;