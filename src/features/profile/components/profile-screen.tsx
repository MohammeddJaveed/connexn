import MyPosts from "@/features/posts/components/my-posts";
import ProfileDetails from "@/features/profile/components/profile-details";

export default function Profile() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(19rem,0.9fr)_minmax(0,1.4fr)]">
      <ProfileDetails />
      <MyPosts preview />
    </div>
  );
}
