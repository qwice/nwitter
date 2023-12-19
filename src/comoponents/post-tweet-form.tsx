import { useState } from 'react';
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { auth, db, storage } from "../routes/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AttachFileButton, AttachFileInput, Form, SubmitBtn, TextArea } from './post-tweet-components';

export default function PostTweetForm() {
    const [isLoading, setLoading] = useState(false);
    const [tweet, setTweet] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(e.target.value);
    };
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length === 1) {
            setFile(files[0]);
        }
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;
        if (!user || isLoading || tweet === "" || tweet.length > 180) return;
        try {
            setLoading(true);
            const doc = await addDoc(collection(db, "tweets"), {
                tweet,
                createdAt: Date.now(),//트윗이 언제 생성되었는지, 트윗이 생성된 시간을 밀리초 단위로 기록
                username: user.displayName || "Anonymous",
                userId: user.uid,
            }) // 새로운 document 생성
            if (file) {
                const locationRef = ref(storage, `tweets/${user.uid}/${doc.id}`);
                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    photo: url
                })
            }
            setTweet("");
            setFile(null);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }

    }
    return <Form onSubmit={onSubmit}>
        <TextArea required rows={5} maxLength={180} onChange={onChange} value={tweet} placeholder="What is happening?" />
        <AttachFileButton htmlFor="file">{file ? "Photo added" : "Add photo"}</AttachFileButton>
        <AttachFileInput onChange={onFileChange} type="file" id="file" accept="image/*" />
        {<SubmitBtn type="submit" value={isLoading ? "Posting..." : "Post Tweet"} />}
    </Form>
}