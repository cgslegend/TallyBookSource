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
                <NumberPadSection>
                        <div className="outputNum">100</div>
                        <div className="pad clearfix">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>删除</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>清空</button>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button className="OK">OK</button>
                            <button className="zero">0</button>
                            <button>.</button>

                        </div>
                </NumberPadSection>
            </div>
        </Layout>
    );
}
export default Money;