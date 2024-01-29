import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import {
//   CONST_KEY,
//   LOGIN_CHK,

// } from "../../src/config";

const LoginDialog = ({ isOpen, onClose, onLogin }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(30);
    const [isLoading, setLoading] = useState(false);
    // const navigate = useNavigate();
    const handleSendOtp = () => {
        setIsOtpSent(true);
        setIsSendButtonDisabled(true);
        startCountdown();
    };

    const startCountdown = () => {
        let seconds = 30;

        const countdownInterval = setInterval(() => {
            setSecondsRemaining((prevSeconds) => prevSeconds - 1);

            if (seconds === 0) {
                clearInterval(countdownInterval);
                setIsSendButtonDisabled(false);
                setSecondsRemaining(30);
            }
        }, 1000);
    };

    const handleLogin = () => {
        if (!phoneNumber) {
            toast.error("please enter phoneNumber", {
                position: "top-right",
                autoClose: 3000,
                closeOnclick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "Light"
            });
            return;
        }
        if (!otp) {
            toast.error("please enter otp", {
                position: "top-right",
                autoClose: 3000,
                closeOnclick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "Light"
            });
            return;
        }
        setLoading(true);

        var myHeaders = new Headers();
        myHeaders.append("SessionToken", "");
        myHeaders.append("DeviceIP", "0.0.0.0");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
            "Access-Control-Allow-Headers",
            "Content-Type,Authorization"
        );
        var reqJson = {
            PhoneNum: phoneNumber,
            SessionKey: "NA",
            DeviceIP: "0.0.0.0",
            IMEI: "NA",

        }
        onLogin();
        onClose();
    };

    return ( <
        Dialog open = { isOpen }
        onClose = { onClose } >
        <
        DialogTitle sx = {
            { backgroundColor: '#f0f8ff', color: 'black' } } > Login < /DialogTitle> <
        DialogContent sx = {
            { backgroundColor: '#f0f8ff', padding: '16px' } } >
        <
        TextField label = "Phone Number"
        type = "tel"
        value = { phoneNumber }
        onChange = {
            (e) => setPhoneNumber(e.target.value) }
        fullWidth margin = "normal" /
        >
        <
        Button variant = "contained"
        color = "primary"
        onClick = { handleSendOtp }
        disabled = { isSendButtonDisabled }
        sx = {
            { mt: 2, backgroundColor: 'darkgreen', color: 'white' } } >
        {
            isSendButtonDisabled ?
            `Resend OTP in ${secondsRemaining} seconds` :
                'Send OTP'
        } <
        /Button>

        {
            isOtpSent && ( <
                >
                <
                TextField label = "Enter OTP"
                type = "text"
                value = { otp }
                onChange = {
                    (e) => setOtp(e.target.value) }
                fullWidth margin = "normal" /
                >
                <
                Button variant = "contained"
                color = "primary"
                onClick = { handleLogin }
                sx = {
                    { mt: 2, backgroundColor: 'darkgreen', color: 'white' } } >
                Login <
                /Button> <
                />
            )
        }

        { /* Link to Register */ } <
        p >
        Don 't have an account?{'
        '} <
        Link to = "/signup"
        onClick = { onClose }
        style = {
            { color: 'darkgreen' } } >
        Register here <
        /Link> <
        /p> <
        /DialogContent> <
        /Dialog>
    );
};

export default LoginDialog;