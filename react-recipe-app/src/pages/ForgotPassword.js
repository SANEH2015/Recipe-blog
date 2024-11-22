import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const handleBackToSignInNavigation = () => {
        navigate("/signin");
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f9f9f9",
                padding: "20px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1 style={{ marginBottom: "20px" }}>Forgot Password</h1>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "400px",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <label style={{ marginBottom: "20px" }}>
                    Enter your email to reset your password:
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                        marginBottom: "20px",
                    }}
                >
                    Reset Password
                </button>
                <p
                    style={{
                        textAlign: "center",
                        color: "#007BFF",
                        textDecoration: "underline",
                        cursor: "pointer",
                    }}
                    onClick={handleBackToSignInNavigation}
                >
                    Back to Sign In
                </p>
            </form>
        </div>
    );
}
