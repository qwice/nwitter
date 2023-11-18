import { useState } from "react";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Error, Form, Input, Switcher, Title } from "../comoponents/auth-components";
import { Wrapper } from './../comoponents/auth-components';
import GithubButton from "../comoponents/github-btn";

export default function CreateAccount() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //화면이 새로고침 되지 않도록
        setError("");
        if (isLoading || email === "" || password === "") return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <Wrapper>
            <Title>Log into X</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
                <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
                <Input type="submit" value={isLoading ? "Loading..." : "Log in"} />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account? <Link to="/create-account">Create on &rarr;</Link>
            </Switcher>
            <GithubButton />
        </Wrapper>
    );
}