import { Client, StompConfig } from "@stomp/stompjs";
import React, { useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp, { over } from "stompjs";

var stompClient = null;
export const connectWS = async (email) => {
    const connect = () => {
        let Sock = new SockJS('http://racingboy560-26219.portmap.host:/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        console.log('Connect success');
        // setUserData({ ...userData, "connected": true });
        // stompClient.subscribe('/chatroom/public', onMessageReceived);
        // stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage);
        stompClient.send("/app/addUser", {}, JSON.stringify({
            email: email
        }));
    }
    const onError = (err) => {
        console.log(err);

    }
}


