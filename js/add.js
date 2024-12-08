onmessage = function (e) { // 브라우저로부터 메시지 수신
    let first = parseInt(e.data.to);
    let second = parseInt(e.data.from);
    let result = first + second;
    postMessage(result);
}
