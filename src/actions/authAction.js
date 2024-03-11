export const login = (credentials) => {
    return async (dispatch) => {
        try {
            // Gửi yêu cầu đăng nhập đến API
            const response = await fetch('http://0.tcp.ap.ngrok.io:12904/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();

            // Dispatch action với kết quả đăng nhập
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
        }
    };
};