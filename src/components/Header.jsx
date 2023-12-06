import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import arrow from "../assets/Arrow 21.svg"

export default function Header() {


    const navigate = useNavigate();


    return (
        <HeaderMain>
            {window.location.pathname !== "/" && (
                <button onClick={() => navigate(-1)} data-test="go-home-header-btn" >
                    <img src={arrow} alt="backs" />
                </button>
            )}
            CINEFLEX
        </HeaderMain>
    );
}


const HeaderMain = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow:1px 1px 5px orange;

    button {
        background-color: transparent;
        border: none;
        position: absolute;
        left: 10px;
        top: center;
    }
`;
