import HeaderBox from "@/components/HeaderBox";
import RecentTransaction from "@/components/RecentTransaction";
import RightSidebar from "@/components/RightSidebar";
import TotalbalanceBox from "@/components/TotalbalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ id: string; page: string }>;
}) {
  const { id, page } = await searchParams;
  const currentPage = Number(page) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id as string });
  if (!accounts) return;

  const accountsData = accounts?.data;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            user={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
            title="Welcome"
            subtext="Acess and manage your account and transcations efficiently"
          />
          <TotalbalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransaction
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
}
