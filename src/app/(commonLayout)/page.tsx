import Container from "@/components/Container/Container";
import Profile from "./_components/Profile/Profile";
import NewsFeed from "./_components/NewsFeed/NewsFeed";
import Filter from "./_components/Filter/Filter";

export default function Home() {
  return (
    <Container>
      <div className="font-Lato mt-5 gap-8 grid grid-cols-12 w-full">
        {/* Left Sidebar */}
        <div className="col-span-3">
          <Profile />
        </div>

        {/* NewsFeed */}
        <div className="col-span-6">
          <NewsFeed />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">
          <Filter/>
        </div>
      </div>
    </Container>
  );
}
