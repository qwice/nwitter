import { ITweet } from "./timeline";
import { auth, db, storage } from "../routes/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { Column, DeleteButton, /*EditButton,*/ Payload, Photo, Username, Wrapper } from "./tweets-components";

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
    const user = auth.currentUser;
    const onDelete = async () => {
        const ok = confirm("Are you sure you want to delete this tweet?");
        if (!ok || user?.uid !== userId) return;
        try {
            await deleteDoc(doc(db, "tweets", id))
            if (photo) {
                const photoRef = ref(storage, `tweets/${user.uid}/${id}`)
                await deleteObject(photoRef)
            }
        } catch (e) {
            console.log(e);
        } finally {
            //
        }
    }
    // const onEdit = async () => {
    //     const ok = confirm("Are you sure you want to Edit this tweet?");
    //     if (!ok || user?.uid !== userId) return;
    //     try {
    //         //await upDoc(doc(db, "tweets", id))
    //         if (photo) {
    //             const photoRef = ref(storage, `tweets/${user.uid}/${id}`)
    //             await deleteObject(photoRef)
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         //
    //     }
    // }
    return <Wrapper>
        <Column>
            <Username>{username}</Username>
            <Payload>{tweet}</Payload>
            {user?.uid === userId ? (<DeleteButton onClick={onDelete}>Delete</DeleteButton>) : null}
            {/* {user?.uid === userId ? <EditButton onClick={onEdit}>Edit</EditButton> : null} */}
        </Column>
        <Column>
            {photo ? <Photo src={photo} /> : null}
        </Column>
    </Wrapper>
}
