import Link from "next/link";

export default function Logo({ message, linkText, link }: { message: string, linkText: string, link: string }) {
    return (<div
        style={{
            backgroundColor: "#fafafa",
            borderRadius: "10px",
            textAlign: "center",
            padding: "100px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
    >

        <img
            src="/logo-no-background.svg"
            alt="logo"
            // style={{
            //   height: "200px",
            //   marginLeft: "5rem",
            // }}

            className="w-full h-full object-cover object-center mb-8"
        />
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            {message}
        </p>
        <Link
            href={link}
            className="uppercase"
            style={{
                backgroundColor: "#9526a9",
                border: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                color: "#fff",
                fontSize: "20px",
                transition: "0.2s all ease-in-out",
            }}
        >
            {linkText} <i className="fas fa-arrow-circle-right"></i>
        </Link>
    </div>)
}