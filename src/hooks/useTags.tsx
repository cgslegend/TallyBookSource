import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";


const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'},
            ]
        }
        setTags(localTags);
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    }
    const updateTag = (id: number, obj: { name: string }) => {
        setTags(tags.map(tag => {
            if (tag.id === id) {
                return {id: id, name: obj.name};
            } else {
                return tag;
            }
        }))
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const addTag = () => {
        const tagName = window.prompt('新的标签名称是');
        if (tagName !== null) {
            setTags([...tags, {id: createId(), name: tagName}])
        }
    }
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0]
        return tag ? tag.name : ''
    }
    return {tags, getName, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
}
export {useTags}