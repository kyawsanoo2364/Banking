import { loggoutAccount } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default function Footer({ user, type = "desktop" }: FooterProps) {
  const handleLogout = async () => {
    const logout = await loggoutAccount();
    if (logout) redirect("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="kso" />
      </div>
    </footer>
  );
}
