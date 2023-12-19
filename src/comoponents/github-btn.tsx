import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../routes/firebase";
import { useNavigate } from "react-router-dom";
import { Button, Logo } from "./github-btn-components";


export default function GithubButton() {
    const navigate = useNavigate();
    const onClick = async () => {
        try {
            const provider = new GithubAuthProvider();
            await signInWithRedirect(auth, provider);
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    }
    return <Button onClick={onClick}>
        <Logo src="/github-mark.svg" />
        Continue with Github
    </Button>
}
