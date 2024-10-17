import Link from "next/link";
import PostList from "@/app/components/post_list";

export default function Home(): JSX.Element {
  return (
    <div>
        <Link href={'/dashboard'}>Dashboard</Link>
        <PostList />
    </div>
  );
}
