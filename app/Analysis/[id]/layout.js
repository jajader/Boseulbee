import Image from "next/image";
import Link from "next/link";

export default function Layout({children}) {
    return (
        <div className="bg-[#ECF4E8]">
            {children}
        </div>
    );
}
