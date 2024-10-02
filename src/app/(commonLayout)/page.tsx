import Container from "@/components/Container/Container";
import Profile from "./_components/Profile/Profile";
import NewsFeed from "./_components/NewsFeed/NewsFeed";
import Filter from "./_components/Filter/Filter";

export default function Home() {
  return (
    <Container>
      <div className="font-Lato mt-5 gap-8 grid grid-cols-12 w-full h-[calc(100vh-40px)]">
        {/* Left Sidebar */}
        <div className="col-span-3 overflow-y-auto scrollbar-hide">
          <Profile />
        </div>

        {/* NewsFeed */}
        <div className="col-span-6 overflow-y-auto scrollbar-hide">
          <NewsFeed />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 overflow-y-auto scrollbar-hide">
          <Filter/>
        </div>
      </div>
    </Container>
  );
}
